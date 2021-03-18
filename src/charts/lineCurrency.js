import {scaleLinear, scaleTime} from 'd3-scale';
import {line} from 'd3-shape';
import {select} from 'd3-selection';
import {axisBottom, axisLeft} from 'd3-axis';
import {transition} from 'd3-transition';
import { interpolatePath } from 'd3-interpolate-path';

const height = 300;
const width = 350;
const margin = {left: 50, top: 50, bottom: 50, right: 50};

export default function(data) {
    if (select('svg .line-chart').empty()){
        select("#chart").remove();
        select("#contents")
        .append('div')
        .attr("id", "chart")
        .append("svg")
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr("id", 'js-chart')
        .append('g')
        .attr('class', 'line-chart')
        .attr("transform", "translate("+margin.left+"," + margin.top + ")");
        //add x-axis once
        select("svg .line-chart").append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        // add y-axis once
        select("svg .line-chart").append("g")
        .attr("class", "y-axis")
        // add legend once
        Array(["20", "45", "#389eaa"], ["20", "30", "#0e7534"]).map((val, idx) => {
          select("svg .line-chart")
          .append("rect")
          .attr("height", 5)
          .attr("width", 15)
          .attr("x", val[0])
          .attr("y", val[1])
          .attr("fill", val[2])
        });
    
        Array(['20', '-25', 'Dollar-Lira Foreign Exchange Rate', 'large', 'bold'], 
          ['80', '-10', "November 2018 - Present", "small", ""],
          ['39', '50', "Official Rate", 'small', ''],
          ['39', '35', 'Unofficial Rate', 'small', '']).map((val, _) => {
            select("svg .line-chart")
            .append("text")
            .attr("x", val[0])
            .attr("y", val[1])
            .text(val[2])
            .attr("font-size", val[3])
            .attr("font-weight", val[4])
            .attr("class", 'annotation')
          })
        
    }
    
    let svg = select("svg .line-chart")
    

    let x = scaleTime()
      .domain([new Date("11/15/2018") , new Date("4/15/2021") ]) 
      .range([0, width])

      select(".line-chart .x-axis")
        .call(axisBottom(x));

    let y = scaleLinear()
      .domain([0, 13000])
      .range([height, 0]);

    select(".line-chart .y-axis")
     .call(axisLeft(y))
    
    const firstLineScale = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d['official']));

    const secondLineScale = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d['unofficial']));

    const scales = [firstLineScale, secondLineScale]
    const colors = ["#389eaa", "#0e7534"]
    const t = transition().duration(2000);

    svg.selectAll(".line")
      .data([data, data])
      .join(
        enter => enter.append('path').attr("d", (d, i) => scales[i](d)), 
         update => update.call(elem => 
           elem.transition(t).attrTween("d", function(d, i) {
            let previous = select(this).attr("d");
            let current = scales[i](d);
            return interpolatePath(previous, current)
           })
        )
      )
      .attr('class', 'line')
      .style("stroke", (_, i) => colors[i])
      .attr('stroke-width', 4)
      .attr('fill','none')
    };

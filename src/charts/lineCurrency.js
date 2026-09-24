import {scaleLinear, scaleTime} from 'd3-scale';
import {line} from 'd3-shape';
import {select} from 'd3-selection';
import {axisBottom, axisLeft} from 'd3-axis';
import {transition} from 'd3-transition';

const height = 300;
const width = 350;
const margin = {left: 50, top: 50, bottom: 50, right: 50};
// Animation pace: the tip travels through time at a fixed speed per month,
// capped so redrawing the whole series (e.g. coming back from a later slide) stays short
const msPerMonth = 300;
const maxDuration = 3500;
const msInMonth = 1000 * 60 * 60 * 24 * 30.44;

// Tip of the line currently on screen, carried across slides so each one
// continues (or rewinds) from where the previous one stopped
let drawnTip = null;
// Longest data seen since the chart was created; covers the path when rewinding
let drawnData = [];

const parseDate = d => new Date(d.date);

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
        Array(["20", "45", "#8a857c"], ["20", "30", "#0f6b45"]).map((val) => {
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
          ['39', '35', 'Unofficial Rate', 'small', '']).map((val) => {
            select("svg .line-chart")
            .append("text")
            .attr("x", val[0])
            .attr("y", val[1])
            .text(val[2])
            .attr("font-size", val[3])
            .attr("font-weight", val[4])
            .attr("class", 'annotation')
          })

        drawnTip = null;
        drawnData = [];
    }
    
    let svg = select("svg .line-chart")

    let x = scaleTime()
      .domain([new Date("11/15/2018") , new Date("4/15/2021") ]) 
      .range([0, width])

      // Month-year labels every six months
      select(".line-chart .x-axis")
        .call(axisBottom(x)
          .tickValues(["1/1/2019", "7/1/2019", "1/1/2020", "7/1/2020", "1/1/2021"].map(d => new Date(d)))
          .tickFormat(x.tickFormat(null, "%b %Y")));

    let y = scaleLinear()
      .domain([0, 13000])
      .range([height, 0]);

    select(".line-chart .y-axis")
     .call(axisLeft(y))
    
    const series = data.length >= drawnData.length ? data : drawnData
    const startTip = drawnTip || parseDate(data[0])
    const endTip = parseDate(data[data.length - 1])
    drawnData = series

    // Path for one rate up to `tip`, ending on a point interpolated linearly
    // between the surrounding months so the tip glides rather than jumping
    const pathUpTo = (tip, key) => {
        const points = []
        for (let j = 0; j < series.length; j++) {
            const date = parseDate(series[j])
            if (date <= tip) {
                points.push([x(date), y(+series[j][key])])
                continue
            }
            if (j > 0) {
                const prevDate = parseDate(series[j - 1])
                const f = (tip - prevDate) / (date - prevDate)
                const value = +series[j - 1][key] + f * (series[j][key] - series[j - 1][key])
                points.push([x(tip), y(value)])
            }
            break
        }
        return line()(points)
    }

    const keys = ['official', 'unofficial']
    const colors = ["#8a857c", "#0f6b45"]
    const months = Math.abs(endTip - startTip) / msInMonth
    // Default easing is cubic in-out
    const t = transition().duration(Math.min(months * msPerMonth, maxDuration));

    svg.selectAll(".line")
      .data(keys)
      .join('path')
      .attr('class', 'line')
      .style("stroke", (_, i) => colors[i])
      .attr('stroke-width', 4)
      .attr('fill','none')
      .attr("d", key => pathUpTo(startTip, key))
      .transition(t)
      .attrTween("d", function(key) {
        const node = this
        return progress => {
          const tip = new Date(+startTip + (endTip - startTip) * progress)
          // A chart removed mid-animation must not overwrite the new chart's tip
          if (node.isConnected) drawnTip = tip
          return pathUpTo(tip, key)
        }
      })
    };

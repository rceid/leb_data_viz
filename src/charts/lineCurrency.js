import {csv} from 'd3-fetch';
import {scaleLinear, scaleTime} from 'd3-scale';
import {line} from 'd3-shape';
import {select} from 'd3-selection';
import {axisBottom, axisLeft} from 'd3-axis';

const height = 300;
const width = 300;
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
        .append('g')
        .attr('class', 'line-chart')
        .attr("transform", "translate("+margin.left+"," + margin.top + ")");
    }
    
    let svg = select("svg .line-chart")
    svg.select(".official-rate").remove()
    svg.select(".unofficial-rate").remove()
    svg.select(".x-axis").remove()
    svg.select(".y-axis").remove()

    let x = scaleTime()
      //.domain(extent(data, d => new Date(d.date))) 
      .domain([new Date("11/15/2018") , new Date("3/15/2021") ]) 
      .range([0, width])

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(axisBottom(x).ticks(11));

    let y = scaleLinear()
      .domain([0, 10000])
      .range([height, 0]);

    svg.append("g")
      .attr("class", "y-axis")
      .call(axisLeft(y))
    
    const firstLineScale = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d['official']));

    const secondLineScale = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d['unofficial']));

    svg.append("path")
      .data([data])
      .attr('class', 'official-rate')
      .style("stroke", "#389eaa")
      .attr('stroke-width', 4)
      .attr('fill','none')
      .attr("d", firstLineScale)

    svg.append("path")
      .data([data])
      .attr('class', 'unofficial-rate')
      .style("stroke", "#0e7534")
      .attr('stroke-width', 4)
      .attr('fill','none')
      .attr("d", secondLineScale)

    // svg.selectAll(".unoff-dots")
    //   .data(data)
    //   .join('circle')
    //   .attr('class', 'unoff-dots')
    //   .attr('cx', d=> x(new Date(d.date)))
    //   .attr('cy', d=> y(d.unofficial))
    //   .attr('r', 3)
    //   .attr('stroke', 'white')
    //   .attr('fill', 'black')

    };
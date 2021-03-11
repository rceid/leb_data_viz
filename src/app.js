import './main.css';
import vegaEmbed from 'vega-embed';
import {select} from 'd3-selection';
import DumbBell from './charts/dumbbell.js';
import BeeSwarmRegion from './charts/beeswarmRegions.js'
import BeeSwarmCountry from './charts/beeswarmCountries.js'
import {csv} from 'd3-fetch';
import lineChart from './charts/lineCurrency.js'



csv("./../data/fx_rate.csv").then(main)

const mySlides = [
    {title:"The October Revolution",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "+
    "Donec purus purus, lobortis non massa eu, malesuada suscipit erat. ",
    render: (data) => {
        let cutoffDate  = new Date("10/15/2019")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"First Covid-19 Lockdown",
    content: "We we're doing so well :(. "+
    "Donec purus purus, lobortis non massa eu, malesuada suscipit erat. ",
    render: (data) => {
        let cutoffDate  = new Date("3/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Beirut Port Explosion",
    content: "Never forget. "+
    "Donec purus purus, lobortis non massa eu, malesuada suscipit erat. ",
    render: (data) => {
        let cutoffDate  = new Date("08/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Today - an all-time high",
    content: "A living hell. "+
    "Donec purus purus, lobortis non massa eu, malesuada suscipit erat. ",
    render: (data) => {
        let cutoffDate  = new Date("03/15/2021")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"First slide",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "+
    "Donec purus purus, lobortis non massa eu, malesuada suscipit erat. "+ 
    "Nam eu orci purus. Praesent placerat laoreet diam id lobortis. "+ 
    "Aenean interdum, purus ornare pulvinar tincidunt, quam lectus "+
    "hendrerit tortor, mollis ultricies dui justo sit amet massa.", 
    render: (data) => {
        vegaEmbed('#chart', DumbBell, {actions: false})
    }},
    {title:"Second slide",
    content: "Praesent eu tincidunt nibh. Aenean semper, augue at lobortis "+
    "posuere, erat ante tempus tellus, sed accumsan nisi lectus ut magna. "+
    "In hac habitasse platea dictumst. Aliquam cursus orci sed elit dignissim "+
    "euismod. Praesent aliquam commodo dui, nec tempor mi ullamcorper et. "+
    "Sed nec urna velit. Morbi scelerisque vestibulum lobortis. Curabitur "+
    "pharetra sed est non scelerisque. Pellentesque blandit egestas lectus, "+
    "at vehicula erat consectetur mattis.",
    render: (data) => {
        vegaEmbed('#chart', BeeSwarmRegion, {actions: false})
    }},
    {title:"Third slide",
    content: "Praesent eu tincidunt nibh. Aenean semper, augue at lobortis "+
    "posuere, erat ante tempus tellus, sed accumsan nisi lectus ut magna. "+
    "In hac habitasse platea dictumst. Aliquam cursus orci sed elit dignissim "+
    "euismod. Praesent aliquam commodo dui, nec tempor mi ullamcorper et. "+
    "Sed nec urna velit. Morbi scelerisque vestibulum lobortis. Curabitur "+
    "pharetra sed est non scelerisque. Pellentesque blandit egestas lectus, "+
    "at vehicula erat consectetur mattis.",
    render: (data) => {
        vegaEmbed('#chart', BeeSwarmCountry, {actions: false})
    }},
];


function main (data){
    
    let slideIdx = 0;
    const slideTitle = select("#text h2");
    const slideContent = select("#text p");
    const updateState = newIdx => {
        slideIdx = newIdx;
        renderSlide();
    }
    let progressBar = document.body.querySelector("#p-bar")
    
    select("#buttons #back").on('click', () =>
        updateState(slideIdx ? slideIdx - 1 : slideIdx),
    );
    
    select("#buttons #next").on('click', () =>
        updateState(slideIdx === mySlides.length - 1 ? slideIdx : slideIdx + 1),);

    function renderSlide() {
        progressBar.value = ((slideIdx + 1)/ mySlides.length) * 100
        const currentSlide = mySlides[slideIdx];
        currentSlide.render(data);
        slideTitle.text(currentSlide.title);
        slideContent.text(currentSlide.content);
    }
    renderSlide();
}
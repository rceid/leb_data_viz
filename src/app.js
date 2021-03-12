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
    {title:"Devaluation of the Lebanese Lira",
    content: "\nThe crux of the current economic crisis lies with the Lebanese currency's loss of value."+
    "\nWhile it has been pegged to the dollar at ~1500 Lira since 1997, a black market exchange rate began emerging mid-2019, where our line chart has stopped."  +
    "\nThe divergence between the official and unofficial rates coincided with general political unrest and popular resistance against the corrupt ruling class, "+
    "dubbed the October Revolution.\n The momentum of this movement has continued to the present day and has lead to the resignation of several Prime Ministers, yet" +
    " popular reforms have yet to be put in place.",
    render: (data) => {
        let cutoffDate  = new Date("10/15/2019")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"First Covid-19 Lockdown",
    content: "\nAs the Revolution raged on, the currency did not stop losing value and the situation became increasingly worrying. "+
    "Yet like every country in the world, Covid-19 came for Lebanon. The authorities did act swiftly, to their credit, and kept caseload under control. " +
    "\nThe currency had already begun its death spiral and the gulf between the unofficial and official rate only grew. The Lebanese economy, already under pressure " +
    "from ongoing, country-wide protests and changing governments was now facing an enormous stress test in the form of the novel virus. The line chart is stopped at March " +
    "2020, the month of the first lockdown.",
    render: (data) => {
        let cutoffDate  = new Date("3/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Beirut Port Explosion",
    content: "\nThe summer months of 2020 proved brutal for the Lebanese Lira, a period over which it incurred most of its loss of  value. " +
    "And just when the country could not face any more challenges, it suffered yet another when on August 4, 2020 a double explosion of catastrophic " +
    "proportions rocked the capital's port. \nIn its wake, 210 people were killed, 7,500 were injured, and an estimated 300,000 were left homeless. "+
    "\nAlthough the senseless destruction was caused by stockpiles of ammonium nitrate that Lebanese Customs had negligently left in port warehouses for " + 
    "several years, no parties have been brought to justice. The country would now have to face the uncertainty of a partly destroyed capital and weakening currency. ", 
    render: (data) => {
        let cutoffDate  = new Date("08/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Today- 10,000 L.L per Dollar ",
    content: "\nThe crisis has not let up, and the Lira has hit an all-time low as this is being written. Wages have plummeted and the people of Lebanon "+
    "are seemingly powerless to do anything about the situation that rules their lives. \nAccording to a World Food Programme survey administered following the " + 
    "Covid-19 outbreak and subsequent lockdown measures, 49% of Lebanese respondents are worried about having enough to eat. \n\nThe Lira's decline, coupled with" +
    " skyrocketing food prices, which we explore in the next slides, has led to an unprecedented situation of poverty, hunger, and desperation.",
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
        //let leg = select("#legend").append("rect").attr("x", "20").attr('y', "20").attr('fill', 'steelblue').append('text').attr('x', '25').attr('y', '20').text('rectangle')
        vegaEmbed('#chart', BeeSwarmRegion, {actions: false, renderer:'svg'})
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
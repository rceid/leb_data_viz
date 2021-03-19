import './main.css';
import {csv} from 'd3-fetch';
import vegaEmbed from 'vega-embed';
import {select} from 'd3-selection';
import DumbBell from './charts/dumbbell.js';
import BeeSwarmRegion from './charts/beeswarmRegions.js'
import BeeSwarmCountry from './charts/beeswarmCountries.js'
import areaChartUSD from './charts/areaChartUSD.js'
import areaChartLollar from './charts/areaChartLollar.js'
import lineChart from './charts/lineCurrency.js'


csv("./data/fx_rate.csv").then(main)

const mySlides = [
    {title:"Intro",
    content:`In this slideshow I will be exploring Lebanese economic crisis and ensuing state of food insecurity`
    +` using modern data visualizations. \n\nData sources include World Food Programme's datasets for commodity prices, `+
    `Banque du Liban (the Central Bank of Lebanon) for the Lebanese currency's official peg to the dollar, and lirarate.com, an unofficial website reporting the `+
    `\"black market\" rate for the local currency used by many Lebanese. \n\nThis project was created using Javascript's d3 library,`+
    ` as well as Vega powered by Altair with Python. This project was created for the course Data Visualization for Policy Analysis at UChicago.`,
    source:"WFP Dataset: https://data.humdata.org/dataset/wfp-food-prices",
    render: () => {
        if (!select("#chart svg").empty()){
            select("#chart svg").remove()
           }
        if (select("#chart img").empty()){
        select("#chart")
        .append("img")
        .attr("src", "./data/images/charts_intro.png")
        .attr('width', '80%')
        .attr('height', 'auto')
        }
    }},
    {title:"Devaluation of the Lebanese Lira",
    content: "The crux of the current economic crisis lies with the loss of value of the local currency, the Lebanese Lira."+
    "\nWhile it has been pegged to the dollar at ~1500 Lira since 1997, a black market exchange rate began emerging mid-2019, where our line chart is stopped."  +
    "\n\nDue to this initial divergence, banks closed for two weeks end October-2019 and prohibited the withdraw of dollars to prevent bank runs, adding to the pressure on the currency. "+
    "\n\nThe divergence between the official and unofficial rates also coincided with general political unrest and popular resistance against the corrupt ruling class, "+
    "dubbed the October Revolution.\n\n The momentum of this movement has continued to the present day and has lead to the resignation of three different Prime Ministers, yet" +
    " popular reforms have yet to be put in place.",
    source:"sources: Banque du Liban and www.lirarate.com",
    render: (data) => {
        let cutoffDate  = new Date("10/15/2019")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"First Covid-19 Lockdown",
    content: "As the Revolution raged on, the currency did not stop losing value and the situation became increasingly worrying. "+
    "And like every country in the world, Covid-19 came for Lebanon. The authorities did act swiftly, to their credit, and kept caseload under control. " +
    "\n\nThe currency had already begun its dangerous decline and the gulf between the unofficial and official rate only grew due to lockdown measures. The Lebanese economy, already under pressure " +
    "from ongoing, country-wide protests and changing governments was now facing an enormous stress test in the form of the novel virus. The line chart is stopped at March " +
    "2020, the month of the first lockdown.",
    source:"sources: Banque du Liban and www.lirarate.com",
    render: (data) => {
        let cutoffDate  = new Date("3/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Beirut Port Explosion",
    content: "The summer months of 2020 proved brutal for the Lebanese Lira, a period over which it incurred most of its loss of  value. " +
    "And just when the country could not face any more challenges, it suffered yet another when on August 4, 2020 when a double explosion of catastrophic " +
    "proportions rocked the capital's port. \nIn its wake, 210 people were killed, 7,500 were injured, and an estimated 300,000 were left homeless. "+
    "\n\nAlthough the senseless destruction was caused by stockpiles of ammonium nitrate that Lebanese Customs had negligently left in port warehouses for " + 
    "several years, no parties have been brought to justice. The country would now have to face the uncertainty of a partly destroyed capital and weakening currency. ", 
    source:"sources: Banque du Liban and www.lirarate.com",
    render: (data) => {
        let cutoffDate  = new Date("08/15/2020")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Today: More than 10,000 LL per Dollar ",
    content: "The crisis has not let up, and the Lira hit an all-time low at the time of writing this, mid-March. It peaked at 15,000 LBP per dollar before"+
    " stabilizing at ~12,000. Wages have plummeted and the people of Lebanon are seemingly powerless to do anything about the situation that rules their lives."+
    " \nAccording to a World Food Programme survey administered following the Covid-19 outbreak and subsequent lockdown measures, 49% of Lebanese respondents are"+
    " worried about having enough to eat. \n\nThe Lira's decline, coupled with skyrocketing food prices, which we will explore in the next slides, has led to widespread"+
    " poverty, hunger, and desperation, unseen since the Civil War of 1975-90.",
    source:"sources: Banque du Liban and www.lirarate.com",
    render: (data) => {
        let cutoffDate  = new Date("03/15/2021")
        let filteredData = data.filter(( { date } ) => new Date(date)  <= cutoffDate)
        lineChart(filteredData)
    }},
    {title:"Price Comparison 2018-2020",
    content: "Not only has the currency lost around 85% of its value since end-2018, "+
    "but prices have increased, notably the prices of food and everyday goods, as we see in the dumbell chart."+ 
    " \n\nSome commodities such as fuel and bread are subsidized by the government and have "+
    "experienced minimal impact. Most commodities have skyrocketed in price, such as sunflower oil (and all cooking oils), "+ 
    "increasing 450%.  It is increasingly expensive for the people of Lebanon to feed themselves, " +
    "and price inflation is a serious concern. \n\nGiven the food insecurity felt by a sizeable portion " +
    "of the population, many lower-income families have decreased their consumption of food, gas, and "+
    "electricty to reduce expenditures. Middle income families, while also rationing their consumption of utilities, have"+
    " adapted by removing chicken and meat from their diets and opting for less expensive, locally-grown foods.", 
    source:"source: World Food Programme Commodity Prices for Lebanon, 2018-2020",
    render: () => {
        vegaEmbed('#chart', DumbBell, {actions: false})
    }},
    {title:"Commodity Price Changes in 2020 by Region",
    content: "The interactive Bee Swarm plot show commodities and their " +
    "price change (in percent) from beginning to end of 2020. A small number of outliers above 800% were removed for scaling. \n\nEach region of " +
    " the world is comprised of World Food Programme beneficiary countries for which commodity prices are"+
    " available and recorded. Each dot is the average price change of the good among the region's countries.\n " + 
    "\nThe Middle East and North Africa region does stand out as a volatile region for prices compared to the other five." +
    "We will explore in the next slide how Lebanon fits into the regional picture.",
    source:"source: World Food Programme Commodity Prices for Beneficiary Countries, 2020",
    render: () => {
        vegaEmbed('#chart', BeeSwarmRegion, {actions: false, renderer:'svg'})
    }},
    {title:"2020 Price Changes in the MENA Region",
    content: "This interactive Bee Swarm plot shows prices changes for WFP beneficiary " +
    "countries in the Middle East and North Africa region. \n\nLebanon certainly is one " +
    "of the countries that stands out in price volatility, second only to Syria. This "+
    "tell us that Lebanon isn't a victim of some greater regional instability - it is an "+
    "an outlier and one of the drivers of the regional price volatility seen in the previous slide. "+
    " \n\nLebanon must take action to prevent the onset of an even worse food crisis. Many citizens "+
    "have taken matters into their own hands and begun growing and purchasing local food, as the "+
    "devalued Lira will not go far in purchasing imported goods. \n\nA meaningful shift to local consumption" +
    " will be a radical step for this country that imports food, and many other commodities, on a massive scale.\n\n",
    source:"source: World Food Programme Commodity Prices for Beneficiary Countries, 2020",
    render: () => {
        vegaEmbed('#chart', BeeSwarmCountry, {actions: false})
    }},
    {title:"Basket of Household Goods",
    content: "Now we take a look at the price of a normal basket of goods with this area chart. "+
    "Without taking into account the devaluation of the Lira, we see that this basket has more than doubled "+
    "in (nominal) price between November 2018 and November 2020. A trip to the grocery store that once cost $40 now costs "+
    "almost $90. \n\nAs previously mentioned, Lebanese people may adjust their habits, consuming less or substituting "+
    "goods, but this financial pressure has fundamentally altered everyday life and many feel powerless to do anything "+
    "about it.",
    source:"source: World Food Programme Commodity Prices for Lebanon, 2018-2020",
    render: () => {
        vegaEmbed('#chart', areaChartUSD, {actions: false})
    }},
    {title:"Real Prices for Basket of Goods",
    content: "This chart shows the real prices of the same commodities, in the place of nominal prices in the previous slide's chart."+
    " This chart captures the real financial pressure that the average Lebanese person paid wages in the constantly devaluing Lira is currently"+
    " facing and their massive loss of purchasing power over two years. \n\nThe red line represents the highest price that the basket attained in"+
    " the previous slide's graph. Prices are crushingly high, yet people need to eat. Families are faced with impossible decisions of whether to "+
    "save their money or purchase a little more lentils, or rice, or bread.",
    source:"source: World Food Programme Commodity Prices for Lebanon, 2018-2020",
    render: () => {
        vegaEmbed('#chart', areaChartLollar, {actions: false})
    }},
    {title:"Conclusion",
    content:"Many fear that Lebanon is headed for collapse, and the economic crisis will be the primary driver leading it into the depths of despair. Many "+ 
    "had hope that the October Revolution (pictured on the right) would bring about meaningful change in a country plagued by a corrupt political elite in power for many decades and " +
    "only able to deliver to their constituents via clientelism based on religious confession. \n\nFollowing the resignation of the government and the failure of all subsequent "+
    "iterations to deliver on promises of reform, many question if change is possible. With the arrival of the Covid-19 pandemic and the ensuing public health and economic damage" + 
    " and the disastrous Beirut Port explosion, Lebanon is facing its worst crisis as a country since the civil war of 1975-1990. " +
    "\n\nMy motivation for undertaking this project was both the sense of "+
    "urgency and powerlessness to make a difference in a country I hold dear. I hope to use my 'data skills' to tell stories of people caught up in" +
    " conflicts and crises to give them a voice.",
    source:'Image source: Nabil Ismaili, https://www.wilpf.org',
    render: () => {
        if (!select("#chart canvas").empty()){
        select("#chart canvas").remove()
        select("#chart form").remove()
        select("#chart")
        .append("img")
        .attr("src", "https://www.wilpf.org/wp-content/uploads/2019/12/1-Nabil_Ismail_Photography-1536x949.jpg")
        .attr('width', '100%')
        .attr('height', 'auto')
        }
}}
];

function main (data){
    let slideIdx = 0;
    const slideTitle = select("#text h2");
    const slideContent = select("#text p");
    const source = select("#text #source")
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
        source.text(currentSlide.source)
    }
    renderSlide();
}
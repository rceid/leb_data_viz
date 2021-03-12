export default {
    "config": {
      "view": {"continuousWidth": 400, "continuousHeight": 300, "stroke": null},
      "facet": {"spacing": 0}
    },
    "data": {"name": "data-48b3d95f330c048d2063fed7b807ae17"},
    "mark": {"type": "circle", "size": 15},
    "encoding": {
      "color": {
        "type": "nominal",
        "field": "Country",
        "legend": {
          'orient':'bottom',
          'columns':2
        },
        "scale": {"scheme": "category10"}
      },
      "column": {
        "type": "nominal",
        "field": "Country",
        "header": {
          "labelFontSize": 0,
          "labelOrient": "bottom",
          "titleFontSize": 0,
          "titleOrient": "top",
          "labelPadding":3
        },
        "title": ""
      },
      "tooltip": [
        {"type": "quantitative", "field": "Percent Change"},
        {"type": "nominal", "field": "Commodity"},
        {"type": "nominal", "field": "Country"}
      ],
      "x": {
        "type": "quantitative",
        "axis": {"grid": false, "labels": false, "ticks": true, "values": [0]},
        "field": "jitter",
        "scale": {},
        "title": null
      },
      "y": {"type": "quantitative", "field": "Percent Change"}
    },
    "height": 250,
    "title": {
      "text": ['Change in Commodity Prices, MENA Region, 2020'],
      "fontSize": 15,
      "anchor": "right",
      'offset':15
    },
    "transform": [
      {"calculate": "sqrt(-2*log(random()))*cos(2*PI*random())", "as": "jitter"}
    ],
    "width": 60,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    "datasets": {
      "data-48b3d95f330c048d2063fed7b807ae17": [
        {
          "Country": "Djibouti",
          "Commodity": "Beans (white) - Retail",
          "mp_year": 2020,
          "pct_change": 0.06584587324288858,
          "Percent Change": 7
        },
        {
          "Country": "Djibouti",
          "Commodity": "Bread - Retail",
          "mp_year": 2020,
          "pct_change": 0,
          "Percent Change": 0
        },
        {
          "Country": "Djibouti",
          "Commodity": "Fuel (kerosene) - Retail",
          "mp_year": 2020,
          "pct_change": -0.053415740064339925,
          "Percent Change": -5
        },
        {
          "Country": "Djibouti",
          "Commodity": "Millet - Retail",
          "mp_year": 2020,
          "pct_change": 0.05710883617356888,
          "Percent Change": 6
        },
        {
          "Country": "Djibouti",
          "Commodity": "Oil (vegetable) - Retail",
          "mp_year": 2020,
          "pct_change": 0.018449829411250063,
          "Percent Change": 2
        },
        {
          "Country": "Djibouti",
          "Commodity": "Pasta - Retail",
          "mp_year": 2020,
          "pct_change": 0.1505575031934348,
          "Percent Change": 15
        },
        {
          "Country": "Djibouti",
          "Commodity": "Rice (imported) - Retail",
          "mp_year": 2020,
          "pct_change": -0.01552668689174019,
          "Percent Change": -2
        },
        {
          "Country": "Djibouti",
          "Commodity": "Sorghum (red) - Retail",
          "mp_year": 2020,
          "pct_change": 0.20420424645776747,
          "Percent Change": 20
        },
        {
          "Country": "Djibouti",
          "Commodity": "Sorghum (white) - Retail",
          "mp_year": 2020,
          "pct_change": -0.16666666666666685,
          "Percent Change": -17
        },
        {
          "Country": "Djibouti",
          "Commodity": "Sugar - Retail",
          "mp_year": 2020,
          "pct_change": -0.01981981981981995,
          "Percent Change": -2
        },
        {
          "Country": "Djibouti",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": -0.07100214477920763,
          "Percent Change": -7
        },
        {
          "Country": "Iraq",
          "Commodity": "Beans (white) - Retail",
          "mp_year": 2020,
          "pct_change": 0.06340172169216354,
          "Percent Change": 6
        },
        {
          "Country": "Iraq",
          "Commodity": "Bread (khoboz) - Retail",
          "mp_year": 2020,
          "pct_change": -0.07221775247525128,
          "Percent Change": -7
        },
        {
          "Country": "Iraq",
          "Commodity": "Bulgur - Retail",
          "mp_year": 2020,
          "pct_change": 0.0037932888435656485,
          "Percent Change": 0
        },
        {
          "Country": "Iraq",
          "Commodity": "Cheese (local) - Retail",
          "mp_year": 2020,
          "pct_change": -0.030984056514872127,
          "Percent Change": -3
        },
        {
          "Country": "Iraq",
          "Commodity": "Chickpeas - Retail",
          "mp_year": 2020,
          "pct_change": 0.0206344337543729,
          "Percent Change": 2
        },
        {
          "Country": "Iraq",
          "Commodity": "Dates - Retail",
          "mp_year": 2020,
          "pct_change": -0.09960010341291206,
          "Percent Change": -10
        },
        {
          "Country": "Iraq",
          "Commodity": "Disinfecting solution - Retail",
          "mp_year": 2020,
          "pct_change": 0.002582099115859493,
          "Percent Change": 0
        },
        {
          "Country": "Iraq",
          "Commodity": "Eggs - Retail",
          "mp_year": 2020,
          "pct_change": 0.26888300098674217,
          "Percent Change": 27
        },
        {
          "Country": "Iraq",
          "Commodity": "Fish - Retail",
          "mp_year": 2020,
          "pct_change": -0.18009370051911028,
          "Percent Change": -18
        },
        {
          "Country": "Iraq",
          "Commodity": "Fuel (gas) - Retail",
          "mp_year": 2020,
          "pct_change": -0.09207704834148833,
          "Percent Change": -9
        },
        {
          "Country": "Iraq",
          "Commodity": "Fuel (kerosene) - Retail",
          "mp_year": 2020,
          "pct_change": -0.31065027245251775,
          "Percent Change": -31
        },
        {
          "Country": "Iraq",
          "Commodity": "Fuel (petrol-gasoline) - Retail",
          "mp_year": 2020,
          "pct_change": -0.13167332428648804,
          "Percent Change": -13
        },
        {
          "Country": "Iraq",
          "Commodity": "Handwash soap - Retail",
          "mp_year": 2020,
          "pct_change": 0.005549615465761149,
          "Percent Change": 1
        },
        {
          "Country": "Iraq",
          "Commodity": "Lentils - Retail",
          "mp_year": 2020,
          "pct_change": 0.21290680050585492,
          "Percent Change": 21
        },
        {
          "Country": "Iraq",
          "Commodity": "Meat (beef) - Retail",
          "mp_year": 2020,
          "pct_change": -0.059319229203442125,
          "Percent Change": -6
        },
        {
          "Country": "Iraq",
          "Commodity": "Meat (chicken) - Retail",
          "mp_year": 2020,
          "pct_change": 0.029712875937995775,
          "Percent Change": 3
        },
        {
          "Country": "Iraq",
          "Commodity": "Meat (lamb) - Retail",
          "mp_year": 2020,
          "pct_change": -0.007475111720471675,
          "Percent Change": -1
        },
        {
          "Country": "Iraq",
          "Commodity": "Milk (powder) - Retail",
          "mp_year": 2020,
          "pct_change": -0.02584025092431619,
          "Percent Change": -3
        },
        {
          "Country": "Iraq",
          "Commodity": "Milk - Retail",
          "mp_year": 2020,
          "pct_change": -0.2238727907123722,
          "Percent Change": -22
        },
        {
          "Country": "Iraq",
          "Commodity": "Oil (vegetable) - Retail",
          "mp_year": 2020,
          "pct_change": 0.0667538118098326,
          "Percent Change": 7
        },
        {
          "Country": "Iraq",
          "Commodity": "Onions - Retail",
          "mp_year": 2020,
          "pct_change": 0.389845451450539,
          "Percent Change": 39
        },
        {
          "Country": "Iraq",
          "Commodity": "Potatoes - Retail",
          "mp_year": 2020,
          "pct_change": -0.14426691529865804,
          "Percent Change": -14
        },
        {
          "Country": "Iraq",
          "Commodity": "Rice - Retail",
          "mp_year": 2020,
          "pct_change": 0.17399159286471072,
          "Percent Change": 17
        },
        {
          "Country": "Iraq",
          "Commodity": "Salt (iodised) - Retail",
          "mp_year": 2020,
          "pct_change": 0.6837941076006792,
          "Percent Change": 68
        },
        {
          "Country": "Iraq",
          "Commodity": "Sanitary pads - Retail",
          "mp_year": 2020,
          "pct_change": 0.4294431531511893,
          "Percent Change": 43
        },
        {
          "Country": "Iraq",
          "Commodity": "Shampoo - Retail",
          "mp_year": 2020,
          "pct_change": 0.0023753892170546922,
          "Percent Change": 0
        },
        {
          "Country": "Iraq",
          "Commodity": "Sugar - Retail",
          "mp_year": 2020,
          "pct_change": 0.1092390056352126,
          "Percent Change": 11
        },
        {
          "Country": "Iraq",
          "Commodity": "Tea - Retail",
          "mp_year": 2020,
          "pct_change": -0.02200181255816647,
          "Percent Change": -2
        },
        {
          "Country": "Iraq",
          "Commodity": "Tomatoes - Retail",
          "mp_year": 2020,
          "pct_change": 0.4978745210275477,
          "Percent Change": 50
        },
        {
          "Country": "Iraq",
          "Commodity": "Toothbrush - Retail",
          "mp_year": 2020,
          "pct_change": 0.009452108530673575,
          "Percent Change": 1
        },
        {
          "Country": "Iraq",
          "Commodity": "Toothpaste - Retail",
          "mp_year": 2020,
          "pct_change": 0.0012174231288946055,
          "Percent Change": 0
        },
        {
          "Country": "Iraq",
          "Commodity": "Wage (non-qualified labour) - Retail",
          "mp_year": 2020,
          "pct_change": -0.045545669789196386,
          "Percent Change": -5
        },
        {
          "Country": "Iraq",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": -0.046519996002144404,
          "Percent Change": -5
        },
        {
          "Country": "Jordan",
          "Commodity": "Apples (red) - Retail",
          "mp_year": 2020,
          "pct_change": 0.1485946769115632,
          "Percent Change": 15
        },
        {
          "Country": "Jordan",
          "Commodity": "Bananas - Retail",
          "mp_year": 2020,
          "pct_change": 0.20493106948636142,
          "Percent Change": 20
        },
        {
          "Country": "Jordan",
          "Commodity": "Beans (fava, dry) - Retail",
          "mp_year": 2020,
          "pct_change": -0.0073467492065621975,
          "Percent Change": -1
        },
        {
          "Country": "Jordan",
          "Commodity": "Bread (pita) - Retail",
          "mp_year": 2020,
          "pct_change": 0.010403103481147476,
          "Percent Change": 1
        },
        {
          "Country": "Jordan",
          "Commodity": "Bulgur - Retail",
          "mp_year": 2020,
          "pct_change": -0.01868076105410299,
          "Percent Change": -2
        },
        {
          "Country": "Jordan",
          "Commodity": "Cheese (picon) - Retail",
          "mp_year": 2020,
          "pct_change": 0.01621744775707168,
          "Percent Change": 2
        },
        {
          "Country": "Jordan",
          "Commodity": "Cheese (white, boiled) - Retail",
          "mp_year": 2020,
          "pct_change": -0.007123006115898674,
          "Percent Change": -1
        },
        {
          "Country": "Jordan",
          "Commodity": "Chickpeas - Retail",
          "mp_year": 2020,
          "pct_change": -0.04575281373165052,
          "Percent Change": -5
        },
        {
          "Country": "Jordan",
          "Commodity": "Cucumbers - Retail",
          "mp_year": 2020,
          "pct_change": 0.30263941519219073,
          "Percent Change": 30
        },
        {
          "Country": "Jordan",
          "Commodity": "Eggs - Retail",
          "mp_year": 2020,
          "pct_change": 0.35275055322248217,
          "Percent Change": 35
        },
        {
          "Country": "Jordan",
          "Commodity": "Fish (tuna, canned) - Retail",
          "mp_year": 2020,
          "pct_change": 0.13421877287281447,
          "Percent Change": 13
        },
        {
          "Country": "Jordan",
          "Commodity": "Fuel (diesel) - Retail",
          "mp_year": 2020,
          "pct_change": -0.1516698661100595,
          "Percent Change": -15
        },
        {
          "Country": "Jordan",
          "Commodity": "Fuel (gas) - Retail",
          "mp_year": 2020,
          "pct_change": 0,
          "Percent Change": 0
        },
        {
          "Country": "Jordan",
          "Commodity": "Fuel (kerosene) - Retail",
          "mp_year": 2020,
          "pct_change": -0.10270751233724928,
          "Percent Change": -10
        },
        {
          "Country": "Jordan",
          "Commodity": "Fuel (petrol-gasoline) - Retail",
          "mp_year": 2020,
          "pct_change": -0.04452284231383061,
          "Percent Change": -4
        },
        {
          "Country": "Jordan",
          "Commodity": "Garlic - Retail",
          "mp_year": 2020,
          "pct_change": 0.4025392644915733,
          "Percent Change": 40
        },
        {
          "Country": "Jordan",
          "Commodity": "Lentils - Retail",
          "mp_year": 2020,
          "pct_change": -0.05010662332940031,
          "Percent Change": -5
        },
        {
          "Country": "Jordan",
          "Commodity": "Meat (beef) - Retail",
          "mp_year": 2020,
          "pct_change": 0.004251716565345402,
          "Percent Change": 0
        },
        {
          "Country": "Jordan",
          "Commodity": "Meat (chicken) - Retail",
          "mp_year": 2020,
          "pct_change": -0.08579206412515017,
          "Percent Change": -9
        },
        {
          "Country": "Jordan",
          "Commodity": "Meat (chicken, whole) - Retail",
          "mp_year": 2020,
          "pct_change": 0.7717050316526064,
          "Percent Change": 77
        },
        {
          "Country": "Jordan",
          "Commodity": "Meat (lamb) - Retail",
          "mp_year": 2020,
          "pct_change": 0.05267530846794974,
          "Percent Change": 5
        },
        {
          "Country": "Jordan",
          "Commodity": "Milk (pasteurized) - Retail",
          "mp_year": 2020,
          "pct_change": -0.011220862614195852,
          "Percent Change": -1
        },
        {
          "Country": "Jordan",
          "Commodity": "Milk (powder) - Retail",
          "mp_year": 2020,
          "pct_change": 0.002024218871888077,
          "Percent Change": 0
        },
        {
          "Country": "Jordan",
          "Commodity": "Oil (olive) - Retail",
          "mp_year": 2020,
          "pct_change": -0.048499410656323676,
          "Percent Change": -5
        },
        {
          "Country": "Jordan",
          "Commodity": "Oil (vegetable) - Retail",
          "mp_year": 2020,
          "pct_change": 0.010894969779180363,
          "Percent Change": 1
        },
        {
          "Country": "Jordan",
          "Commodity": "Onions - Retail",
          "mp_year": 2020,
          "pct_change": -0.06893421574040276,
          "Percent Change": -7
        },
        {
          "Country": "Jordan",
          "Commodity": "Oranges (big size) - Retail",
          "mp_year": 2020,
          "pct_change": 0.48784351717364455,
          "Percent Change": 49
        },
        {
          "Country": "Jordan",
          "Commodity": "Pasta - Retail",
          "mp_year": 2020,
          "pct_change": 0.004684226111135725,
          "Percent Change": 0
        },
        {
          "Country": "Jordan",
          "Commodity": "Potatoes - Retail",
          "mp_year": 2020,
          "pct_change": -0.20880854721619344,
          "Percent Change": -21
        },
        {
          "Country": "Jordan",
          "Commodity": "Rice (imported) - Retail",
          "mp_year": 2020,
          "pct_change": -0.0067170772487378134,
          "Percent Change": -1
        },
        {
          "Country": "Jordan",
          "Commodity": "Salt (iodised) - Retail",
          "mp_year": 2020,
          "pct_change": 0.05513271178495838,
          "Percent Change": 6
        },
        {
          "Country": "Jordan",
          "Commodity": "Spinach - Retail",
          "mp_year": 2020,
          "pct_change": 0.5792574296528138,
          "Percent Change": 58
        },
        {
          "Country": "Jordan",
          "Commodity": "Sugar - Retail",
          "mp_year": 2020,
          "pct_change": -0.00991072044827157,
          "Percent Change": -1
        },
        {
          "Country": "Jordan",
          "Commodity": "Tomatoes - Retail",
          "mp_year": 2020,
          "pct_change": 0.6191040261791545,
          "Percent Change": 62
        },
        {
          "Country": "Jordan",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": 0.04640644044707065,
          "Percent Change": 5
        },
        {
          "Country": "Lebanon",
          "Commodity": "Beans (white) - Retail",
          "mp_year": 2020,
          "pct_change": 1.6173976363762588,
          "Percent Change": 162
        },
        {
          "Country": "Lebanon",
          "Commodity": "Bread (pita) - Retail",
          "mp_year": 2020,
          "pct_change": 0.4321082361540034,
          "Percent Change": 43
        },
        {
          "Country": "Lebanon",
          "Commodity": "Bulgur (brown) - Retail",
          "mp_year": 2020,
          "pct_change": 2.611560114113863,
          "Percent Change": 261
        },
        {
          "Country": "Lebanon",
          "Commodity": "Cabbage - Retail",
          "mp_year": 2020,
          "pct_change": 2.5907844123676402,
          "Percent Change": 259
        },
        {
          "Country": "Lebanon",
          "Commodity": "Cheese (picon) - Retail",
          "mp_year": 2020,
          "pct_change": 1.3041750397809861,
          "Percent Change": 130
        },
        {
          "Country": "Lebanon",
          "Commodity": "Chickpeas - Retail",
          "mp_year": 2020,
          "pct_change": 1.0741263732259378,
          "Percent Change": 107
        },
        {
          "Country": "Lebanon",
          "Commodity": "Cucumbers (greenhouse) - Retail",
          "mp_year": 2020,
          "pct_change": 0.9133594916640341,
          "Percent Change": 91
        },
        {
          "Country": "Lebanon",
          "Commodity": "Eggs - Retail",
          "mp_year": 2020,
          "pct_change": 2.6708756358768113,
          "Percent Change": 267
        },
        {
          "Country": "Lebanon",
          "Commodity": "Fish (tuna, canned) - Retail",
          "mp_year": 2020,
          "pct_change": 1.696100283276507,
          "Percent Change": 170
        },
        {
          "Country": "Lebanon",
          "Commodity": "Fuel (diesel) - Retail",
          "mp_year": 2020,
          "pct_change": 0.008890248120292932,
          "Percent Change": 1
        },
        {
          "Country": "Lebanon",
          "Commodity": "Fuel (gas) - Retail",
          "mp_year": 2020,
          "pct_change": 0.41464014717048925,
          "Percent Change": 41
        },
        {
          "Country": "Lebanon",
          "Commodity": "Fuel (petrol-gasoline, 95 octane) - Retail",
          "mp_year": 2020,
          "pct_change": -0.010554425543794044,
          "Percent Change": -1
        },
        {
          "Country": "Lebanon",
          "Commodity": "Lentils (green) - Retail",
          "mp_year": 2020,
          "pct_change": 1.7200774318282788,
          "Percent Change": 172
        },
        {
          "Country": "Lebanon",
          "Commodity": "Lentils (red) - Retail",
          "mp_year": 2020,
          "pct_change": 1.9256583190054537,
          "Percent Change": 193
        },
        {
          "Country": "Lebanon",
          "Commodity": "Meat (beef, canned) - Retail",
          "mp_year": 2020,
          "pct_change": 1.964623584366495,
          "Percent Change": 196
        },
        {
          "Country": "Lebanon",
          "Commodity": "Meat (chicken, whole, frozen) - Retail",
          "mp_year": 2020,
          "pct_change": 1.3643448391527018,
          "Percent Change": 136
        },
        {
          "Country": "Lebanon",
          "Commodity": "Milk (powder) - Retail",
          "mp_year": 2020,
          "pct_change": 1.4385849373345083,
          "Percent Change": 144
        },
        {
          "Country": "Lebanon",
          "Commodity": "Oil (sunflower) - Retail",
          "mp_year": 2020,
          "pct_change": 2.9695061534051983,
          "Percent Change": 297
        },
        {
          "Country": "Lebanon",
          "Commodity": "Pasta (spaghetti) - Retail",
          "mp_year": 2020,
          "pct_change": 2.0772021089829087,
          "Percent Change": 208
        },
        {
          "Country": "Lebanon",
          "Commodity": "Rice (imported, Egyptian) - Retail",
          "mp_year": 2020,
          "pct_change": 1.502676249950682,
          "Percent Change": 150
        },
        {
          "Country": "Lebanon",
          "Commodity": "Salt - Retail",
          "mp_year": 2020,
          "pct_change": 2.0375059161005185,
          "Percent Change": 204
        },
        {
          "Country": "Lebanon",
          "Commodity": "Sugar (white) - Retail",
          "mp_year": 2020,
          "pct_change": 1.868142478374166,
          "Percent Change": 187
        },
        {
          "Country": "Lebanon",
          "Commodity": "Tomatoes (paste) - Retail",
          "mp_year": 2020,
          "pct_change": 3.4991261249212373,
          "Percent Change": 350
        },
        {
          "Country": "Lebanon",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": 0.902127722417252,
          "Percent Change": 90
        },
        {
          "Country": "Libya",
          "Commodity": "Beans - Retail",
          "mp_year": 2020,
          "pct_change": 0.19650498888277035,
          "Percent Change": 20
        },
        {
          "Country": "Libya",
          "Commodity": "Bread - Retail",
          "mp_year": 2020,
          "pct_change": 0.02792654831287679,
          "Percent Change": 3
        },
        {
          "Country": "Libya",
          "Commodity": "Chickpeas - Retail",
          "mp_year": 2020,
          "pct_change": 0.28651456451735313,
          "Percent Change": 29
        },
        {
          "Country": "Libya",
          "Commodity": "Chili (green) - Retail",
          "mp_year": 2020,
          "pct_change": -0.054170099635083346,
          "Percent Change": -5
        },
        {
          "Country": "Libya",
          "Commodity": "Couscous - Retail",
          "mp_year": 2020,
          "pct_change": 0.5459453738162683,
          "Percent Change": 55
        },
        {
          "Country": "Libya",
          "Commodity": "Diapers - Retail",
          "mp_year": 2020,
          "pct_change": 0.04976418506920899,
          "Percent Change": 5
        },
        {
          "Country": "Libya",
          "Commodity": "Dishwashing liquid - Retail",
          "mp_year": 2020,
          "pct_change": 0.14200227453609582,
          "Percent Change": 14
        },
        {
          "Country": "Libya",
          "Commodity": "Eggs - Retail",
          "mp_year": 2020,
          "pct_change": 0.2124732696856912,
          "Percent Change": 21
        },
        {
          "Country": "Libya",
          "Commodity": "Fish (tuna, canned) - Retail",
          "mp_year": 2020,
          "pct_change": 0.039313303376827535,
          "Percent Change": 4
        },
        {
          "Country": "Libya",
          "Commodity": "Fuel (gas) - Retail",
          "mp_year": 2020,
          "pct_change": 1.508191500750386,
          "Percent Change": 151
        },
        {
          "Country": "Libya",
          "Commodity": "Handwash soap - Retail",
          "mp_year": 2020,
          "pct_change": 0.006872992603674216,
          "Percent Change": 1
        },
        {
          "Country": "Libya",
          "Commodity": "Laundry detergent - Retail",
          "mp_year": 2020,
          "pct_change": 0.25796363845450027,
          "Percent Change": 26
        },
        {
          "Country": "Libya",
          "Commodity": "Laundry soap - Retail",
          "mp_year": 2020,
          "pct_change": 0.0764972661911813,
          "Percent Change": 8
        },
        {
          "Country": "Libya",
          "Commodity": "Meat (chicken) - Retail",
          "mp_year": 2020,
          "pct_change": 0.1308011753254047,
          "Percent Change": 13
        },
        {
          "Country": "Libya",
          "Commodity": "Milk (condensed) - Retail",
          "mp_year": 2020,
          "pct_change": 0.23410901950570595,
          "Percent Change": 23
        },
        {
          "Country": "Libya",
          "Commodity": "Milk (pasteurized) - Retail",
          "mp_year": 2020,
          "pct_change": 0.40984968793602927,
          "Percent Change": 41
        },
        {
          "Country": "Libya",
          "Commodity": "Oil (vegetable) - Retail",
          "mp_year": 2020,
          "pct_change": 0.2008472193889233,
          "Percent Change": 20
        },
        {
          "Country": "Libya",
          "Commodity": "Onions - Retail",
          "mp_year": 2020,
          "pct_change": -0.15524793742696158,
          "Percent Change": -16
        },
        {
          "Country": "Libya",
          "Commodity": "Pasta - Retail",
          "mp_year": 2020,
          "pct_change": 0.36565751826625137,
          "Percent Change": 37
        },
        {
          "Country": "Libya",
          "Commodity": "Potatoes - Retail",
          "mp_year": 2020,
          "pct_change": -0.20686176510007062,
          "Percent Change": -21
        },
        {
          "Country": "Libya",
          "Commodity": "Rice - Retail",
          "mp_year": 2020,
          "pct_change": -0.11618569616400978,
          "Percent Change": -12
        },
        {
          "Country": "Libya",
          "Commodity": "Salt - Retail",
          "mp_year": 2020,
          "pct_change": 0.2887173023444486,
          "Percent Change": 29
        },
        {
          "Country": "Libya",
          "Commodity": "Sanitary pads - Retail",
          "mp_year": 2020,
          "pct_change": 0.10449505129577943,
          "Percent Change": 10
        },
        {
          "Country": "Libya",
          "Commodity": "Shampoo - Retail",
          "mp_year": 2020,
          "pct_change": 0.055131756618661085,
          "Percent Change": 6
        },
        {
          "Country": "Libya",
          "Commodity": "Sugar - Retail",
          "mp_year": 2020,
          "pct_change": 0.23599143631806108,
          "Percent Change": 24
        },
        {
          "Country": "Libya",
          "Commodity": "Tea (black) - Retail",
          "mp_year": 2020,
          "pct_change": 0.08974837012746217,
          "Percent Change": 9
        },
        {
          "Country": "Libya",
          "Commodity": "Tea (green) - Retail",
          "mp_year": 2020,
          "pct_change": -0.08123727542860903,
          "Percent Change": -8
        },
        {
          "Country": "Libya",
          "Commodity": "Tomatoes (paste) - Retail",
          "mp_year": 2020,
          "pct_change": 0.12733435761594297,
          "Percent Change": 13
        },
        {
          "Country": "Libya",
          "Commodity": "Tomatoes - Retail",
          "mp_year": 2020,
          "pct_change": 0.565743051143606,
          "Percent Change": 57
        },
        {
          "Country": "Libya",
          "Commodity": "Toothbrush - Retail",
          "mp_year": 2020,
          "pct_change": 0.12010449057450558,
          "Percent Change": 12
        },
        {
          "Country": "Libya",
          "Commodity": "Toothpaste - Retail",
          "mp_year": 2020,
          "pct_change": -0.07005794771202667,
          "Percent Change": -7
        },
        {
          "Country": "Libya",
          "Commodity": "Water (drinking) - Retail",
          "mp_year": 2020,
          "pct_change": -0.01783567368443737,
          "Percent Change": -2
        },
        {
          "Country": "Libya",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": 0.1828822581521718,
          "Percent Change": 18
        },
        {
          "Country": "Syria",
          "Commodity": "Alcohol (spray) - Retail",
          "mp_year": 2020,
          "pct_change": 0.1626976315300011,
          "Percent Change": 16
        },
        {
          "Country": "Syria",
          "Commodity": "Apples - Retail",
          "mp_year": 2020,
          "pct_change": 2.266100548308314,
          "Percent Change": 227
        },
        {
          "Country": "Syria",
          "Commodity": "Bananas - Retail",
          "mp_year": 2020,
          "pct_change": 4.753934981586507,
          "Percent Change": 475
        },
        {
          "Country": "Syria",
          "Commodity": "Beans (white) - Retail",
          "mp_year": 2020,
          "pct_change": 2.6799118802668214,
          "Percent Change": 268
        },
        {
          "Country": "Syria",
          "Commodity": "Bleach (chlorine) - Retail",
          "mp_year": 2020,
          "pct_change": 0.24780039031640233,
          "Percent Change": 25
        },
        {
          "Country": "Syria",
          "Commodity": "Bread (bakery) - Retail",
          "mp_year": 2020,
          "pct_change": 0.5257408962964055,
          "Percent Change": 53
        },
        {
          "Country": "Syria",
          "Commodity": "Bread (shop) - Retail",
          "mp_year": 2020,
          "pct_change": 2.538695579884752,
          "Percent Change": 254
        },
        {
          "Country": "Syria",
          "Commodity": "Bulgur - Retail",
          "mp_year": 2020,
          "pct_change": 2.4465814938520065,
          "Percent Change": 245
        },
        {
          "Country": "Syria",
          "Commodity": "Bulgur - Wholesale",
          "mp_year": 2020,
          "pct_change": 1.155464717965997,
          "Percent Change": 116
        },
        {
          "Country": "Syria",
          "Commodity": "Carrots - Retail",
          "mp_year": 2020,
          "pct_change": 2.7155340212325605,
          "Percent Change": 272
        },
        {
          "Country": "Syria",
          "Commodity": "Cheese - Retail",
          "mp_year": 2020,
          "pct_change": 2.1436883309678,
          "Percent Change": 214
        },
        {
          "Country": "Syria",
          "Commodity": "Chickpeas - Retail",
          "mp_year": 2020,
          "pct_change": 2.0044914586843636,
          "Percent Change": 200
        },
        {
          "Country": "Syria",
          "Commodity": "Cucumbers - Retail",
          "mp_year": 2020,
          "pct_change": -0.06106212027176372,
          "Percent Change": -6
        },
        {
          "Country": "Syria",
          "Commodity": "Dates - Retail",
          "mp_year": 2020,
          "pct_change": 2.4612266529092905,
          "Percent Change": 246
        },
        {
          "Country": "Syria",
          "Commodity": "Diapers - Retail",
          "mp_year": 2020,
          "pct_change": -0.12626327646844282,
          "Percent Change": -13
        },
        {
          "Country": "Syria",
          "Commodity": "Dishwashing liquid - Retail",
          "mp_year": 2020,
          "pct_change": -0.0077882302296848754,
          "Percent Change": -1
        },
        {
          "Country": "Syria",
          "Commodity": "Eggplants - Retail",
          "mp_year": 2020,
          "pct_change": 1.460380229908773,
          "Percent Change": 146
        },
        {
          "Country": "Syria",
          "Commodity": "Eggs - Retail",
          "mp_year": 2020,
          "pct_change": 2.7347744219826375,
          "Percent Change": 273
        },
        {
          "Country": "Syria",
          "Commodity": "Exchange rate (unofficial) - Retail",
          "mp_year": 2020,
          "pct_change": 2.334245124895112,
          "Percent Change": 233
        },
        {
          "Country": "Syria",
          "Commodity": "Fish (tuna, canned) - Retail",
          "mp_year": 2020,
          "pct_change": 2.9791880093197194,
          "Percent Change": 298
        },
        {
          "Country": "Syria",
          "Commodity": "Fuel (diesel) - Retail",
          "mp_year": 2020,
          "pct_change": -0.4535700427295072,
          "Percent Change": -45
        },
        {
          "Country": "Syria",
          "Commodity": "Fuel (diesel, heating, parallel market) - Retail",
          "mp_year": 2020,
          "pct_change": 0.2675811332889188,
          "Percent Change": 27
        },
        {
          "Country": "Syria",
          "Commodity": "Fuel (diesel, transport, parallel market) - Retail",
          "mp_year": 2020,
          "pct_change": 0.06331971920999752,
          "Percent Change": 6
        },
        {
          "Country": "Syria",
          "Commodity": "Fuel (gas) - Retail",
          "mp_year": 2020,
          "pct_change": -0.14550218929536107,
          "Percent Change": -15
        },
        {
          "Country": "Syria",
          "Commodity": "Fuel (gas, parallel market) - Retail",
          "mp_year": 2020,
          "pct_change": 0.001386792602897743,
          "Percent Change": 0
        },
        {
          "Country": "Syria",
          "Commodity": "Hand sanitizer (gel) - Retail",
          "mp_year": 2020,
          "pct_change": 0.14390185615693082,
          "Percent Change": 14
        },
        {
          "Country": "Syria",
          "Commodity": "Internet bundle - Retail",
          "mp_year": 2020,
          "pct_change": 0.0008452079525227371,
          "Percent Change": 0
        },
        {
          "Country": "Syria",
          "Commodity": "Lentils - Retail",
          "mp_year": 2020,
          "pct_change": 2.5901101356817406,
          "Percent Change": 259
        },
        {
          "Country": "Syria",
          "Commodity": "Livestock (sheep, two-year-old male) - Retail",
          "mp_year": 2020,
          "pct_change": 1.6258041618998424,
          "Percent Change": 163
        },
        {
          "Country": "Syria",
          "Commodity": "Meat (beef, minced) - Retail",
          "mp_year": 2020,
          "pct_change": 1.697952549324036,
          "Percent Change": 170
        },
        {
          "Country": "Syria",
          "Commodity": "Meat (chicken, legs) - Retail",
          "mp_year": 2020,
          "pct_change": 0.2730600102052954,
          "Percent Change": 27
        },
        {
          "Country": "Syria",
          "Commodity": "Meat (chicken, plucked) - Retail",
          "mp_year": 2020,
          "pct_change": 2.6466119865630233,
          "Percent Change": 265
        },
        {
          "Country": "Syria",
          "Commodity": "Milk (cow, fresh) - Retail",
          "mp_year": 2020,
          "pct_change": 0.45762924712541175,
          "Percent Change": 46
        },
        {
          "Country": "Syria",
          "Commodity": "Multipurpose soap - Retail",
          "mp_year": 2020,
          "pct_change": 0.15782831847657852,
          "Percent Change": 16
        },
        {
          "Country": "Syria",
          "Commodity": "Noodles (instant, indomie) - Retail",
          "mp_year": 2020,
          "pct_change": -0.07494834759977545,
          "Percent Change": -7
        },
        {
          "Country": "Syria",
          "Commodity": "Oil - Retail",
          "mp_year": 2020,
          "pct_change": 3.2821539887849642,
          "Percent Change": 328
        },
        {
          "Country": "Syria",
          "Commodity": "Parsley - Retail",
          "mp_year": 2020,
          "pct_change": 1.6289388626760426,
          "Percent Change": 163
        },
        {
          "Country": "Syria",
          "Commodity": "Pasta (spaghetti) - Retail",
          "mp_year": 2020,
          "pct_change": 2.3103431427700993,
          "Percent Change": 231
        },
        {
          "Country": "Syria",
          "Commodity": "Peanut - Retail",
          "mp_year": 2020,
          "pct_change": 1.145016011827384,
          "Percent Change": 115
        },
        {
          "Country": "Syria",
          "Commodity": "Plastic gloves - Retail",
          "mp_year": 2020,
          "pct_change": 0.31088823504031093,
          "Percent Change": 31
        },
        {
          "Country": "Syria",
          "Commodity": "Potatoes - Retail",
          "mp_year": 2020,
          "pct_change": 0.8635338836608979,
          "Percent Change": 86
        },
        {
          "Country": "Syria",
          "Commodity": "Pumpkin - Retail",
          "mp_year": 2020,
          "pct_change": 0.01451168688429538,
          "Percent Change": 1
        },
        {
          "Country": "Syria",
          "Commodity": "Rice - Retail",
          "mp_year": 2020,
          "pct_change": 1.9534928777890335,
          "Percent Change": 195
        },
        {
          "Country": "Syria",
          "Commodity": "Rice - Wholesale",
          "mp_year": 2020,
          "pct_change": 0.9758872371099367,
          "Percent Change": 98
        },
        {
          "Country": "Syria",
          "Commodity": "Salt (iodised) - Retail",
          "mp_year": 2020,
          "pct_change": 2.556861685834189,
          "Percent Change": 256
        },
        {
          "Country": "Syria",
          "Commodity": "Sanitary pads - Retail",
          "mp_year": 2020,
          "pct_change": -0.013486933532968925,
          "Percent Change": -1
        },
        {
          "Country": "Syria",
          "Commodity": "Spinach - Retail",
          "mp_year": 2020,
          "pct_change": 0.8355690636853135,
          "Percent Change": 84
        },
        {
          "Country": "Syria",
          "Commodity": "Sugar - Retail",
          "mp_year": 2020,
          "pct_change": 2.4362650917045774,
          "Percent Change": 244
        },
        {
          "Country": "Syria",
          "Commodity": "Surgical mask - Retail",
          "mp_year": 2020,
          "pct_change": 0.07628083313831935,
          "Percent Change": 8
        },
        {
          "Country": "Syria",
          "Commodity": "Tomatoes - Retail",
          "mp_year": 2020,
          "pct_change": 2.2565237580641,
          "Percent Change": 226
        },
        {
          "Country": "Syria",
          "Commodity": "Toothpaste - Retail",
          "mp_year": 2020,
          "pct_change": 0.042105277674975954,
          "Percent Change": 4
        },
        {
          "Country": "Syria",
          "Commodity": "Transport (public, bus) - Retail",
          "mp_year": 2020,
          "pct_change": -0.03765600244551079,
          "Percent Change": -4
        },
        {
          "Country": "Syria",
          "Commodity": "Wage (non-qualified labour) - Retail",
          "mp_year": 2020,
          "pct_change": 0.9340551005045743,
          "Percent Change": 93
        },
        {
          "Country": "Syria",
          "Commodity": "Water (drinking) - Retail",
          "mp_year": 2020,
          "pct_change": -0.7984766642815876,
          "Percent Change": -80
        },
        {
          "Country": "Syria",
          "Commodity": "Wheat - Wholesale",
          "mp_year": 2020,
          "pct_change": 0.7388341155270955,
          "Percent Change": 74
        },
        {
          "Country": "Syria",
          "Commodity": "Wheat flour - Retail",
          "mp_year": 2020,
          "pct_change": 2.6732095424457953,
          "Percent Change": 267
        },
        {
          "Country": "Syria",
          "Commodity": "Yogurt - Retail",
          "mp_year": 2020,
          "pct_change": 1.7315519972742806,
          "Percent Change": 173
        }
      ]
    }
  }
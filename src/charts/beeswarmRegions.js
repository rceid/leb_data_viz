export default {
  "config": {
    "view": {"continuousWidth": 400, "continuousHeight": 300, "stroke": null},
    "facet": {"spacing": 0}
  },
  "data": {"name": "data-877b2ae15ef7e3d0799630f9c892290d"},
  "mark": {"type": "circle", "size": 15},
  "encoding": {
    "color": {
      "type": "nominal",
      "field": "Region",
      "legend": null,
      "scale": {"scheme": "category10"}
    },
    "column": {
      "type": "nominal",
      "field": "Region",
      "header": {
        "labelFontSize": 0,
        "labelOrient": "bottom",
        "titleFontSize": 0,
        "titleOrient": "top"
      }
    },
    "tooltip": [
      {"type": "quantitative", "field": "Percent Change"},
      {"type": "nominal", "field": "Commodity"},
      {"type": "nominal", "field": "Region"}
    ],
    "x": {
      "type": "quantitative",
      "axis": {"grid": false, "labels": false, "ticks": true, "values": [0]},
      "field": "jitter",
      "scale": {},
      "title": null
    },
    "y": {
      "type": "quantitative",
      "axis": {"values": [0, 200, 400, 600, 800]},
      "field": "Percent Change"
    }
  },
  "height": 250,
  "transform": [
    {"calculate": "sqrt(-2*log(random()))*cos(2*PI*random())", "as": "jitter"}
  ],
  "width": 60,
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
  "datasets": {
    "data-877b2ae15ef7e3d0799630f9c892290d": [
      {
        "Commodity": "Alcohol (spray) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Anchovies - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Apples (red) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 40
      },
      {
        "Commodity": "Apples (red) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 15
      },
      {
        "Commodity": "Apples - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 33
      },
      {
        "Commodity": "Apples - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 227
      },
      {
        "Commodity": "Apples - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 17
      },
      {
        "Commodity": "Apples - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -6
      },
      {
        "Commodity": "Avocados - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 47
      },
      {
        "Commodity": "Avocados - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 5
      },
      {
        "Commodity": "Bananas (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Bananas (lakatan) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Bananas (latundan) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -5
      },
      {
        "Commodity": "Bananas (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 28
      },
      {
        "Commodity": "Bananas (saba) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -2
      },
      {
        "Commodity": "Bananas - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 27
      },
      {
        "Commodity": "Bananas - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 248
      },
      {
        "Commodity": "Bananas - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 9
      },
      {
        "Commodity": "Bananas - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 29
      },
      {
        "Commodity": "Bananas - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 6
      },
      {
        "Commodity": "Bananas - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 26
      },
      {
        "Commodity": "Barley (mixed) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Barley (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Barley - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 105
      },
      {
        "Commodity": "Barley - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Batteries (big) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Batteries (small) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 383
      },
      {
        "Commodity": "Beans (black) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 40
      },
      {
        "Commodity": "Beans (black) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 17
      },
      {
        "Commodity": "Beans (black) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 18
      },
      {
        "Commodity": "Beans (black) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 14
      },
      {
        "Commodity": "Beans (black, Nayarit) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 49
      },
      {
        "Commodity": "Beans (black, Veracruz) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 23
      },
      {
        "Commodity": "Beans (black, Zacatecas) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 41
      },
      {
        "Commodity": "Beans (black, imported) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 28
      },
      {
        "Commodity": "Beans (butter) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 21
      },
      {
        "Commodity": "Beans (catarino) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 19
      },
      {
        "Commodity": "Beans (cranberry) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 28
      },
      {
        "Commodity": "Beans (cranberry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Beans (dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Beans (dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Beans (dry) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 11
      },
      {
        "Commodity": "Beans (fava) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 75
      },
      {
        "Commodity": "Beans (fava) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Beans (fava, dry) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Beans (fava, dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Beans (green, fresh) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -6
      },
      {
        "Commodity": "Beans (green, fresh) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -2
      },
      {
        "Commodity": "Beans (haricot) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 53
      },
      {
        "Commodity": "Beans (haricot, red) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Beans (haricot, white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Beans (kidney, pinto) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 31
      },
      {
        "Commodity": "Beans (magnum) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 28
      },
      {
        "Commodity": "Beans (mung) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 17
      },
      {
        "Commodity": "Beans (mung) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Beans (niebe) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Beans (niebe) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 43
      },
      {
        "Commodity": "Beans (niebe, white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 47
      },
      {
        "Commodity": "Beans (pod) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 11
      },
      {
        "Commodity": "Beans (red) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 34
      },
      {
        "Commodity": "Beans (red) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 86
      },
      {
        "Commodity": "Beans (red) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 38
      },
      {
        "Commodity": "Beans (red, fresh) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 35
      },
      {
        "Commodity": "Beans (silk red) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 23
      },
      {
        "Commodity": "Beans (string) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -20
      },
      {
        "Commodity": "Beans (string) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 87
      },
      {
        "Commodity": "Beans (sugar-red) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 10
      },
      {
        "Commodity": "Beans (white) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 646
      },
      {
        "Commodity": "Beans (white) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 28
      },
      {
        "Commodity": "Beans (white) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 117
      },
      {
        "Commodity": "Beans (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 10
      },
      {
        "Commodity": "Beans (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Beans (yardlong, green) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 19
      },
      {
        "Commodity": "Beans (yardlong, green) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 19
      },
      {
        "Commodity": "Beans - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 3
      },
      {
        "Commodity": "Beans - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 20
      },
      {
        "Commodity": "Beans - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 0
      },
      {
        "Commodity": "Beans - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 98
      },
      {
        "Commodity": "Beans - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Beans - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Beans(mash) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 31
      },
      {
        "Commodity": "Beetroots - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -17
      },
      {
        "Commodity": "Beetroots - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -9
      },
      {
        "Commodity": "Beetroots - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 78
      },
      {
        "Commodity": "Bitter melon - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -18
      },
      {
        "Commodity": "Bitterball - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 121
      },
      {
        "Commodity": "Blackberry - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Bleach (chlorine) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 25
      },
      {
        "Commodity": "Bottle gourd - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -15
      },
      {
        "Commodity": "Bread (bakery) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 53
      },
      {
        "Commodity": "Bread (brotchen) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Bread (brown) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Bread (common) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 24
      },
      {
        "Commodity": "Bread (first grade flour) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -2
      },
      {
        "Commodity": "Bread (high grade flour) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Bread (khoboz) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Bread (pita) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Bread (shop) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 254
      },
      {
        "Commodity": "Bread (traditional) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Bread (vetkoek) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Bread (wheat) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Bread - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 59
      },
      {
        "Commodity": "Bread - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 9
      },
      {
        "Commodity": "Bread - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Bread - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 17
      },
      {
        "Commodity": "Bread - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Broccoli - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 104
      },
      {
        "Commodity": "Buckwheat - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 41
      },
      {
        "Commodity": "Bulgur (brown) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 261
      },
      {
        "Commodity": "Bulgur - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 20
      },
      {
        "Commodity": "Bulgur - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 79
      },
      {
        "Commodity": "Bulgur - Wholesale",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 116
      },
      {
        "Commodity": "Butter (cow milk) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -20
      },
      {
        "Commodity": "Butter (goat milk) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 471
      },
      {
        "Commodity": "Cabbage (chinese) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Cabbage (chinese, flowering) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 21
      },
      {
        "Commodity": "Cabbage (chinese, flowering) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 29
      },
      {
        "Commodity": "Cabbage - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 36
      },
      {
        "Commodity": "Cabbage - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 44
      },
      {
        "Commodity": "Cabbage - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 259
      },
      {
        "Commodity": "Cabbage - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 33
      },
      {
        "Commodity": "Cabbage - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 30
      },
      {
        "Commodity": "Cabbage - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 21
      },
      {
        "Commodity": "Cabbage - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Calamansi - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -34
      },
      {
        "Commodity": "Candles (big)  - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 51
      },
      {
        "Commodity": "Candles (small)  - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Cane juice (light) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 55
      },
      {
        "Commodity": "Cane juice (strong) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 59
      },
      {
        "Commodity": "Carrots - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -7
      },
      {
        "Commodity": "Carrots - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Carrots - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 272
      },
      {
        "Commodity": "Carrots - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 47
      },
      {
        "Commodity": "Carrots - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Carrots - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 74
      },
      {
        "Commodity": "Carrots - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -44
      },
      {
        "Commodity": "Cashew nut - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 168
      },
      {
        "Commodity": "Cassava (cossette) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 173
      },
      {
        "Commodity": "Cassava (cossette) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 40
      },
      {
        "Commodity": "Cassava (dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -26
      },
      {
        "Commodity": "Cassava (dry) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 15
      },
      {
        "Commodity": "Cassava (fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 39
      },
      {
        "Commodity": "Cassava - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Cassava - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 37
      },
      {
        "Commodity": "Cassava - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 105
      },
      {
        "Commodity": "Cassava flour - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 43
      },
      {
        "Commodity": "Cassava flour - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -2
      },
      {
        "Commodity": "Cassava flour - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Cassava leaves - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Cassava meal (attieke) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Cassava meal (gari) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Cassava meal (gari, fine) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Cassava meal (gari, yellow) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 68
      },
      {
        "Commodity": "Cassava meal (gari, yellow) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 71
      },
      {
        "Commodity": "Cassava meal (tapioca) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 21
      },
      {
        "Commodity": "Cauliflower - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -7
      },
      {
        "Commodity": "Charcoal - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 135
      },
      {
        "Commodity": "Cheese (dry) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Cheese (local) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Cheese (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Cheese (picon) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 66
      },
      {
        "Commodity": "Cheese (white, boiled) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Cheese - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Cheese - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 214
      },
      {
        "Commodity": "Cheese - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 22
      },
      {
        "Commodity": "Chicken - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Chicken - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 26
      },
      {
        "Commodity": "Chickpeas (local) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -13
      },
      {
        "Commodity": "Chickpeas - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 13
      },
      {
        "Commodity": "Chickpeas - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 79
      },
      {
        "Commodity": "Chickpeas - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -6
      },
      {
        "Commodity": "Chickpeas - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Chili (bird's eye) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -77
      },
      {
        "Commodity": "Chili (bird's eye, green) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -57
      },
      {
        "Commodity": "Chili (bird's eye, red) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -94
      },
      {
        "Commodity": "Chili (green) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -5
      },
      {
        "Commodity": "Chili (red) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -8
      },
      {
        "Commodity": "Chili (red, curly) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -20
      },
      {
        "Commodity": "Chili (red, dry raw) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -10
      },
      {
        "Commodity": "Chili (red, dry raw) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 29
      },
      {
        "Commodity": "Chili (red, dry raw) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -10
      },
      {
        "Commodity": "Chili (red, large) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 4
      },
      {
        "Commodity": "Choko - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -31
      },
      {
        "Commodity": "Cocoa (powder) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 28
      },
      {
        "Commodity": "Cocoa - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Cocoa - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -17
      },
      {
        "Commodity": "Coconut (dried) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Coconut - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Coconut - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Coconut - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 26
      },
      {
        "Commodity": "Cocoyam (macabo) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Coffee (instant) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Coffee - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Cooking fat - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Corn Soy Blend (CSB++, food aid) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 149
      },
      {
        "Commodity": "Cornstarch - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Cotton - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -18
      },
      {
        "Commodity": "Couscous - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 55
      },
      {
        "Commodity": "Couscous - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Cowpeas (brown) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 103
      },
      {
        "Commodity": "Cowpeas (brown) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 121
      },
      {
        "Commodity": "Cowpeas (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 91
      },
      {
        "Commodity": "Cowpeas (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 105
      },
      {
        "Commodity": "Cowpeas - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 103
      },
      {
        "Commodity": "Crab - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -2
      },
      {
        "Commodity": "Cucumbers (greenhouse) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 204
      },
      {
        "Commodity": "Cucumbers (greenhouse) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 91
      },
      {
        "Commodity": "Cucumbers - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 95
      },
      {
        "Commodity": "Cucumbers - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Cucumbers - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 165
      },
      {
        "Commodity": "Cucumbers - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -8
      },
      {
        "Commodity": "Dates - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 118
      },
      {
        "Commodity": "Diapers - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Dishwashing liquid - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Disinfecting solution - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Eggplants - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -10
      },
      {
        "Commodity": "Eggplants - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 193
      },
      {
        "Commodity": "Eggplants - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 146
      },
      {
        "Commodity": "Eggplants - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 3
      },
      {
        "Commodity": "Eggplants - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 123
      },
      {
        "Commodity": "Eggplants - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 10
      },
      {
        "Commodity": "Eggplants - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 0
      },
      {
        "Commodity": "Eggs (broiler) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 26
      },
      {
        "Commodity": "Eggs (duck) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 7
      },
      {
        "Commodity": "Eggs (duck) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 16
      },
      {
        "Commodity": "Eggs (duck, fermented) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Eggs (duck, fermented) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Eggs (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -2
      },
      {
        "Commodity": "Eggs (white, AA) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -8
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 34
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 24
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 151
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 23
      },
      {
        "Commodity": "Eggs - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 11
      },
      {
        "Commodity": "Eggs - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 25
      },
      {
        "Commodity": "Eggs - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 626
      },
      {
        "Commodity": "Electricity - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Exchange rate (unofficial) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Exchange rate (unofficial) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 233
      },
      {
        "Commodity": "Exchange rate (unofficial) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 196
      },
      {
        "Commodity": "Exchange rate - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -2
      },
      {
        "Commodity": "Exchange rate - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 238
      },
      {
        "Commodity": "Feed (flour) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Feed (rakhel) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Feed (wheat bran) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Firewood - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 154
      },
      {
        "Commodity": "Fish (appolo) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 11
      },
      {
        "Commodity": "Fish (barbel, sole) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 31
      },
      {
        "Commodity": "Fish (bonga) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 161
      },
      {
        "Commodity": "Fish (catfish) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 21
      },
      {
        "Commodity": "Fish (catfish) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 14
      },
      {
        "Commodity": "Fish (catfish) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -7
      },
      {
        "Commodity": "Fish (dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Fish (dry, katta) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 26
      },
      {
        "Commodity": "Fish (dry, katta) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 23
      },
      {
        "Commodity": "Fish (dry, sprats) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 0
      },
      {
        "Commodity": "Fish (dry, sprats) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 1
      },
      {
        "Commodity": "Fish (fresh) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Fish (fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Fish (fresh, silvi) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Fish (frigate tuna) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -7
      },
      {
        "Commodity": "Fish (frozen) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Fish (frozen) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Fish (goldstripe sardinella) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 9
      },
      {
        "Commodity": "Fish (goldstripe sardinella) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 20
      },
      {
        "Commodity": "Fish (goldstripe sardinella) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 11
      },
      {
        "Commodity": "Fish (herring) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Fish (jack) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 17
      },
      {
        "Commodity": "Fish (jack) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Fish (lates,dry,imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Fish (lates,dry,local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Fish (mackerel, fresh) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -6
      },
      {
        "Commodity": "Fish (mackerel, fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 176
      },
      {
        "Commodity": "Fish (mackerel, fresh) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 55
      },
      {
        "Commodity": "Fish (milkfish) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -8
      },
      {
        "Commodity": "Fish (mullet, catfish) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 7
      },
      {
        "Commodity": "Fish (redbelly yellowtail fusilier) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -2
      },
      {
        "Commodity": "Fish (roundscad) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Fish (sail fish) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 13
      },
      {
        "Commodity": "Fish (sail fish) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 27
      },
      {
        "Commodity": "Fish (sardine, canned) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Fish (sardine, canned) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Fish (skipjack tuna) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -13
      },
      {
        "Commodity": "Fish (skipjack tuna) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Fish (slipmouth) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Fish (smoked) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Fish (snake head) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Fish (snake head) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -5
      },
      {
        "Commodity": "Fish (snake head, dry) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 13
      },
      {
        "Commodity": "Fish (snake head, dry) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 11
      },
      {
        "Commodity": "Fish (striped catfish) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Fish (striped catfish) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Fish (threadfin bream) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Fish (tilapia) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -5
      },
      {
        "Commodity": "Fish (tilapia) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Fish (tilapia) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 55
      },
      {
        "Commodity": "Fish (trenched sardinella) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -3
      },
      {
        "Commodity": "Fish (trenched sardinella) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -1
      },
      {
        "Commodity": "Fish (tuna, canned) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 148
      },
      {
        "Commodity": "Fish (tuna, canned) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 1
      },
      {
        "Commodity": "Fish (yellowfin tuna) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 13
      },
      {
        "Commodity": "Fish (yellowfin tuna) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 21
      },
      {
        "Commodity": "Fish - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -18
      },
      {
        "Commodity": "Fish - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 10
      },
      {
        "Commodity": "Fish - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 14
      },
      {
        "Commodity": "Fonio - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Fuel (Super Petrol) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Fuel (diesel) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -24
      },
      {
        "Commodity": "Fuel (diesel) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -21
      },
      {
        "Commodity": "Fuel (diesel) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -18
      },
      {
        "Commodity": "Fuel (diesel) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -13
      },
      {
        "Commodity": "Fuel (diesel) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Fuel (diesel) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -10
      },
      {
        "Commodity": "Fuel (diesel, heating, parallel market) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 27
      },
      {
        "Commodity": "Fuel (diesel, parallel market) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 78
      },
      {
        "Commodity": "Fuel (diesel, transport, parallel market) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Fuel (gas) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Fuel (gas) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Fuel (gas, parallel market) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Fuel (kerosene) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -14
      },
      {
        "Commodity": "Fuel (kerosene) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 25
      },
      {
        "Commodity": "Fuel (petrol-gasoline) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -13
      },
      {
        "Commodity": "Fuel (petrol-gasoline) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -9
      },
      {
        "Commodity": "Fuel (petrol-gasoline) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 1
      },
      {
        "Commodity": "Fuel (petrol-gasoline) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Fuel (petrol-gasoline) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -15
      },
      {
        "Commodity": "Fuel (petrol-gasoline, 95 octane) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Fuel (petrol-gasoline, parallel market) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 58
      },
      {
        "Commodity": "Gari (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 85
      },
      {
        "Commodity": "Gari (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 86
      },
      {
        "Commodity": "Gari - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 63
      },
      {
        "Commodity": "Gari - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Garlic (large) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -16
      },
      {
        "Commodity": "Garlic (medium) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -38
      },
      {
        "Commodity": "Garlic (small) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 8
      },
      {
        "Commodity": "Garlic - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 4
      },
      {
        "Commodity": "Garlic - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 457
      },
      {
        "Commodity": "Garlic - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 40
      },
      {
        "Commodity": "Garlic - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 129
      },
      {
        "Commodity": "Garlic - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 198
      },
      {
        "Commodity": "Ghee (artificial) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 16
      },
      {
        "Commodity": "Ginger - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -14
      },
      {
        "Commodity": "Grapes (black) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 16
      },
      {
        "Commodity": "Grapes (pink) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Groundnuts (Bambara) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Groundnuts (large, shelled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 30
      },
      {
        "Commodity": "Groundnuts (paste) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Groundnuts (shelled) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Groundnuts (shelled) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 30
      },
      {
        "Commodity": "Groundnuts (shelled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 54
      },
      {
        "Commodity": "Groundnuts (shelled) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 33
      },
      {
        "Commodity": "Groundnuts (small, shelled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 42
      },
      {
        "Commodity": "Groundnuts (small, unshelled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Groundnuts (unshelled) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -17
      },
      {
        "Commodity": "Groundnuts (unshelled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 8
      },
      {
        "Commodity": "Groundnuts (unshelled) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 11
      },
      {
        "Commodity": "Groundnuts - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Guava - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Guava - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -17
      },
      {
        "Commodity": "Hand sanitizer (gel) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 14
      },
      {
        "Commodity": "Handwash soap - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -5
      },
      {
        "Commodity": "Handwash soap - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 174
      },
      {
        "Commodity": "Honey - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 93
      },
      {
        "Commodity": "Internet bundle - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Kale - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 157
      },
      {
        "Commodity": "Kocho - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Laundry detergent - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 26
      },
      {
        "Commodity": "Laundry detergent - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -109
      },
      {
        "Commodity": "Laundry soap - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 8
      },
      {
        "Commodity": "Laundry soap - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 56
      },
      {
        "Commodity": "Leafy vegetables - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 8
      },
      {
        "Commodity": "Lemons - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 94
      },
      {
        "Commodity": "Lemons - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Lentils (broken) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 11
      },
      {
        "Commodity": "Lentils (green) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 172
      },
      {
        "Commodity": "Lentils (imported) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 79
      },
      {
        "Commodity": "Lentils (masur) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 18
      },
      {
        "Commodity": "Lentils (moong) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 38
      },
      {
        "Commodity": "Lentils (red) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 193
      },
      {
        "Commodity": "Lentils - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 32
      },
      {
        "Commodity": "Lentils - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 2
      },
      {
        "Commodity": "Lentils - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 95
      },
      {
        "Commodity": "Lentils - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 10
      },
      {
        "Commodity": "Lentils - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -15
      },
      {
        "Commodity": "Lentils - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Lentils - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Lettuce - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Lettuce - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 1
      },
      {
        "Commodity": "Lin seed - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Livestock (Goat) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 19
      },
      {
        "Commodity": "Livestock (Sheep) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 43
      },
      {
        "Commodity": "Livestock (bull) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Livestock (camel) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 47
      },
      {
        "Commodity": "Livestock (cattle) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 109
      },
      {
        "Commodity": "Livestock (donkey) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Livestock (goat, medium-sized castrated male) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Livestock (goat, medium-sized male) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 10
      },
      {
        "Commodity": "Livestock (ox) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 95
      },
      {
        "Commodity": "Livestock (sheep, medium-sized castrated male) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Livestock (sheep, two-year-old male) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 163
      },
      {
        "Commodity": "Maize (crushed) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Maize (food aid) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 31
      },
      {
        "Commodity": "Maize (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -5
      },
      {
        "Commodity": "Maize (local) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Maize (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -4
      },
      {
        "Commodity": "Maize (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -34
      },
      {
        "Commodity": "Maize (white) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 9
      },
      {
        "Commodity": "Maize (white) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 2
      },
      {
        "Commodity": "Maize (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 687
      },
      {
        "Commodity": "Maize (white) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 15
      },
      {
        "Commodity": "Maize (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 5
      },
      {
        "Commodity": "Maize (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 66
      },
      {
        "Commodity": "Maize (white, dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 9
      },
      {
        "Commodity": "Maize (yellow) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -5
      },
      {
        "Commodity": "Maize (yellow) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 63
      },
      {
        "Commodity": "Maize (yellow) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Maize (yellow) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 178
      },
      {
        "Commodity": "Maize (yellow) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 51
      },
      {
        "Commodity": "Maize - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Maize - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Maize - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Maize - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 36
      },
      {
        "Commodity": "Maize - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -11
      },
      {
        "Commodity": "Maize - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Maize flour (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 31
      },
      {
        "Commodity": "Maize flour (white) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 4
      },
      {
        "Commodity": "Maize flour (white) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 9
      },
      {
        "Commodity": "Maize flour (yellow) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -14
      },
      {
        "Commodity": "Maize flour (yellow) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -10
      },
      {
        "Commodity": "Maize flour - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 24
      },
      {
        "Commodity": "Maize flour - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 38
      },
      {
        "Commodity": "Maize meal (imported) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 16
      },
      {
        "Commodity": "Maize meal (local) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 29
      },
      {
        "Commodity": "Maize meal (white, breakfast) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -52
      },
      {
        "Commodity": "Maize meal (white, first grade) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Maize meal (white, roller) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 10
      },
      {
        "Commodity": "Maize meal (white, with bran) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Maize meal (white, without bran) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Maize meal - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 57
      },
      {
        "Commodity": "Mandarins - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 0
      },
      {
        "Commodity": "Mangoes (carabao) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 35
      },
      {
        "Commodity": "Mangoes (piko) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 20
      },
      {
        "Commodity": "Mangoes - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 38
      },
      {
        "Commodity": "Mangoes - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -26
      },
      {
        "Commodity": "Meat (beef) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (beef) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 9
      },
      {
        "Commodity": "Meat (beef) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 51
      },
      {
        "Commodity": "Meat (beef) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Meat (beef) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Meat (beef) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -7
      },
      {
        "Commodity": "Meat (beef, canned) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 196
      },
      {
        "Commodity": "Meat (beef, chops with bones) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (beef, chops with bones) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -87
      },
      {
        "Commodity": "Meat (beef, chops with bones) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (beef, first quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 4
      },
      {
        "Commodity": "Meat (beef, minced) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 170
      },
      {
        "Commodity": "Meat (beef, second quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (beef, second quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Meat (beef, without bones) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Meat (camel) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 7
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 18
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -2
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 1
      },
      {
        "Commodity": "Meat (chicken) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 769
      },
      {
        "Commodity": "Meat (chicken) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -7
      },
      {
        "Commodity": "Meat (chicken) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 5
      },
      {
        "Commodity": "Meat (chicken) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 246
      },
      {
        "Commodity": "Meat (chicken, broiler) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 18
      },
      {
        "Commodity": "Meat (chicken, frozen) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 20
      },
      {
        "Commodity": "Meat (chicken, frozen) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Meat (chicken, frozen, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Meat (chicken, legs) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 27
      },
      {
        "Commodity": "Meat (chicken, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 27
      },
      {
        "Commodity": "Meat (chicken, local) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 355
      },
      {
        "Commodity": "Meat (chicken, plucked) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 265
      },
      {
        "Commodity": "Meat (chicken, whole) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Meat (chicken, whole) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Meat (chicken, whole) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 77
      },
      {
        "Commodity": "Meat (chicken, whole) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -3
      },
      {
        "Commodity": "Meat (chicken, whole, frozen) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 136
      },
      {
        "Commodity": "Meat (chicken, whole, frozen) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 2
      },
      {
        "Commodity": "Meat (goat) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Meat (lamb) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 507
      },
      {
        "Commodity": "Meat (mutton) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (mutton) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 20
      },
      {
        "Commodity": "Meat (mutton) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Meat (pork) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 10
      },
      {
        "Commodity": "Meat (pork) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -3
      },
      {
        "Commodity": "Meat (pork) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (pork, first quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Meat (pork, hock) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (pork, second quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 51
      },
      {
        "Commodity": "Meat (pork, with bones) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Meat (pork, with fat) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 33
      },
      {
        "Commodity": "Meat (pork, with fat) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 50
      },
      {
        "Commodity": "Meat (sheep) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Meat (sheep, second quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 19
      },
      {
        "Commodity": "Meat (veal) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 10
      },
      {
        "Commodity": "Meat - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Melons (cantaloupe) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Milk (UHT) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Milk (camel) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 32
      },
      {
        "Commodity": "Milk (condensed) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Milk (cow, fresh) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 46
      },
      {
        "Commodity": "Milk (cow, fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Milk (cow, pasteurized) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Milk (fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Milk (non-pasteurized) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 9
      },
      {
        "Commodity": "Milk (non-pasteurized) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Milk (pasteurized) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Milk (pasteurized) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 19
      },
      {
        "Commodity": "Milk (pasteurized) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Milk (powder) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 51
      },
      {
        "Commodity": "Milk (powder) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 12
      },
      {
        "Commodity": "Milk (powder) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -2
      },
      {
        "Commodity": "Milk (powder, infant formula) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 6
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 0
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -7
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 16
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -22
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 9
      },
      {
        "Commodity": "Milk - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Millet (finger) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Millet (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Millet - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Millet - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 59
      },
      {
        "Commodity": "Millet - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 80
      },
      {
        "Commodity": "Milling cost (maize) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -6
      },
      {
        "Commodity": "Milling cost (sorghum) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 52
      },
      {
        "Commodity": "Multipurpose soap - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Naranjilla (hybrid) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 38
      },
      {
        "Commodity": "Niger seed - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 30
      },
      {
        "Commodity": "Niger seed - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Noodles (instant, indomie) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Noodles (short) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Noodles (short) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 2
      },
      {
        "Commodity": "Oat flakes - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -3
      },
      {
        "Commodity": "Oil (cooking) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Oil (cooking) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Oil (cooking) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Oil (cotton) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 16
      },
      {
        "Commodity": "Oil (cotton) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Oil (groundnut) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Oil (mixed, imported) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 14
      },
      {
        "Commodity": "Oil (mustard) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 9
      },
      {
        "Commodity": "Oil (olive) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Oil (olive) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -5
      },
      {
        "Commodity": "Oil (palm nut) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Oil (palm) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -8
      },
      {
        "Commodity": "Oil (palm) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 25
      },
      {
        "Commodity": "Oil (palm) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Oil (soybean) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 10
      },
      {
        "Commodity": "Oil (soybean) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 28
      },
      {
        "Commodity": "Oil (sunflower) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 20
      },
      {
        "Commodity": "Oil (sunflower) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 297
      },
      {
        "Commodity": "Oil (sunflower) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 17
      },
      {
        "Commodity": "Oil (sunflower) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 30
      },
      {
        "Commodity": "Oil (vegetable) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 102
      },
      {
        "Commodity": "Oil (vegetable) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Oil (vegetable) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Oil (vegetable) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Oil (vegetable) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 26
      },
      {
        "Commodity": "Oil (vegetable) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 19
      },
      {
        "Commodity": "Oil (vegetable) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 22
      },
      {
        "Commodity": "Oil (vegetable, bulk) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -7
      },
      {
        "Commodity": "Oil (vegetable, fortified, food aid) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 97
      },
      {
        "Commodity": "Oil (vegetable, imported) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 24
      },
      {
        "Commodity": "Oil (vegetable, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Oil (vegetable, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Oil (vegetable, local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 1
      },
      {
        "Commodity": "Oil (vegetable, packaged) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Oil - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 328
      },
      {
        "Commodity": "Oil - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Okra (dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 54
      },
      {
        "Commodity": "Okra (fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 380
      },
      {
        "Commodity": "Onions (imported) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 68
      },
      {
        "Commodity": "Onions (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 57
      },
      {
        "Commodity": "Onions (imported) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 89
      },
      {
        "Commodity": "Onions (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 12
      },
      {
        "Commodity": "Onions (red) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 97
      },
      {
        "Commodity": "Onions (red) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Onions (red) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 255
      },
      {
        "Commodity": "Onions (red, dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 376
      },
      {
        "Commodity": "Onions (red, imported) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -80
      },
      {
        "Commodity": "Onions (red, imported) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -80
      },
      {
        "Commodity": "Onions (red, local) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -89
      },
      {
        "Commodity": "Onions (red, local) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -92
      },
      {
        "Commodity": "Onions (shallot) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 7
      },
      {
        "Commodity": "Onions (shallot) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 20
      },
      {
        "Commodity": "Onions (shallot, medium) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 7
      },
      {
        "Commodity": "Onions (white) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 56
      },
      {
        "Commodity": "Onions (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 50
      },
      {
        "Commodity": "Onions (white, dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 80
      },
      {
        "Commodity": "Onions - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 44
      },
      {
        "Commodity": "Onions - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 151
      },
      {
        "Commodity": "Oranges (big size) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 49
      },
      {
        "Commodity": "Oranges (big size) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 14
      },
      {
        "Commodity": "Oranges - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 69
      },
      {
        "Commodity": "Oranges - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 33
      },
      {
        "Commodity": "Oranges - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Oranges - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Papaya - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Papaya - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 68
      },
      {
        "Commodity": "Papaya - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 26
      },
      {
        "Commodity": "Papaya - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -36
      },
      {
        "Commodity": "Papaya - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 83
      },
      {
        "Commodity": "Parsley - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 163
      },
      {
        "Commodity": "Passion fruit - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 5
      },
      {
        "Commodity": "Pasta (macaroni) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 25
      },
      {
        "Commodity": "Pasta (spaghetti) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 219
      },
      {
        "Commodity": "Pasta (spaghetti) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Pasta - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 13
      },
      {
        "Commodity": "Pasta - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 34
      },
      {
        "Commodity": "Pasta - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 21
      },
      {
        "Commodity": "Pasta - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Pasta - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 25
      },
      {
        "Commodity": "Peanut - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 115
      },
      {
        "Commodity": "Peanut - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 56
      },
      {
        "Commodity": "Peanut - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 18
      },
      {
        "Commodity": "Peanut - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 2
      },
      {
        "Commodity": "Peas (fresh) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 88
      },
      {
        "Commodity": "Peas (green, dry) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 29
      },
      {
        "Commodity": "Peas (green, dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Peas (green, dry) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 17
      },
      {
        "Commodity": "Peas (mixed) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Peas (split, dry) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -7
      },
      {
        "Commodity": "Peas (split, dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 25
      },
      {
        "Commodity": "Peas (yellow, split, food aid) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 42
      },
      {
        "Commodity": "Peas - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 52
      },
      {
        "Commodity": "Peppers (dried) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 741
      },
      {
        "Commodity": "Peppers (fresh) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 218
      },
      {
        "Commodity": "Peppers (fresh) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Peppers (fresh) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 283
      },
      {
        "Commodity": "Peppers (green) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Peppers (red) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Peppers (red, dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 2
      },
      {
        "Commodity": "Pigeon peas - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Pineapples - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -6
      },
      {
        "Commodity": "Pineapples - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -14
      },
      {
        "Commodity": "Pineapples - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -7
      },
      {
        "Commodity": "Pineapples - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -1
      },
      {
        "Commodity": "Plantains (apem) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 557
      },
      {
        "Commodity": "Plantains (apem) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 182
      },
      {
        "Commodity": "Plantains (apentu) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 617
      },
      {
        "Commodity": "Plantains (apentu) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 134
      },
      {
        "Commodity": "Plantains (barraganete, green) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 17
      },
      {
        "Commodity": "Plantains (barraganete, mature) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 18
      },
      {
        "Commodity": "Plantains (dominico, green) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 1
      },
      {
        "Commodity": "Plantains (dominico, mature) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 6
      },
      {
        "Commodity": "Plantains - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 229
      },
      {
        "Commodity": "Plantains - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Plastic gloves - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 31
      },
      {
        "Commodity": "Potato Leaves - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Potatoes (Irish) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 12
      },
      {
        "Commodity": "Potatoes (Irish) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Potatoes (Irish) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 32
      },
      {
        "Commodity": "Potatoes (Irish, imilla) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Potatoes (Irish, imilla) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -40
      },
      {
        "Commodity": "Potatoes (black) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 29
      },
      {
        "Commodity": "Potatoes (imported) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -6
      },
      {
        "Commodity": "Potatoes (imported) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -4
      },
      {
        "Commodity": "Potatoes (local) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 83
      },
      {
        "Commodity": "Potatoes (local) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -14
      },
      {
        "Commodity": "Potatoes (red) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 89
      },
      {
        "Commodity": "Potatoes (super chola) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Potatoes (unica) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 20
      },
      {
        "Commodity": "Potatoes - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 17
      },
      {
        "Commodity": "Potatoes - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 350
      },
      {
        "Commodity": "Potatoes - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 11
      },
      {
        "Commodity": "Potatoes - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 8
      },
      {
        "Commodity": "Potatoes - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 55
      },
      {
        "Commodity": "Potatoes - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Poultry - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -6
      },
      {
        "Commodity": "Prawn - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 13
      },
      {
        "Commodity": "Pulses - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 11
      },
      {
        "Commodity": "Pulses - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Pumpkin - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Pumpkin - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 63
      },
      {
        "Commodity": "Pumpkin - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 18
      },
      {
        "Commodity": "Pumpkin - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 189
      },
      {
        "Commodity": "Quinoa - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -10
      },
      {
        "Commodity": "Radish - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 18
      },
      {
        "Commodity": "Rape seed - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Rice (Grano de Oro) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Rice (Indica) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Rice (Japonica) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -4
      },
      {
        "Commodity": "Rice (basmati, broken) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 7
      },
      {
        "Commodity": "Rice (broken, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Rice (carolina 2da) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (carolina, 1st) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (coarse) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 28
      },
      {
        "Commodity": "Rice (coarse, BR-8/ 11/, Guti Sharna) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 42
      },
      {
        "Commodity": "Rice (coarse, BR-8/ 11/, Guti Sharna) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 61
      },
      {
        "Commodity": "Rice (denikassia, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (estaquilla) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 1
      },
      {
        "Commodity": "Rice (glutinous, unmilled) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Rice (high quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 5
      },
      {
        "Commodity": "Rice (high quality) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (high quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -3
      },
      {
        "Commodity": "Rice (high quality) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Rice (high quality, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 12
      },
      {
        "Commodity": "Rice (imported) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Rice (imported) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Rice (imported, Egyptian) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 150
      },
      {
        "Commodity": "Rice (local) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 21
      },
      {
        "Commodity": "Rice (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Rice (local) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Rice (long grain) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 14
      },
      {
        "Commodity": "Rice (long grain) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -6
      },
      {
        "Commodity": "Rice (long grain, Sinaloa) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 67
      },
      {
        "Commodity": "Rice (long grain, high quality, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Rice (long grain, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Rice (low quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -10
      },
      {
        "Commodity": "Rice (low quality) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 7
      },
      {
        "Commodity": "Rice (low quality) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Rice (low quality, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Rice (medium grain) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (medium grain) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 53
      },
      {
        "Commodity": "Rice (medium quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 5
      },
      {
        "Commodity": "Rice (milled, local) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 31
      },
      {
        "Commodity": "Rice (milled, superior) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 0
      },
      {
        "Commodity": "Rice (milled, superior) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (milled, superior) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 7
      },
      {
        "Commodity": "Rice (milled, superior) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Rice (mixed, low quality) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 6
      },
      {
        "Commodity": "Rice (mixed, low quality) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (ordinary, first quality) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (ordinary, first quality) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Rice (ordinary, first quality) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Rice (ordinary, second quality) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Rice (ordinary, second quality) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 10
      },
      {
        "Commodity": "Rice (paddy) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 37
      },
      {
        "Commodity": "Rice (paddy) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 32
      },
      {
        "Commodity": "Rice (premium) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (red nadu) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 61
      },
      {
        "Commodity": "Rice (red nadu) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -6
      },
      {
        "Commodity": "Rice (red) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -19
      },
      {
        "Commodity": "Rice (red) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -16
      },
      {
        "Commodity": "Rice (regular, milled) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Rice (regular, milled) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (regular, milled) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 26
      },
      {
        "Commodity": "Rice (regular, milled) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 13
      },
      {
        "Commodity": "Rice (regular, milled) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Rice (short grain, low quality, local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (small grain, Morelos) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 29
      },
      {
        "Commodity": "Rice (small grain, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Rice (special) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -3
      },
      {
        "Commodity": "Rice (tchako) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 23
      },
      {
        "Commodity": "Rice (well milled) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Rice (white) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 4
      },
      {
        "Commodity": "Rice (white) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 46
      },
      {
        "Commodity": "Rice (white) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 10
      },
      {
        "Commodity": "Rice (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 23
      },
      {
        "Commodity": "Rice (white) - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -11
      },
      {
        "Commodity": "Rice (white, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 21
      },
      {
        "Commodity": "Rice - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Rice - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 18
      },
      {
        "Commodity": "Rice - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 11
      },
      {
        "Commodity": "Rice - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 94
      },
      {
        "Commodity": "Rice - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 188
      },
      {
        "Commodity": "Rice - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 24
      },
      {
        "Commodity": "Rice - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Rice - Wholesale",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 98
      },
      {
        "Commodity": "Rice - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -16
      },
      {
        "Commodity": "Salt (iodised) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 19
      },
      {
        "Commodity": "Salt (iodised) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 110
      },
      {
        "Commodity": "Salt (iodised) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 17
      },
      {
        "Commodity": "Salt (iodised) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Salt - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 10
      },
      {
        "Commodity": "Salt - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 28
      },
      {
        "Commodity": "Salt - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 186
      },
      {
        "Commodity": "Salt - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -4
      },
      {
        "Commodity": "Salt - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 24
      },
      {
        "Commodity": "Sanitary pads - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 23
      },
      {
        "Commodity": "Semolina (white) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -9
      },
      {
        "Commodity": "Semolina (yellow) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Semolina - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Sesame - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 17
      },
      {
        "Commodity": "Sesame - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -6
      },
      {
        "Commodity": "Shampoo - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Shrimp (endeavor) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Shrimp (tiger) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Shrimps - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Snail - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -11
      },
      {
        "Commodity": "Snake gourd - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -20
      },
      {
        "Commodity": "Snake gourd - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 15
      },
      {
        "Commodity": "Snake gourd - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -17
      },
      {
        "Commodity": "Snake gourd - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 20
      },
      {
        "Commodity": "Sorghum (berbere) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 63
      },
      {
        "Commodity": "Sorghum (brown) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 109
      },
      {
        "Commodity": "Sorghum (brown) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 119
      },
      {
        "Commodity": "Sorghum (food aid) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 127
      },
      {
        "Commodity": "Sorghum (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -19
      },
      {
        "Commodity": "Sorghum (local) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 40
      },
      {
        "Commodity": "Sorghum (mixed) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 7
      },
      {
        "Commodity": "Sorghum (r'haya) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Sorghum (red) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 20
      },
      {
        "Commodity": "Sorghum (red) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 47
      },
      {
        "Commodity": "Sorghum (red) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 74
      },
      {
        "Commodity": "Sorghum (red, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 34
      },
      {
        "Commodity": "Sorghum (red, local) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 33
      },
      {
        "Commodity": "Sorghum (taghalit) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -5
      },
      {
        "Commodity": "Sorghum (white) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -17
      },
      {
        "Commodity": "Sorghum (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 44
      },
      {
        "Commodity": "Sorghum (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -11
      },
      {
        "Commodity": "Sorghum (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 132
      },
      {
        "Commodity": "Sorghum (white, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 84
      },
      {
        "Commodity": "Sorghum (white, imported) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 76
      },
      {
        "Commodity": "Sorghum - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 4
      },
      {
        "Commodity": "Sorghum - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 65
      },
      {
        "Commodity": "Sorghum - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -11
      },
      {
        "Commodity": "Sorghum - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 24
      },
      {
        "Commodity": "Sorghum flour - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 46
      },
      {
        "Commodity": "Soybeans - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 260
      },
      {
        "Commodity": "Soybeans - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Spinach - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 46
      },
      {
        "Commodity": "Spinach - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 106
      },
      {
        "Commodity": "Spinach - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -74
      },
      {
        "Commodity": "Spinach - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 136
      },
      {
        "Commodity": "Squashes - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -9
      },
      {
        "Commodity": "Squashes - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 16
      },
      {
        "Commodity": "Straw - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 12
      },
      {
        "Commodity": "Strawberries - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -5
      },
      {
        "Commodity": "Sugar (brown) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 0
      },
      {
        "Commodity": "Sugar (brown) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 58
      },
      {
        "Commodity": "Sugar (brown, imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 45
      },
      {
        "Commodity": "Sugar (brown, loaf) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 46
      },
      {
        "Commodity": "Sugar (brown, local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 10
      },
      {
        "Commodity": "Sugar (local) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 6
      },
      {
        "Commodity": "Sugar (premium) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Sugar (white) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 1
      },
      {
        "Commodity": "Sugar (white) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 31
      },
      {
        "Commodity": "Sugar (white) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 187
      },
      {
        "Commodity": "Sugar (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 15
      },
      {
        "Commodity": "Sugar (white) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 8
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 0
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 28
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 31
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 66
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 23
      },
      {
        "Commodity": "Sugar - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 20
      },
      {
        "Commodity": "Sugar - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Sugar - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 27
      },
      {
        "Commodity": "Surgical mask - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 8
      },
      {
        "Commodity": "Sweet Potato leaves - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -6
      },
      {
        "Commodity": "Sweet potatoes - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Sweet potatoes - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 109
      },
      {
        "Commodity": "Swiss chard - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Taro - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": -1
      },
      {
        "Commodity": "Taro - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 86
      },
      {
        "Commodity": "Tea (black) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 22
      },
      {
        "Commodity": "Tea (black) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Tea (green) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 29
      },
      {
        "Commodity": "Tea (green) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Tea (herbal) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 379
      },
      {
        "Commodity": "Tea - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 17
      },
      {
        "Commodity": "Tea - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Teff (Sergegna) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 12
      },
      {
        "Commodity": "Teff (Sergegna) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Teff (mixed) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 39
      },
      {
        "Commodity": "Teff (red) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 22
      },
      {
        "Commodity": "Teff (red) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 3
      },
      {
        "Commodity": "Teff (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 33
      },
      {
        "Commodity": "Teff (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Teff - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 19
      },
      {
        "Commodity": "Tomatoes (dried) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 42
      },
      {
        "Commodity": "Tomatoes (greenhouse) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 64
      },
      {
        "Commodity": "Tomatoes (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 293
      },
      {
        "Commodity": "Tomatoes (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 0
      },
      {
        "Commodity": "Tomatoes (navrongo) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 512
      },
      {
        "Commodity": "Tomatoes (paste) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": -3
      },
      {
        "Commodity": "Tomatoes (paste) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 310
      },
      {
        "Commodity": "Tomatoes (paste) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Tomatoes - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Tomatoes - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 212
      },
      {
        "Commodity": "Tomatoes - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 98
      },
      {
        "Commodity": "Tomatoes - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 84
      },
      {
        "Commodity": "Tomatoes - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 44
      },
      {
        "Commodity": "Tomatoes - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 32
      },
      {
        "Commodity": "Tomatoes - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 138
      },
      {
        "Commodity": "Toothbrush - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 5
      },
      {
        "Commodity": "Toothpaste - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Tortilla - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 7
      },
      {
        "Commodity": "Transport (public) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 0
      },
      {
        "Commodity": "Transport (public, bus) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -4
      },
      {
        "Commodity": "Tree tomatoes - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 27
      },
      {
        "Commodity": "Wage (casual labour) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 25
      },
      {
        "Commodity": "Wage (non-qualified labour) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 3
      },
      {
        "Commodity": "Wage (non-qualified labour) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 45
      },
      {
        "Commodity": "Wage (non-qualified labour, agricultural) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 11
      },
      {
        "Commodity": "Wage (non-qualified labour, livestock) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -8
      },
      {
        "Commodity": "Wage (non-qualified labour, non-agricultural) - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 6
      },
      {
        "Commodity": "Wage (non-qualified labour, non-agricultural) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 27
      },
      {
        "Commodity": "Wage (non-qualified labour, non-agricultural) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 6
      },
      {
        "Commodity": "Wage (non-qualified labour, non-agricultural) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 2
      },
      {
        "Commodity": "Wage (non-qualified labour, non-agricultural) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 109
      },
      {
        "Commodity": "Wage (qualified labour) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 21
      },
      {
        "Commodity": "Wage (qualified labour) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -6
      },
      {
        "Commodity": "Wage (qualified labour) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -1
      },
      {
        "Commodity": "Water (drinking) - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": -79
      },
      {
        "Commodity": "Water (drinking) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 0
      },
      {
        "Commodity": "Water - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Water spinach - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 45
      },
      {
        "Commodity": "Water spinach - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 37
      },
      {
        "Commodity": "Watermelons - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 49
      },
      {
        "Commodity": "Watermelons - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 13
      },
      {
        "Commodity": "Wax gourd - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 20
      },
      {
        "Commodity": "Wax gourd - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 34
      },
      {
        "Commodity": "Wheat (imported) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 6
      },
      {
        "Commodity": "Wheat (mixed) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 36
      },
      {
        "Commodity": "Wheat (mixed) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 4
      },
      {
        "Commodity": "Wheat (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 157
      },
      {
        "Commodity": "Wheat (white) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Wheat - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Wheat - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 35
      },
      {
        "Commodity": "Wheat - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 5
      },
      {
        "Commodity": "Wheat - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 19
      },
      {
        "Commodity": "Wheat - Wholesale",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 74
      },
      {
        "Commodity": "Wheat - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 97
      },
      {
        "Commodity": "Wheat flour (first grade) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 83
      },
      {
        "Commodity": "Wheat flour (first grade) - Wholesale",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 5
      },
      {
        "Commodity": "Wheat flour (high grade) - Wholesale",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 12
      },
      {
        "Commodity": "Wheat flour (high quality) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 22
      },
      {
        "Commodity": "Wheat flour (high quality) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -1
      },
      {
        "Commodity": "Wheat flour (imported) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 30
      },
      {
        "Commodity": "Wheat flour (imported) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 9
      },
      {
        "Commodity": "Wheat flour (imported) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 3
      },
      {
        "Commodity": "Wheat flour (local) - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 32
      },
      {
        "Commodity": "Wheat flour (local) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 6
      },
      {
        "Commodity": "Wheat flour (local) - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": -5
      },
      {
        "Commodity": "Wheat flour (locally processed) - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 27
      },
      {
        "Commodity": "Wheat flour (low quality) - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": -1
      },
      {
        "Commodity": "Wheat flour - Retail",
        "Year": 2020,
        "Region": "East Asia & Pacific",
        "Percent Change": 2
      },
      {
        "Commodity": "Wheat flour - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 14
      },
      {
        "Commodity": "Wheat flour - Retail",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 11
      },
      {
        "Commodity": "Wheat flour - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 80
      },
      {
        "Commodity": "Wheat flour - Retail",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 19
      },
      {
        "Commodity": "Wheat flour - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 23
      },
      {
        "Commodity": "Wheat flour - Wholesale",
        "Year": 2020,
        "Region": "South Asia",
        "Percent Change": 3
      },
      {
        "Commodity": "Wheat meal - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -7
      },
      {
        "Commodity": "Yam (Abuja) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 78
      },
      {
        "Commodity": "Yam (Abuja) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 41
      },
      {
        "Commodity": "Yam (dry) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Yam (florido) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 164
      },
      {
        "Commodity": "Yam (flour) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -2
      },
      {
        "Commodity": "Yam (puna) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": -41
      },
      {
        "Commodity": "Yam (puna) - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 315
      },
      {
        "Commodity": "Yam (white) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 21
      },
      {
        "Commodity": "Yam (yellow) - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 1
      },
      {
        "Commodity": "Yam - Retail",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 13
      },
      {
        "Commodity": "Yam - Wholesale",
        "Year": 2020,
        "Region": "Latin America & Caribbean",
        "Percent Change": 99
      },
      {
        "Commodity": "Yam - Wholesale",
        "Year": 2020,
        "Region": "Sub-Saharan Africa",
        "Percent Change": 99
      },
      {
        "Commodity": "Yogurt - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 13
      },
      {
        "Commodity": "Yogurt - Retail",
        "Year": 2020,
        "Region": "Middle East & North Africa",
        "Percent Change": 173
      },
      {
        "Commodity": "Zucchini - Retail",
        "Year": 2020,
        "Region": "Europe & Central Asia",
        "Percent Change": 44
      }
    ]
  }
}
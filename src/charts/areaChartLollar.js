export default {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300},
    "axisX": {"labelAngle": -45}},
    "layer": [
      {
        "data": {"name": "data-967d1e792075c9420ff4629f40384a4e"},
        "mark": "area",
        "encoding": {
          "color": {
            "type": "nominal",
            "field": "cmname",
            "legend": {"title": "Commodities"},
            "scale": {"scheme": "tableau20"}
          },
          "x": {
            "type": "ordinal",
            "field": "date",
            "timeUnit": "yearmonth",
            "title": ""
          },
          "y": {"type": "quantitative", "field": "Price, Lollar", "title": ""}
        },
        "height": 300,
        "title": {"text": ["Household Commodity Prices, Lollar"], "fontSize": 15},
        "width": 295
      },
      {
        "data": {"name": "data-38ae4cf486f5687ce474155bc968decd"},
        "mark": {"type": "line", "color": "#EF3340"},
        "encoding": {
          "x": {
            "type": "ordinal",
            "field": "date",
            "timeUnit": "yearmonth",
            "title": ""
          },
          "y": {"type": "quantitative", "field": " ", "title": ""}
        }
      }
    ],
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    "datasets": {
      "data-967d1e792075c9420ff4629f40384a4e": [
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Bread",
          "price": 1475,
          "Price, USD": 0.9787657597876576,
          "Price, Lollar": 0.9839615966013943
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Cheese",
          "price": 2240,
          "Price, USD": 1.4863968148639681,
          "Price, Lollar": 1.4942874416183887
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3607,
          "Price, USD": 2.39349701393497,
          "Price, Lollar": 2.406203036570325
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1434,
          "Price, USD": 0.9515593895155939,
          "Price, Lollar": 0.9566107996789148
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Eggs",
          "price": 5411,
          "Price, USD": 3.590577305905773,
          "Price, Lollar": 3.60963810115942
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Fuel",
          "price": 14100,
          "Price, USD": 9.35633709356337,
          "Price, Lollar": 9.406005770901464
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2525,
          "Price, USD": 1.6755142667551426,
          "Price, Lollar": 1.684408834860014
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Beef",
          "price": 1902,
          "Price, USD": 1.2621101526211016,
          "Price, Lollar": 1.2688101401598997
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Chicken",
          "price": 5609,
          "Price, USD": 3.7219641672196415,
          "Price, Lollar": 3.7417224375167595
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10688,
          "Price, USD": 7.092236230922362,
          "Price, Lollar": 7.129885792864882
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Pasta",
          "price": 1575,
          "Price, USD": 1.0451227604512277,
          "Price, Lollar": 1.0506708573879295
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Rice",
          "price": 1866,
          "Price, USD": 1.2382216323822164,
          "Price, Lollar": 1.244794806276747
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Salt",
          "price": 632,
          "Price, USD": 0.41937624419376246,
          "Price, Lollar": 0.4216025281709025
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Sugar",
          "price": 1133,
          "Price, USD": 0.7518248175182481,
          "Price, Lollar": 0.7558159247114439
        },
        {
          "date": "2018-11-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3429,
          "Price, USD": 2.2753815527538155,
          "Price, Lollar": 2.2874605523702924
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Bread",
          "price": 1480,
          "Price, USD": 0.9820836098208361,
          "Price, Lollar": 0.9872970596407211
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Cheese",
          "price": 2235,
          "Price, USD": 1.4830789648307896,
          "Price, Lollar": 1.490951978579062
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3412,
          "Price, USD": 2.2641008626410084,
          "Price, Lollar": 2.276119978036581
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1425,
          "Price, USD": 0.9455872594558726,
          "Price, Lollar": 0.9506069662081267
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Eggs",
          "price": 5701,
          "Price, USD": 3.783012607830126,
          "Price, Lollar": 3.803094957440372
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Fuel",
          "price": 13300,
          "Price, USD": 8.825481088254811,
          "Price, Lollar": 8.872331684609183
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2500,
          "Price, USD": 1.6589250165892502,
          "Price, Lollar": 1.6677315196633802
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Beef",
          "price": 1907,
          "Price, USD": 1.2654280026542801,
          "Price, Lollar": 1.2721456031992264
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Chicken",
          "price": 5674,
          "Price, USD": 3.7650962176509624,
          "Price, Lollar": 3.785083457028008
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10754,
          "Price, USD": 7.136031851360318,
          "Price, Lollar": 7.173913904983996
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Pasta",
          "price": 1502,
          "Price, USD": 0.9966821499668215,
          "Price, Lollar": 1.0019730970137588
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Rice",
          "price": 1820,
          "Price, USD": 1.2076974120769741,
          "Price, Lollar": 1.2141085463149408
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Salt",
          "price": 586,
          "Price, USD": 0.38885202388852025,
          "Price, Lollar": 0.39091626820909636
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Sugar",
          "price": 1166,
          "Price, USD": 0.7737226277372263,
          "Price, Lollar": 0.7778299807710006
        },
        {
          "date": "2018-12-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3371,
          "Price, USD": 2.236894492368945,
          "Price, Lollar": 2.2487691811141017
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Bread",
          "price": 1471,
          "Price, USD": 0.9761114797611148,
          "Price, Lollar": 0.981293226169933
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Cheese",
          "price": 2248,
          "Price, USD": 1.4917053749170537,
          "Price, Lollar": 1.4996241824813115
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3303,
          "Price, USD": 2.1917717319177172,
          "Price, Lollar": 2.203406883779258
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1486,
          "Price, USD": 0.9860650298606503,
          "Price, Lollar": 0.9912996152879132
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Eggs",
          "price": 5510,
          "Price, USD": 3.6562707365627074,
          "Price, Lollar": 3.6756802693380903
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Fuel",
          "price": 13300,
          "Price, USD": 8.825481088254811,
          "Price, Lollar": 8.872331684609183
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2439,
          "Price, USD": 1.6184472461844726,
          "Price, Lollar": 1.6270388705835939
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Beef",
          "price": 1877,
          "Price, USD": 1.245520902455209,
          "Price, Lollar": 1.252132824963266
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Chicken",
          "price": 5697,
          "Price, USD": 3.7803583278035835,
          "Price, Lollar": 3.800426587008911
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10717,
          "Price, USD": 7.111479761114798,
          "Price, Lollar": 7.149231478492979
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Pasta",
          "price": 1488,
          "Price, USD": 0.9873921698739216,
          "Price, Lollar": 0.9926338005036438
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Rice",
          "price": 1848,
          "Price, USD": 1.2262773722627738,
          "Price, Lollar": 1.2327871393351708
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Salt",
          "price": 582,
          "Price, USD": 0.3861977438619774,
          "Price, Lollar": 0.3882478977776349
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Sugar",
          "price": 1139,
          "Price, USD": 0.7558062375580624,
          "Price, Lollar": 0.7598184803586361
        },
        {
          "date": "2019-01-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3353,
          "Price, USD": 2.2249502322495025,
          "Price, Lollar": 2.2367615141725254
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Bread",
          "price": 1472,
          "Price, USD": 0.9767750497677505,
          "Price, Lollar": 0.9819603187777982
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Cheese",
          "price": 2228,
          "Price, USD": 1.4784339747843398,
          "Price, Lollar": 1.4862823303240045
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3276,
          "Price, USD": 2.1738553417385535,
          "Price, Lollar": 2.1853953833668935
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1493,
          "Price, USD": 0.9907100199071002,
          "Price, Lollar": 0.9959692635429707
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Eggs",
          "price": 5590,
          "Price, USD": 3.7093563370935634,
          "Price, Lollar": 3.7290476779673183
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Fuel",
          "price": 14500,
          "Price, USD": 9.62176509621765,
          "Price, Lollar": 9.672842814047605
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2439,
          "Price, USD": 1.6184472461844726,
          "Price, Lollar": 1.6270388705835939
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Beef",
          "price": 1876,
          "Price, USD": 1.2448573324485732,
          "Price, Lollar": 1.2514657323554004
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Chicken",
          "price": 5642,
          "Price, USD": 3.7438619774386197,
          "Price, Lollar": 3.7637364935763165
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10603,
          "Price, USD": 7.035832780358327,
          "Price, Lollar": 7.073182921196327
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Pasta",
          "price": 1016,
          "Price, USD": 0.6741871267418713,
          "Price, Lollar": 0.6777660895911978
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Rice",
          "price": 1859,
          "Price, USD": 1.2335766423357664,
          "Price, Lollar": 1.2401251580216894
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Salt",
          "price": 695,
          "Price, USD": 0.46118115461181153,
          "Price, Lollar": 0.46362936246641967
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Sugar",
          "price": 1131,
          "Price, USD": 0.7504976775049768,
          "Price, Lollar": 0.7544817394957133
        },
        {
          "date": "2019-02-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3412,
          "Price, USD": 2.2641008626410084,
          "Price, Lollar": 2.276119978036581
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Bread",
          "price": 1478,
          "Price, USD": 0.9807564698075647,
          "Price, Lollar": 0.9859628744249904
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Cheese",
          "price": 2237,
          "Price, USD": 1.484406104844061,
          "Price, Lollar": 1.4922861637947928
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3247,
          "Price, USD": 2.154611811546118,
          "Price, Lollar": 2.166049697738798
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1575,
          "Price, USD": 1.0451227604512277,
          "Price, Lollar": 1.0506708573879295
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Eggs",
          "price": 5433,
          "Price, USD": 3.6051758460517584,
          "Price, Lollar": 3.6243141385324575
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Fuel",
          "price": 15200,
          "Price, USD": 10.08626410086264,
          "Price, Lollar": 10.139807639553352
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2299,
          "Price, USD": 1.5255474452554745,
          "Price, Lollar": 1.5336459054824445
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Beef",
          "price": 1948,
          "Price, USD": 1.2926343729263436,
          "Price, Lollar": 1.2994964001217058
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Chicken",
          "price": 5616,
          "Price, USD": 3.7266091572660915,
          "Price, Lollar": 3.7463920857718174
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10562,
          "Price, USD": 7.008626410086264,
          "Price, Lollar": 7.045832124273848
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Pasta",
          "price": 1044,
          "Price, USD": 0.6927670869276709,
          "Price, Lollar": 0.6964446826114276
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Rice",
          "price": 1853,
          "Price, USD": 1.2295952222959523,
          "Price, Lollar": 1.2361226023744976
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Salt",
          "price": 641,
          "Price, USD": 0.42534837425348376,
          "Price, Lollar": 0.42760636164169075
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Sugar",
          "price": 1152,
          "Price, USD": 0.7644326476443265,
          "Price, Lollar": 0.7684906842608856
        },
        {
          "date": "2019-03-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3377,
          "Price, USD": 2.240875912408759,
          "Price, Lollar": 2.252771736761294
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Bread",
          "price": 1470,
          "Price, USD": 0.9754479097544791,
          "Price, Lollar": 0.9806261335620676
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Cheese",
          "price": 2191,
          "Price, USD": 1.4538818845388188,
          "Price, Lollar": 1.4615999038329863
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3056,
          "Price, USD": 2.0278699402786993,
          "Price, Lollar": 2.038635009636516
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1423,
          "Price, USD": 0.9442601194426012,
          "Price, Lollar": 0.9492727809923961
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Eggs",
          "price": 5453,
          "Price, USD": 3.6184472461844726,
          "Price, Lollar": 3.637655990689765
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Fuel",
          "price": 15200,
          "Price, USD": 10.08626410086264,
          "Price, Lollar": 10.139807639553352
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2219,
          "Price, USD": 1.4724618447246185,
          "Price, Lollar": 1.4802784968532166
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Beef",
          "price": 1984,
          "Price, USD": 1.3165228931652289,
          "Price, Lollar": 1.3235117340048583
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Chicken",
          "price": 5603,
          "Price, USD": 3.7179827471798275,
          "Price, Lollar": 3.737719881869568
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10650,
          "Price, USD": 7.067020570670206,
          "Price, Lollar": 7.104536273766
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Pasta",
          "price": 1097,
          "Price, USD": 0.7279362972793629,
          "Price, Lollar": 0.7318005908282912
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Rice",
          "price": 1955,
          "Price, USD": 1.2972793629727937,
          "Price, Lollar": 1.3041660483767634
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Salt",
          "price": 590,
          "Price, USD": 0.391506303915063,
          "Price, Lollar": 0.3935846386405577
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Sugar",
          "price": 1113,
          "Price, USD": 0.7385534173855341,
          "Price, Lollar": 0.7424740725541368
        },
        {
          "date": "2019-04-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3353,
          "Price, USD": 2.2249502322495025,
          "Price, Lollar": 2.2367615141725254
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Bread",
          "price": 1477,
          "Price, USD": 0.980092899800929,
          "Price, Lollar": 0.9852957818171251
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Cheese",
          "price": 2201,
          "Price, USD": 1.460517584605176,
          "Price, Lollar": 1.46827082991164
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3038,
          "Price, USD": 2.0159256801592567,
          "Price, Lollar": 2.0266273426949395
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1263,
          "Price, USD": 0.8380889183808892,
          "Price, Lollar": 0.8425379637339397
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Eggs",
          "price": 4783,
          "Price, USD": 3.1738553417385535,
          "Price, Lollar": 3.190703943419979
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Fuel",
          "price": 13800,
          "Price, USD": 9.15726609157266,
          "Price, Lollar": 9.20587798854186
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2303,
          "Price, USD": 1.5282017252820173,
          "Price, Lollar": 1.536314275913906
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Beef",
          "price": 1877,
          "Price, USD": 1.245520902455209,
          "Price, Lollar": 1.252132824963266
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Chicken",
          "price": 5668,
          "Price, USD": 3.761114797611148,
          "Price, Lollar": 3.7810809013808155
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10513,
          "Price, USD": 6.976111479761115,
          "Price, Lollar": 7.013144586488447
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Pasta",
          "price": 1114,
          "Price, USD": 0.7392169873921699,
          "Price, Lollar": 0.7431411651620022
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Rice",
          "price": 1855,
          "Price, USD": 1.2309223623092236,
          "Price, Lollar": 1.237456787590228
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Salt",
          "price": 632,
          "Price, USD": 0.41937624419376246,
          "Price, Lollar": 0.4216025281709025
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Sugar",
          "price": 1154,
          "Price, USD": 0.7657597876575979,
          "Price, Lollar": 0.7698248694766163
        },
        {
          "date": "2019-05-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3439,
          "Price, USD": 2.2820172528201725,
          "Price, Lollar": 2.294131478448946
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Bread",
          "price": 1475,
          "Price, USD": 0.9787657597876576,
          "Price, Lollar": 0.9839615966013943
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Cheese",
          "price": 2224,
          "Price, USD": 1.475779694757797,
          "Price, Lollar": 1.4836139598925433
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 2959,
          "Price, USD": 1.9635036496350364,
          "Price, Lollar": 1.9739270266735767
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1235,
          "Price, USD": 0.8195089581950896,
          "Price, Lollar": 0.8238593707137097
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Eggs",
          "price": 4436,
          "Price, USD": 2.9435965494359655,
          "Price, Lollar": 2.9592228084907015
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Fuel",
          "price": 12900,
          "Price, USD": 8.560053085600531,
          "Price, Lollar": 8.605494641463041
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2318,
          "Price, USD": 1.5381552753815528,
          "Price, Lollar": 1.5463206650318864
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Beef",
          "price": 1902,
          "Price, USD": 1.2621101526211016,
          "Price, Lollar": 1.2688101401598997
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Chicken",
          "price": 5773,
          "Price, USD": 3.8307896483078965,
          "Price, Lollar": 3.8511256252066772
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10565,
          "Price, USD": 7.010617120106171,
          "Price, Lollar": 7.047833402097445
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Pasta",
          "price": 1137,
          "Price, USD": 0.7544790975447909,
          "Price, Lollar": 0.7584842951429052
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Rice",
          "price": 1837,
          "Price, USD": 1.218978102189781,
          "Price, Lollar": 1.2254491206486517
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Salt",
          "price": 674,
          "Price, USD": 0.44724618447246184,
          "Price, Lollar": 0.44962041770124733
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Sugar",
          "price": 1159,
          "Price, USD": 0.7690776376907764,
          "Price, Lollar": 0.7731603325159432
        },
        {
          "date": "2019-06-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3469,
          "Price, USD": 2.3019243530192437,
          "Price, Lollar": 2.3141442566849064
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Bread",
          "price": 1475,
          "Price, USD": 0.9787657597876576,
          "Price, Lollar": 0.9839615966013943
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Cheese",
          "price": 2234,
          "Price, USD": 1.4824153948241539,
          "Price, Lollar": 1.4902848859711966
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 2990,
          "Price, USD": 1.9840743198407431,
          "Price, Lollar": 1.9946068975174027
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1073,
          "Price, USD": 0.7120106171201062,
          "Price, Lollar": 0.7157903682395228
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Eggs",
          "price": 4743,
          "Price, USD": 3.1473125414731253,
          "Price, Lollar": 3.1640202391053647
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Fuel",
          "price": 13100,
          "Price, USD": 8.69276708692767,
          "Price, Lollar": 8.738913163036111
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2290,
          "Price, USD": 1.5195753151957532,
          "Price, Lollar": 1.5276420720116564
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Beef",
          "price": 1898,
          "Price, USD": 1.2594558725945588,
          "Price, Lollar": 1.2661417697284383
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Chicken",
          "price": 5802,
          "Price, USD": 3.8500331785003317,
          "Price, Lollar": 3.870471310834773
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10520,
          "Price, USD": 6.980756469807565,
          "Price, Lollar": 7.017814234743504
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Pasta",
          "price": 1111,
          "Price, USD": 0.7372262773722628,
          "Price, Lollar": 0.7411398873384062
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Rice",
          "price": 1868,
          "Price, USD": 1.2395487723954877,
          "Price, Lollar": 1.2461289914924776
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Salt",
          "price": 682,
          "Price, USD": 0.45255474452554745,
          "Price, Lollar": 0.4549571585641701
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Sugar",
          "price": 1164,
          "Price, USD": 0.7723954877239548,
          "Price, Lollar": 0.7764957955552698
        },
        {
          "date": "2019-07-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3447,
          "Price, USD": 2.287325812873258,
          "Price, Lollar": 2.2994682193118687
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Bread",
          "price": 1473,
          "Price, USD": 0.9774386197743862,
          "Price, Lollar": 1.011814364199099
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Cheese",
          "price": 2238,
          "Price, USD": 1.4850696748506969,
          "Price, Lollar": 1.53729840263244
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 2943,
          "Price, USD": 1.9528865295288653,
          "Price, Lollar": 2.021568006678852
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1112,
          "Price, USD": 0.7378898473788985,
          "Price, Lollar": 0.7638408506377451
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Eggs",
          "price": 4983,
          "Price, USD": 3.3065693430656933,
          "Price, Lollar": 3.422858775834427
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Fuel",
          "price": 11600,
          "Price, USD": 7.69741207697412,
          "Price, Lollar": 7.968123981472878
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2292,
          "Price, USD": 1.5209024552090245,
          "Price, Lollar": 1.5743913935806757
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Beef",
          "price": 1960,
          "Price, USD": 1.3005972130059722,
          "Price, Lollar": 1.3463381899730038
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Chicken",
          "price": 5796,
          "Price, USD": 3.8460517584605176,
          "Price, Lollar": 3.9813143617773106
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10523,
          "Price, USD": 6.982747179827472,
          "Price, Lollar": 7.228324884227509
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Pasta",
          "price": 1281,
          "Price, USD": 0.8500331785003318,
          "Price, Lollar": 0.8799281741609274
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Rice",
          "price": 1852,
          "Price, USD": 1.2289316522893166,
          "Price, Lollar": 1.2721522080765322
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Salt",
          "price": 608,
          "Price, USD": 0.40345056403450563,
          "Price, Lollar": 0.417639601787544
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Sugar",
          "price": 1176,
          "Price, USD": 0.7803583278035833,
          "Price, Lollar": 0.8078029139838022
        },
        {
          "date": "2019-08-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3420,
          "Price, USD": 2.2694094226940944,
          "Price, Lollar": 2.349222760054935
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Bread",
          "price": 1478,
          "Price, USD": 0.9807564698075647,
          "Price, Lollar": 1.0933449696593953
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Cheese",
          "price": 2248,
          "Price, USD": 1.4917053749170537,
          "Price, Lollar": 1.6629495884941274
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 2895,
          "Price, USD": 1.9210351692103518,
          "Price, Lollar": 2.141565417566948
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1188,
          "Price, USD": 0.7883211678832117,
          "Price, Lollar": 0.878818554773587
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Eggs",
          "price": 4894,
          "Price, USD": 3.247511612475116,
          "Price, Lollar": 3.620318187762571
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Fuel",
          "price": 12100,
          "Price, USD": 8.02919708029197,
          "Price, Lollar": 8.950929724545794
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2289,
          "Price, USD": 1.5189117451891174,
          "Price, Lollar": 1.6932791850814315
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Beef",
          "price": 1926,
          "Price, USD": 1.2780358327803583,
          "Price, Lollar": 1.4247512933450577
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Chicken",
          "price": 5593,
          "Price, USD": 3.7113470471134704,
          "Price, Lollar": 4.137400822263192
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10555,
          "Price, USD": 7.003981420039814,
          "Price, Lollar": 7.808021755585194
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Pasta",
          "price": 1244,
          "Price, USD": 0.8254810882548109,
          "Price, Lollar": 0.920244345234295
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Rice",
          "price": 1849,
          "Price, USD": 1.2269409422694095,
          "Price, Lollar": 1.3677908314615845
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Salt",
          "price": 672,
          "Price, USD": 0.44591904445919045,
          "Price, Lollar": 0.4971094855284936
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Sugar",
          "price": 1179,
          "Price, USD": 0.7823490378234904,
          "Price, Lollar": 0.8721608384495446
        },
        {
          "date": "2019-09-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3430,
          "Price, USD": 2.276045122760451,
          "Price, Lollar": 2.5373296657183526
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Bread",
          "price": 1482,
          "Price, USD": 0.9834107498341075,
          "Price, Lollar": 1.1289320485819547
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Cheese",
          "price": 2251,
          "Price, USD": 1.493696084936961,
          "Price, Lollar": 1.7147274233184753
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 2923,
          "Price, USD": 1.9396151293961512,
          "Price, Lollar": 2.226631834011507
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1172,
          "Price, USD": 0.7777040477770405,
          "Price, Lollar": 0.8927856686491573
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Eggs",
          "price": 5113,
          "Price, USD": 3.3928334439283345,
          "Price, Lollar": 3.8948917438593353
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Fuel",
          "price": 13900,
          "Price, USD": 9.223623092236231,
          "Price, Lollar": 10.588498971180279
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2242,
          "Price, USD": 1.4877239548772396,
          "Price, Lollar": 1.7078715606752652
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Beef",
          "price": 1895,
          "Price, USD": 1.2574651625746516,
          "Price, Lollar": 1.4435399676537142
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Chicken",
          "price": 5735,
          "Price, USD": 3.8055739880557398,
          "Price, Lollar": 4.368708028756755
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10461,
          "Price, USD": 6.9416058394160585,
          "Price, Lollar": 7.96879767895805
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Pasta",
          "price": 1194,
          "Price, USD": 0.7923025879230259,
          "Price, Lollar": 0.9095444439992267
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Rice",
          "price": 1873,
          "Price, USD": 1.2428666224286662,
          "Price, Lollar": 1.4267811923036446
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Salt",
          "price": 649,
          "Price, USD": 0.4306569343065693,
          "Price, Lollar": 0.4943838728270503
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Sugar",
          "price": 1190,
          "Price, USD": 0.7896483078964831,
          "Price, Lollar": 0.9064973939355778
        },
        {
          "date": "2019-10-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3477,
          "Price, USD": 2.3072329130723293,
          "Price, Lollar": 2.648648267826894
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Bread",
          "price": 1481,
          "Price, USD": 0.9827471798274718,
          "Price, Lollar": 1.1868612258035824
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Cheese",
          "price": 2320,
          "Price, USD": 1.539482415394824,
          "Price, Lollar": 1.8592289290103385
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3163,
          "Price, USD": 2.0988719309887194,
          "Price, Lollar": 2.534802199336078
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1105,
          "Price, USD": 0.7332448573324486,
          "Price, Lollar": 0.8855379166191483
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Eggs",
          "price": 5495,
          "Price, USD": 3.646317186463172,
          "Price, Lollar": 4.403647829703367
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Fuel",
          "price": 14500,
          "Price, USD": 9.62176509621765,
          "Price, Lollar": 11.620180806314615
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2394,
          "Price, USD": 1.588586595885866,
          "Price, Lollar": 1.9185319207115306
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Beef",
          "price": 1973,
          "Price, USD": 1.3092236230922363,
          "Price, Lollar": 1.5811459814385336
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Chicken",
          "price": 5603,
          "Price, USD": 3.7179827471798275,
          "Price, Lollar": 4.490198141915917
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 10740,
          "Price, USD": 7.126741871267419,
          "Price, Lollar": 8.606947714470273
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Pasta",
          "price": 1386,
          "Price, USD": 0.9197080291970803,
          "Price, Lollar": 1.110729006727728
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Rice",
          "price": 2079,
          "Price, USD": 1.3795620437956204,
          "Price, Lollar": 1.666093510091592
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Salt",
          "price": 707,
          "Price, USD": 0.46914399469143997,
          "Price, Lollar": 0.5665839882803058
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Sugar",
          "price": 1306,
          "Price, USD": 0.8666224286662243,
          "Price, Lollar": 1.0466176643480614
        },
        {
          "date": "2019-11-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3624,
          "Price, USD": 2.404777704047777,
          "Price, Lollar": 2.904243809798908
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Bread",
          "price": 1483,
          "Price, USD": 0.9840743198407432,
          "Price, Lollar": 1.3125344279229554
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Cheese",
          "price": 2448,
          "Price, USD": 1.6244193762441939,
          "Price, Lollar": 2.1666111123097744
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3390,
          "Price, USD": 2.2495023224950232,
          "Price, Lollar": 3.000331564840741
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1416,
          "Price, USD": 0.9396151293961513,
          "Price, Lollar": 1.2532358394733008
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Eggs",
          "price": 6271,
          "Price, USD": 4.161247511612475,
          "Price, Lollar": 5.550170868175896
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Fuel",
          "price": 14400,
          "Price, USD": 9.55540809555408,
          "Price, Lollar": 12.744771248881023
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2762,
          "Price, USD": 1.8327803583278035,
          "Price, Lollar": 2.4445179298200963
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Beef",
          "price": 2167,
          "Price, USD": 1.437956204379562,
          "Price, Lollar": 1.9179110622448041
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Chicken",
          "price": 5874,
          "Price, USD": 3.897810218978102,
          "Price, Lollar": 5.198804605272717
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 11148,
          "Price, USD": 7.3974784339747846,
          "Price, Lollar": 9.866577075175393
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Pasta",
          "price": 1395,
          "Price, USD": 0.9256801592568016,
          "Price, Lollar": 1.2346497147353492
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Rice",
          "price": 2415,
          "Price, USD": 1.6025215660252157,
          "Price, Lollar": 2.1374043448644215
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Salt",
          "price": 763,
          "Price, USD": 0.5063039150630392,
          "Price, Lollar": 0.6752958654789043
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Sugar",
          "price": 1635,
          "Price, USD": 1.0849369608493695,
          "Price, Lollar": 1.447062568883366
        },
        {
          "date": "2019-12-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 3947,
          "Price, USD": 2.619110816191108,
          "Price, Lollar": 3.4933063971759304
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Bread",
          "price": 1486,
          "Price, USD": 0.9860650298606503,
          "Price, Lollar": 1.472227151417693
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Cheese",
          "price": 2582,
          "Price, USD": 1.7133377571333777,
          "Price, Lollar": 2.5580689804579295
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3599,
          "Price, USD": 2.3881884538818845,
          "Price, Lollar": 3.565643013426835
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1554,
          "Price, USD": 1.0311877903118778,
          "Price, Lollar": 1.5395968999347875
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Eggs",
          "price": 6672,
          "Price, USD": 4.427339084273391,
          "Price, Lollar": 6.610161207442023
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Fuel",
          "price": 14700,
          "Price, USD": 9.754479097544792,
          "Price, Lollar": 14.563754458842588
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2792,
          "Price, USD": 1.8526874585268747,
          "Price, Lollar": 2.7661226155842518
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Beef",
          "price": 2327,
          "Price, USD": 1.5441274054412741,
          "Price, Lollar": 2.3054324235188233
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Chicken",
          "price": 5888,
          "Price, USD": 3.907100199071002,
          "Price, Lollar": 5.833427636303752
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 11159,
          "Price, USD": 7.404777704047777,
          "Price, Lollar": 11.055573877974451
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Pasta",
          "price": 1546,
          "Price, USD": 1.0258792302587922,
          "Price, Lollar": 1.5316710471680708
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Rice",
          "price": 2463,
          "Price, USD": 1.6343729263437292,
          "Price, Lollar": 2.4401719205530132
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Salt",
          "price": 770,
          "Price, USD": 0.5109489051094891,
          "Price, Lollar": 0.7628633287965166
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Sugar",
          "price": 1719,
          "Price, USD": 1.1406768414067685,
          "Price, Lollar": 1.7030676132483273
        },
        {
          "date": "2020-01-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 4215,
          "Price, USD": 2.7969475779694757,
          "Price, Lollar": 4.175933676464048
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Bread",
          "price": 1480,
          "Price, USD": 0.9820836098208361,
          "Price, Lollar": 1.5184172600415051
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Cheese",
          "price": 2554,
          "Price, USD": 1.694757796947578,
          "Price, Lollar": 2.6202957311797324
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3458,
          "Price, USD": 2.2946250829462507,
          "Price, Lollar": 3.5477614089348135
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1625,
          "Price, USD": 1.0783012607830127,
          "Price, Lollar": 1.6671811132212473
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Eggs",
          "price": 6246,
          "Price, USD": 4.144658261446582,
          "Price, Lollar": 6.408131220418405
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Fuel",
          "price": 15400,
          "Price, USD": 10.218978102189782,
          "Price, Lollar": 15.799747165296743
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2788,
          "Price, USD": 1.8500331785003319,
          "Price, Lollar": 2.8603698114835923
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Beef",
          "price": 2244,
          "Price, USD": 1.489051094890511,
          "Price, Lollar": 2.3022488726575254
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Chicken",
          "price": 5938,
          "Price, USD": 3.940278699402787,
          "Price, Lollar": 6.092136277112471
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 12665,
          "Price, USD": 8.40411413404114,
          "Price, Lollar": 12.993753107044364
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Pasta",
          "price": 1451,
          "Price, USD": 0.9628400796284008,
          "Price, Lollar": 1.4886644894055567
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Rice",
          "price": 2493,
          "Price, USD": 1.6542800265428004,
          "Price, Lollar": 2.5577123170834275
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Salt",
          "price": 734,
          "Price, USD": 0.4870603848706038,
          "Price, Lollar": 0.7530528843719355
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Sugar",
          "price": 1708,
          "Price, USD": 1.1333775713337757,
          "Price, Lollar": 1.7523355946965478
        },
        {
          "date": "2020-02-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 4650,
          "Price, USD": 3.0856005308560053,
          "Price, Lollar": 4.770702877833107
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Bread",
          "price": 1481,
          "Price, USD": 0.9827471798274718,
          "Price, Lollar": 1.6466069204143108
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Cheese",
          "price": 2626,
          "Price, USD": 1.7425348374253484,
          "Price, Lollar": 2.9196419804240246
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3711,
          "Price, USD": 2.462508294625083,
          "Price, Lollar": 4.125967779647203
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1712,
          "Price, USD": 1.1360318513603185,
          "Price, Lollar": 1.9034375744424714
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Eggs",
          "price": 6776,
          "Price, USD": 4.4963503649635035,
          "Price, Lollar": 7.533699184826043
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Fuel",
          "price": 13500,
          "Price, USD": 8.95819508958195,
          "Price, Lollar": 15.00958367697042
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 2990,
          "Price, USD": 1.9840743198407431,
          "Price, Lollar": 3.324344829195671
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Beef",
          "price": 2476,
          "Price, USD": 1.6429993364299933,
          "Price, Lollar": 2.7528688284576863
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Chicken",
          "price": 6054,
          "Price, USD": 4.017252820172528,
          "Price, Lollar": 6.730964413361402
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 14426,
          "Price, USD": 9.57266091572661,
          "Price, Lollar": 16.039129935109283
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Pasta",
          "price": 1540,
          "Price, USD": 1.0218978102189782,
          "Price, Lollar": 1.7122043601877373
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Rice",
          "price": 2631,
          "Price, USD": 1.745852687458527,
          "Price, Lollar": 2.925201085489569
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Salt",
          "price": 746,
          "Price, USD": 0.49502322495023227,
          "Price, Lollar": 0.8294184757792544
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Sugar",
          "price": 1894,
          "Price, USD": 1.2568015925680158,
          "Price, Lollar": 2.1057889988282943
        },
        {
          "date": "2020-03-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 5528,
          "Price, USD": 3.66821499668215,
          "Price, Lollar": 6.14614656046611
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Bread",
          "price": 1450,
          "Price, USD": 0.962176509621765,
          "Price, Lollar": 1.9473379922670095
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Cheese",
          "price": 2686,
          "Price, USD": 1.7823490378234903,
          "Price, Lollar": 3.6072757567097846
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 3986,
          "Price, USD": 2.6449900464499003,
          "Price, Lollar": 5.353164991156069
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1444,
          "Price, USD": 0.9581950895819509,
          "Price, Lollar": 1.9392800419541805
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Eggs",
          "price": 8766,
          "Price, USD": 5.816854678168546,
          "Price, Lollar": 11.772665407043176
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Fuel",
          "price": 11000,
          "Price, USD": 7.299270072992701,
          "Price, Lollar": 14.772908906853177
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 3672,
          "Price, USD": 2.4366290643662905,
          "Price, Lollar": 4.931465591451351
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Beef",
          "price": 2453,
          "Price, USD": 1.6277372262773722,
          "Price, Lollar": 3.294358686228258
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Chicken",
          "price": 6077,
          "Price, USD": 4.032514930325149,
          "Price, Lollar": 8.161360675176978
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 14540,
          "Price, USD": 9.648307896483079,
          "Price, Lollar": 19.52709959142229
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Pasta",
          "price": 1667,
          "Price, USD": 1.106171201061712,
          "Price, Lollar": 2.2387671952476587
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Rice",
          "price": 2977,
          "Price, USD": 1.975447909754479,
          "Price, Lollar": 3.998086346881992
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Salt",
          "price": 817,
          "Price, USD": 0.542136695421367,
          "Price, Lollar": 1.0972242342635496
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Sugar",
          "price": 2192,
          "Price, USD": 1.4545454545454546,
          "Price, Lollar": 2.943837847620197
        },
        {
          "date": "2020-04-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 6183,
          "Price, USD": 4.102853351028534,
          "Price, Lollar": 8.303717797370291
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Bread",
          "price": 1493,
          "Price, USD": 0.9907100199071002,
          "Price, Lollar": 2.761102908831998
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Cheese",
          "price": 3203,
          "Price, USD": 2.125414731254147,
          "Price, Lollar": 5.923518162752102
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 4974,
          "Price, USD": 3.300597213005972,
          "Price, Lollar": 9.198744721051813
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1234,
          "Price, USD": 0.8188453881884539,
          "Price, Lollar": 2.282117206630064
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Eggs",
          "price": 8611,
          "Price, USD": 5.714001327140013,
          "Price, Lollar": 15.92488757398013
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Fuel",
          "price": 11500,
          "Price, USD": 7.631055076310551,
          "Price, Lollar": 21.267704924024095
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 5311,
          "Price, USD": 3.524220305242203,
          "Price, Lollar": 9.821980943607999
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Beef",
          "price": 3521,
          "Price, USD": 2.3364299933643,
          "Price, Lollar": 6.511616438042509
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Chicken",
          "price": 6688,
          "Price, USD": 4.437956204379562,
          "Price, Lollar": 12.368557437554188
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 22323,
          "Price, USD": 14.812873258128732,
          "Price, Lollar": 41.28338930599912
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Pasta",
          "price": 2210,
          "Price, USD": 1.4664897146648972,
          "Price, Lollar": 4.087098076703761
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Rice",
          "price": 3847,
          "Price, USD": 2.552753815527538,
          "Price, Lollar": 7.114509638497452
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Salt",
          "price": 1046,
          "Price, USD": 0.6940942269409422,
          "Price, Lollar": 1.934436465263409
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Sugar",
          "price": 2935,
          "Price, USD": 1.9475779694757798,
          "Price, Lollar": 5.427888169740063
        },
        {
          "date": "2020-05-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 7928,
          "Price, USD": 5.26078301260783,
          "Price, Lollar": 14.661770838057656
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Bread",
          "price": 1500,
          "Price, USD": 0.9953550099535501,
          "Price, Lollar": 3.1042923336308466
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Cheese",
          "price": 3605,
          "Price, USD": 2.3921698739216986,
          "Price, Lollar": 7.460649241826133
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 4984,
          "Price, USD": 3.3072329130723293,
          "Price, Lollar": 10.314528660544092
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1274,
          "Price, USD": 0.8453881884538819,
          "Price, Lollar": 2.6365789553637984
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Eggs",
          "price": 8499,
          "Price, USD": 5.639681486396815,
          "Price, Lollar": 17.588920362352376
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Fuel",
          "price": 13500,
          "Price, USD": 8.95819508958195,
          "Price, Lollar": 27.938631002677614
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 5494,
          "Price, USD": 3.6456536164565363,
          "Price, Lollar": 11.369988053978581
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Beef",
          "price": 3603,
          "Price, USD": 2.3908427339084275,
          "Price, Lollar": 7.456510185381293
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Chicken",
          "price": 6817,
          "Price, USD": 4.523556735235568,
          "Price, Lollar": 14.107973892240988
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 22942,
          "Price, USD": 15.223623092236231,
          "Price, Lollar": 47.47911647877259
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Pasta",
          "price": 2208,
          "Price, USD": 1.4651625746516257,
          "Price, Lollar": 4.569518315104606
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Rice",
          "price": 4075,
          "Price, USD": 2.704047777040478,
          "Price, Lollar": 8.4333275063638
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Salt",
          "price": 1084,
          "Price, USD": 0.7193098871930989,
          "Price, Lollar": 2.2433685931038916
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Sugar",
          "price": 2913,
          "Price, USD": 1.9329794293297944,
          "Price, Lollar": 6.028535711911104
        },
        {
          "date": "2020-06-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 9384,
          "Price, USD": 6.226940942269409,
          "Price, Lollar": 19.420452839194574
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Bread",
          "price": 1976,
          "Price, USD": 1.3112143331121433,
          "Price, Lollar": 7.395701281654425
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Cheese",
          "price": 3903,
          "Price, USD": 2.5899137358991373,
          "Price, Lollar": 14.60800713679009
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 6226,
          "Price, USD": 4.131386861313868,
          "Price, Lollar": 23.302447459301842
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1411,
          "Price, USD": 0.9362972793629728,
          "Price, Lollar": 5.281039730978944
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Eggs",
          "price": 13945,
          "Price, USD": 9.253483742534838,
          "Price, Lollar": 52.19284128171608
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Fuel",
          "price": 16200,
          "Price, USD": 10.74983410749834,
          "Price, Lollar": 60.632773665385464
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 5617,
          "Price, USD": 3.727272727272727,
          "Price, Lollar": 21.023104301140133
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Beef",
          "price": 4827,
          "Price, USD": 3.2030524220305243,
          "Price, Lollar": 18.066320894000967
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Chicken",
          "price": 9732,
          "Price, USD": 6.457863304578633,
          "Price, Lollar": 36.42457736490935
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 23113,
          "Price, USD": 15.337093563370935,
          "Price, Lollar": 86.50649985975643
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Pasta",
          "price": 3552,
          "Price, USD": 2.3570006635700067,
          "Price, Lollar": 13.29429704070674
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Rice",
          "price": 3973,
          "Price, USD": 2.6363636363636362,
          "Price, Lollar": 14.87000060324546
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Salt",
          "price": 1716,
          "Price, USD": 1.1386861313868613,
          "Price, Lollar": 6.422582691963053
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Sugar",
          "price": 2845,
          "Price, USD": 1.8878566688785667,
          "Price, Lollar": 10.64816302950751
        },
        {
          "date": "2020-07-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 15141,
          "Price, USD": 10.047113470471135,
          "Price, Lollar": 56.66918679429639
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Bread",
          "price": 1992,
          "Price, USD": 1.3218314532183146,
          "Price, Lollar": 6.1618221359380625
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Cheese",
          "price": 4036,
          "Price, USD": 2.6781685467816856,
          "Price, Lollar": 12.48449505052511
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 6680,
          "Price, USD": 4.432647644326477,
          "Price, Lollar": 20.66313848798507
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1349,
          "Price, USD": 0.8951559389515594,
          "Price, Lollar": 4.17284039225926
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Eggs",
          "price": 15347,
          "Price, USD": 10.183808891838089,
          "Price, Lollar": 47.47263269088426
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Fuel",
          "price": 14700,
          "Price, USD": 9.754479097544792,
          "Price, Lollar": 45.471277810386304
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 5757,
          "Price, USD": 3.8201725282017254,
          "Price, Lollar": 17.808037166965573
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Beef",
          "price": 5075,
          "Price, USD": 3.367617783676178,
          "Price, Lollar": 15.698417339300033
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Chicken",
          "price": 11464,
          "Price, USD": 7.6071665560716655,
          "Price, Lollar": 35.46141012369174
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 22735,
          "Price, USD": 15.08626410086264,
          "Price, Lollar": 70.32581639585936
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Pasta",
          "price": 3532,
          "Price, USD": 2.3437292634372926,
          "Price, Lollar": 10.925479811311865
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Rice",
          "price": 4125,
          "Price, USD": 2.7372262773722627,
          "Price, Lollar": 12.759797344751258
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Salt",
          "price": 1793,
          "Price, USD": 1.1897810218978102,
          "Price, Lollar": 5.5462585791852135
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Sugar",
          "price": 3117,
          "Price, USD": 2.068347710683477,
          "Price, Lollar": 9.641766866324769
        },
        {
          "date": "2020-08-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 15131,
          "Price, USD": 10.040477770404777,
          "Price, Lollar": 46.804483302650006
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Bread",
          "price": 1996,
          "Price, USD": 1.3244857332448574,
          "Price, Lollar": 6.619791999203892
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Cheese",
          "price": 4758,
          "Price, USD": 3.157266091572661,
          "Price, Lollar": 15.7800452566193
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 5686,
          "Price, USD": 3.7730590577305905,
          "Price, Lollar": 18.857784222181028
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 1810,
          "Price, USD": 1.201061712010617,
          "Price, Lollar": 6.002917594468459
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Eggs",
          "price": 16835,
          "Price, USD": 11.171201061712011,
          "Price, Lollar": 55.833766686672114
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Fuel",
          "price": 16200,
          "Price, USD": 10.74983410749834,
          "Price, Lollar": 53.727770735021565
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 6149,
          "Price, USD": 4.08029197080292,
          "Price, Lollar": 20.393337175904172
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Beef",
          "price": 5244,
          "Price, USD": 3.4797611147976113,
          "Price, Lollar": 17.391878378669944
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Chicken",
          "price": 11564,
          "Price, USD": 7.673523556735236,
          "Price, Lollar": 38.35234202344379
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 23260,
          "Price, USD": 15.434638354346383,
          "Price, Lollar": 77.14246588250629
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Pasta",
          "price": 3602,
          "Price, USD": 2.3901791639017915,
          "Price, Lollar": 11.946137665898005
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Rice",
          "price": 4978,
          "Price, USD": 3.3032514930325148,
          "Price, Lollar": 16.50968164931712
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Salt",
          "price": 1876,
          "Price, USD": 1.2448573324485732,
          "Price, Lollar": 6.221808512277805
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Sugar",
          "price": 3560,
          "Price, USD": 2.3623092236230923,
          "Price, Lollar": 11.806843445473875
        },
        {
          "date": "2020-09-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 15170,
          "Price, USD": 10.06635700066357,
          "Price, Lollar": 50.31174580557267
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Bread",
          "price": 1998,
          "Price, USD": 1.3258128732581287,
          "Price, Lollar": 7.060151498272384
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Cheese",
          "price": 5263,
          "Price, USD": 3.4923689449236894,
          "Price, Lollar": 18.59738605375754
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 6215,
          "Price, USD": 4.124087591240876,
          "Price, Lollar": 21.96138216304448
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 2638,
          "Price, USD": 1.7504976775049768,
          "Price, Lollar": 9.321661487708983
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Eggs",
          "price": 18525,
          "Price, USD": 12.292634372926344,
          "Price, Lollar": 65.46011336611407
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Fuel",
          "price": 17800,
          "Price, USD": 11.81154611811546,
          "Price, Lollar": 62.89824658120542
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 6700,
          "Price, USD": 4.44591904445919,
          "Price, Lollar": 23.6751827019144
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Beef",
          "price": 5482,
          "Price, USD": 3.6376907763769077,
          "Price, Lollar": 19.371246503267873
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Chicken",
          "price": 9821,
          "Price, USD": 6.516921035169211,
          "Price, Lollar": 34.703577509776316
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 23602,
          "Price, USD": 15.661579296615793,
          "Price, Lollar": 83.4002480791916
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Pasta",
          "price": 3721,
          "Price, USD": 2.4691439946914397,
          "Price, Lollar": 13.14856042295873
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Rice",
          "price": 4701,
          "Price, USD": 3.119442601194426,
          "Price, Lollar": 16.611497594283524
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Salt",
          "price": 1840,
          "Price, USD": 1.2209688122096882,
          "Price, Lollar": 6.501841219630224
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Sugar",
          "price": 3692,
          "Price, USD": 2.4499004644990046,
          "Price, Lollar": 13.046085751562382
        },
        {
          "date": "2020-10-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 14983,
          "Price, USD": 9.942269409422694,
          "Price, Lollar": 52.9440690183259
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Bread",
          "price": 1998,
          "Price, USD": 1.3258128732581287,
          "Price, Lollar": 6.862203325423625
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Cheese",
          "price": 4912,
          "Price, USD": 3.259455872594559,
          "Price, Lollar": 16.870441809049474
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Chickpeas",
          "price": 5871,
          "Price, USD": 3.895819508958195,
          "Price, Lollar": 20.16416202380486
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Cucumbers",
          "price": 3193,
          "Price, USD": 2.11877903118779,
          "Price, Lollar": 10.96647408312194
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Eggs",
          "price": 18749,
          "Price, USD": 12.441274054412741,
          "Price, Lollar": 64.39411919337716
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Fuel",
          "price": 18200,
          "Price, USD": 12.07697412076974,
          "Price, Lollar": 62.50855882017517
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Red Lentils",
          "price": 6629,
          "Price, USD": 4.398805573988056,
          "Price, Lollar": 22.767540462579188
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Beef",
          "price": 5612,
          "Price, USD": 3.723954877239549,
          "Price, Lollar": 19.274617148286982
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Chicken",
          "price": 14505,
          "Price, USD": 9.62508294625083,
          "Price, Lollar": 49.81794756520004
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Powdered milk",
          "price": 23881,
          "Price, USD": 15.846715328467154,
          "Price, Lollar": 82.020158966187
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Pasta",
          "price": 3372,
          "Price, USD": 2.2375580623755806,
          "Price, Lollar": 11.58125606272696
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Rice",
          "price": 4416,
          "Price, USD": 2.9303251493032514,
          "Price, Lollar": 15.166911854389756
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Salt",
          "price": 1847,
          "Price, USD": 1.225613802256138,
          "Price, Lollar": 6.343588359388106
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Sugar",
          "price": 3608,
          "Price, USD": 2.394160583941606,
          "Price, Lollar": 12.391806605669892
        },
        {
          "date": "2020-11-15T00:00:00",
          "cmname": "Tomato Paste",
          "price": 15346,
          "Price, USD": 10.183145321831454,
          "Price, Lollar": 52.70639250848397
        }
      ],
      "data-38ae4cf486f5687ce474155bc968decd": [
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2018-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2019-12-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-01-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-02-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-03-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-04-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-05-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-06-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-07-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-08-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-09-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-10-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477},
        {"date": "2020-11-15T00:00:00", " ": 87.68347710683477}
      ]
    }
  }
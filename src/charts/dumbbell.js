export default {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "layer": [
      {
        "mark": {"type": "line", "color": "#043919"},
        "encoding": {
          "detail": {"type": "nominal", "field": "Commodity"},
          "x": {"type": "quantitative", "field": "price", "title": "Price, USD"},
          "y": {
            "type": "nominal",
            "field": "Commodity",
            "sort": {"field": "price", "order": "ascending"},
            "title": ""
          }
        }
      },
      {
        "mark": {"type": "point", "filled": true, "opacity": 1, "size": 40},
        "encoding": {
          "color": {
            "type": "nominal",
            "field": "Year",
            "legend": {"title": ""},
            "scale": {"domain": ["2018", "2020"], "range": ["#389eaa", "#0e7534"]}
          },
          "x": {"type": "quantitative", "field": "price"},
          "y": {
            "type": "nominal",
            "field": "Commodity",
            "sort": {"field": "price", "order": "ascending"}
          }
        }
      }
    ],
    "data": {"name": "data-63f295ba10c208cb7d27825b35af9887"},
    "height": 300,
    "title": {
      "text": ["Change in Commodity Prices"],
      "fontSize": 20,
      "subtitle": [" November 2018 to November 2020"],
      "subtitleFontSize": 15
    },
    "width": 300,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    "datasets": {
      "data-63f295ba10c208cb7d27825b35af9887": [
        {
          "Percent Change": 193,
          "price": 2.0307159852909367,
          "Commodity": "Beans",
          "Year": "2018"
        },
        {
          "Percent Change": 35,
          "price": 0.9786141754993151,
          "Commodity": "Bread",
          "Year": "2018"
        },
        {
          "Percent Change": 277,
          "price": 1.0296019900497513,
          "Commodity": "Bulgur",
          "Year": "2018"
        },
        {
          "Percent Change": 119,
          "price": 1.4859590934217801,
          "Commodity": "Cheese",
          "Year": "2018"
        },
        {
          "Percent Change": 246,
          "price": 3.5898085330921155,
          "Commodity": "Eggs",
          "Year": "2018"
        },
        {
          "Percent Change": 195,
          "price": 1.262244333886125,
          "Commodity": "Beef",
          "Year": "2018"
        },
        {
          "Percent Change": 123,
          "price": 7.090308457711442,
          "Commodity": "Powdered milk",
          "Year": "2018"
        },
        {
          "Percent Change": 339,
          "price": 7.072684198057333,
          "Commodity": "Sunflower oil",
          "Year": "2018"
        },
        {
          "Percent Change": 114,
          "price": 1.0449618573797679,
          "Commodity": "Pasta",
          "Year": "2018"
        },
        {
          "Percent Change": 137,
          "price": 1.2380044223327806,
          "Commodity": "Rice",
          "Year": "2018"
        },
        {
          "Percent Change": 218,
          "price": 0.7517689331122167,
          "Commodity": "Sugar",
          "Year": "2018"
        },
        {
          "Percent Change": 134,
          "price": 1.9547026770907368,
          "Commodity": "Canned Tuna",
          "Year": "2018"
        },
        {
          "Percent Change": 240,
          "price": 0.5251520176893311,
          "Commodity": "Cabbage",
          "Year": "2018"
        },
        {
          "Percent Change": 192,
          "price": 0.4196697671064965,
          "Commodity": "Salt",
          "Year": "2018"
        },
        {
          "Percent Change": 347,
          "price": 2.274911158493248,
          "Commodity": "Tomato Paste",
          "Year": "2018"
        },
        {
          "Percent Change": 63,
          "price": 2.3929874437337126,
          "Commodity": "Chickpeas",
          "Year": "2018"
        },
        {
          "Percent Change": 123,
          "price": 0.9513266998341625,
          "Commodity": "Cucumbers",
          "Year": "2018"
        },
        {
          "Percent Change": 159,
          "price": 3.720840243228303,
          "Commodity": "Chicken",
          "Year": "2018"
        },
        {
          "Percent Change": 84,
          "price": 0.9735212824765063,
          "Commodity": "Wheat",
          "Year": "2018"
        },
        {
          "Percent Change": -21,
          "price": 13.001658374792703,
          "Commodity": "Diesel",
          "Year": "2018"
        },
        {
          "Percent Change": 29,
          "price": 9.35323383084577,
          "Commodity": "Fuel",
          "Year": "2018"
        },
        {
          "Percent Change": -5,
          "price": 16.451077943615257,
          "Commodity": "Petrol-gas",
          "Year": "2018"
        },
        {
          "Percent Change": 129,
          "price": 1.7143725815367605,
          "Commodity": "Green Lentils",
          "Year": "2018"
        },
        {
          "Percent Change": 162,
          "price": 1.6755113322277502,
          "Commodity": "Red Lentils",
          "Year": "2018"
        },
        {
          "Percent Change": 193,
          "price": 5.956965174129353,
          "Commodity": "Beans",
          "Year": "2020"
        },
        {
          "Percent Change": 35,
          "price": 1.3258374792703151,
          "Commodity": "Bread",
          "Year": "2020"
        },
        {
          "Percent Change": 277,
          "price": 3.882089552238806,
          "Commodity": "Bulgur",
          "Year": "2020"
        },
        {
          "Percent Change": 119,
          "price": 3.258507462686567,
          "Commodity": "Cheese",
          "Year": "2020"
        },
        {
          "Percent Change": 246,
          "price": 12.437388813508216,
          "Commodity": "Eggs",
          "Year": "2020"
        },
        {
          "Percent Change": 195,
          "price": 3.7231066887783304,
          "Commodity": "Beef",
          "Year": "2020"
        },
        {
          "Percent Change": 123,
          "price": 15.841680486456605,
          "Commodity": "Powdered milk",
          "Year": "2020"
        },
        {
          "Percent Change": 339,
          "price": 31.05181499907868,
          "Commodity": "Sunflower oil",
          "Year": "2020"
        },
        {
          "Percent Change": 114,
          "price": 2.2369063772048845,
          "Commodity": "Pasta",
          "Year": "2020"
        },
        {
          "Percent Change": 137,
          "price": 2.929732290926321,
          "Commodity": "Rice",
          "Year": "2020"
        },
        {
          "Percent Change": 218,
          "price": 2.393456957636062,
          "Commodity": "Sugar",
          "Year": "2020"
        },
        {
          "Percent Change": 134,
          "price": 4.579348869686655,
          "Commodity": "Canned Tuna",
          "Year": "2020"
        },
        {
          "Percent Change": 240,
          "price": 1.7843165126747216,
          "Commodity": "Cabbage",
          "Year": "2020"
        },
        {
          "Percent Change": 192,
          "price": 1.2254726368159206,
          "Commodity": "Salt",
          "Year": "2020"
        },
        {
          "Percent Change": 347,
          "price": 10.179920908279117,
          "Commodity": "Tomato Paste",
          "Year": "2020"
        },
        {
          "Percent Change": 63,
          "price": 3.894844617492249,
          "Commodity": "Chickpeas",
          "Year": "2020"
        },
        {
          "Percent Change": 123,
          "price": 2.118644870883677,
          "Commodity": "Cucumbers",
          "Year": "2020"
        },
        {
          "Percent Change": 159,
          "price": 9.622222222222222,
          "Commodity": "Chicken",
          "Year": "2020"
        },
        {
          "Percent Change": 84,
          "price": 1.7913211719181867,
          "Commodity": "Wheat",
          "Year": "2020"
        },
        {
          "Percent Change": -21,
          "price": 10.21558872305141,
          "Commodity": "Diesel",
          "Year": "2020"
        },
        {
          "Percent Change": 29,
          "price": 12.072968490878939,
          "Commodity": "Fuel",
          "Year": "2020"
        },
        {
          "Percent Change": -5,
          "price": 15.655058043117744,
          "Commodity": "Petrol-gas",
          "Year": "2020"
        },
        {
          "Percent Change": 129,
          "price": 3.9173852957435047,
          "Commodity": "Green Lentils",
          "Year": "2020"
        },
        {
          "Percent Change": 162,
          "price": 4.397375441632418,
          "Commodity": "Red Lentils",
          "Year": "2020"
        }
      ]
    }
  }
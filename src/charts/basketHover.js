// Hover layer for the stacked basket-of-goods area charts. An area mark holds
// one datum per commodity band, so hovering it can't report a given month's
// price. Instead, an invisible point sits in the middle of each band for every
// month; hovering snaps to the nearest one, shows its tooltip, and reveals it
// as a small marker.

// The unit WFP reports each price in; the basket holds one of each
const quantities = {
  "Beef": "200 g, canned",
  "Bread": "1 kg, pita",
  "Cheese": "160 g, picon",
  "Chicken": "1 kg, whole frozen",
  "Chickpeas": "1 kg",
  "Cucumbers": "1 kg",
  "Eggs": "30 eggs",
  "Fuel": "10 kg cooking gas cylinder",
  "Pasta": "1 kg, spaghetti",
  "Powdered milk": "900 g",
  "Red Lentils": "1 kg",
  "Rice": "1 kg, imported Egyptian",
  "Salt": "1 kg",
  "Sugar": "1 kg, white",
  "Tomato Paste": "1.3 kg",
};

export default function basketHover(dataName, priceField, priceTitle, priceFormat) {
  return {
    "data": {"name": dataName},
    "transform": [
      {"calculate": `${JSON.stringify(quantities)}[datum.cmname]`, "as": "quantity"},
      // Same order as the area layer's default stack: first commodity on top
      {
        "stack": priceField,
        "groupby": ["date"],
        "sort": [{"field": "cmname", "order": "descending"}],
        "as": ["bandStart", "bandEnd"]
      },
      {"calculate": "(datum.bandStart + datum.bandEnd) / 2", "as": "bandMiddle"}
    ],
    "params": [{
      "name": "hover",
      "select": {"type": "point", "on": "mouseover", "clear": "mouseout", "nearest": true}
    }],
    "mark": {"type": "point", "filled": true, "size": 45, "fill": "#ffffff", "stroke": "#333333", "strokeWidth": 1.5},
    "encoding": {
      "x": {"type": "ordinal", "field": "date", "timeUnit": "yearmonth", "title": ""},
      "y": {"type": "quantitative", "field": "bandMiddle", "title": ""},
      "opacity": {"condition": {"param": "hover", "empty": false, "value": 1}, "value": 0},
      "tooltip": [
        {"type": "nominal", "field": "cmname", "title": "Commodity"},
        {"type": "temporal", "field": "date", "timeUnit": "yearmonth", "title": "Month"},
        {"type": "nominal", "field": "quantity", "title": "Quantity"},
        {"type": "quantitative", "field": priceField, "title": priceTitle, "format": priceFormat}
      ]
    }
  }
}

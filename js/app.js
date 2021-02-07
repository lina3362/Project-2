
// create the function to get the necessary data
function getInfo(name) {

  // read the json file to get data
  d3.json("continent-110m.json").then((data)=> {
      // get the metadata info for the demographic panel
      var properties = data.properties;

      console.log(properties)

      // filter meta data info by id
      var result = properties.filter(property => property.name.toString() === name)[0];

      // select demographic panel to put data
      var CountryInfo = d3.select("#continent-110m-properties");
      
      // empty the demographic info panel each time before getting new id info
      CountryInfo.html("");

      // grab the necessary demographic data data for the id and append the info to the panel
      Object.entries(result).forEach((key) => {   
          CountryInfo.append("h5").text(key[0].toLowerCase() + ": " + key[1] + "\n");    
      });
  });
}

// create the function for the change event
function optionChanged(name) {
  getPlot(name);
  getInfo(name);
}

// create the function for the initial data rendering
function init() {
  // select dropdown menu 
  var dropdown = d3.select("#Dataset");

  // read the data 
  d3.json("continent-110m.json").then((data)=> {
      console.log(data)

      // get the id data to the dropdwown menu
      data.names.forEach(function(name) {
          dropdown.append("option").text(name).property("value");
      });

      // call the functions to display the data and the plots to the page
      getPlot(data.names[0]);
      getInfo(data.names[0]);
  });
}

init();

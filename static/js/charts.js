function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
};

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultsArray = samples.filter(data => data.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var results = resultsArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = results.otu_ids;
    var otuLabels = results.otu_labels;
    var sampleValues = results.sample_values;
    console.log(otuLabels);
    console.log(sampleValues);
    
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIDs.slice(0,10).map(id => "OTU " + id).reverse();
    
    console.log(yticks);
   


    // 8. Create the trace for the bar chart. change to {}
    var barData = [{
      x: sampleValues.slice(0,10).reverse(),
      text: otuLabels.slice(0,10).reverse(),
      type: "bar"
     

    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: 'Top 10 Cultures of Bacteria Found',
      yaxis: {
        tickmode: 'array',
        tickvals: [0,1,2,3,4,5,6,7,8,9,10],
        ticktext: yticks
      },
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', barData, barLayout);
  
  // Bar and Bubble charts

// Create the buildCharts function.
//function buildCharts(sample) {
// Use d3.json to load and retrieve the samples.json file 
  //d3.json("samples.json").then((data) => {


    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    //Plotly.newPlot('bar', [barData], barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuIDs,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIDs
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Cultures of Bacteria per Sample',
      xaxis: { title: 'OTU ID' },
      showlegend: false,
      hovermode: 'closest',
      xaxis: {title: 'OTU ID', automargin: true},
      yaxis: {automargin: true}
    };
    console.log(bubbleLayout);
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  
  
  // Create the buildChart function.
  //function buildCharts(sample) {
    // Use d3.json to load the samples.json file 
    //d3.json("samples.json").then((data) => {
      //console.log(data);

      // Create a variable that holds the samples array. 
      //var samples = data.samples;
      // Create a variable that filters the samples for the object with the desired sample number.
      //var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      //var metadata = data.metadata;

      var metadataArray = data.metadata.filter(data => data.id == sample);
      // Create a variable that holds the first sample in the array.
      //var resultmetaData = metadataArray[0];
      //var result = resultArray[0];
      // 2. Create a variable that holds the first sample in the metadata array.
      var resultmetaData = metadataArray[0];

      // Create variables that hold the otu_ids, otu_labels, and sample_values.


      // 3. Create a variable that holds the washing frequency.
      var washingFrequency = parseInt(resultmetaData.washingFrequency);
      // Create the yticks for the bar chart.

      // Use Plotly to plot the bar data and layout.
      //Plotly.newPlot();

      // Use Plotly to plot the bubble data and layout.
      //Plotly.newPlot();


      // 4. Create the trace for the gauge chart.
      var gaugeData = [{
        domain: {x: [0,1], y:[0,1]},
        value: washingFrequency,
        title: { text: 'Belly Button Washing Frequency' },
        type: 'indicator',
        mode: 'gauge+number',
        gauge: {
          axis: { range: [0, 10], 
          tickmode: 'array',
          tickvals: [0,2,4,6,8,10],
          ticktext: [0,2,4,6,8,10]},
          bar: {color: 'black'},
          steps: [
            { range: [0, 2], color: 'maroon' },
            { range: [2, 4], color: 'red' },
            { range: [4, 6], color: 'tomato' },
            { range: [6, 8], color: 'lightsalmon' },
            { range: [8, 10], color: 'peachpuff' }
          ]
        }
      }];

      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        autosize: true,
        annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          xanchor: 'center',
          y: 0,
          yanchor: 'center',
          text: "The gauge displays your belly button weekly washing frequency",
          showarrow: false
        }]
      };

      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
}
    

// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const setOfresults = metadata.filter(sampleObj => sampleObj.id == sample);
    const results = setOfresults[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(results).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const setOfresults = samples.filter(sampleObj => sampleObj.id == sample);
    const results = setOfresults[0];

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = results.otu_ids;
    const otu_labels = results.otu_labels;
    const sample_values = results.sample_values;

    // Build a Bubble Chart
    const bub = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    }];
    const bubFormat = {
      title: {
        text: "Bacteria Cultures Per Sample"
      },
      margin: {t: 50, l: 50},
      hovermode: "closest",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Number of Bacteria"},
      autosize: true
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bub, bubFormat);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    const Bar = [{
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    const BarFormat = {
      title: {
        text: "Top 10 Bacteria Cultures Found"
      },
      margin: {t:50, l:50},
      xaxis: {
        title: "Number of Bacteria",
        automargin: true
      },
      yaxis: {
        automargin: true
      }

    };
    // Render the Bar Chart
    Plotly.newPlot("bar", Bar, BarFormat)
  });
}

// Function to run on page load
function init() {
  // Use d3 to select the dropdown with id of `#selDataset`
  const selector = d3.select("#selDataset")
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const Names = data.names;
    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    Names.forEach((sample) => {
      selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });
    // Get the first sample from the list
    const first = Names[0];
    // Build charts and metadata panel with the first sample
    buildCharts(first);
    buildMetadata(first);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

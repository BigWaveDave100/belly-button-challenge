# belly-button-challenge

### Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

![alt text](<Image 10-27-24 at 2.27 PM.png>)

Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

![alt text](<Screen Shot 2024-10-27 at 2.28.40 PM.png>)

Display the sample's metadata, i.e., an individual's demographic information.

Loop through each key-value pair from the metadata JSON object and create a text string.

Append an html tag with that text to the #sample-metadata panel.


Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![alt text](<Image 10-27-24 at 2.29 PM.png>)

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
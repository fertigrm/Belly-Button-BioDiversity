const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// retrieving the first element from array
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// retrieving the full name of result
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// retrieving data from a nested property
// use . notation twice .location .latitude
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
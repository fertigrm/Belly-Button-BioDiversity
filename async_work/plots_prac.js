//Plotly.newPlot('plotArea', [{x:[50,100,150], y:[100,150,200]}]);

// creating a bar chart
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: 'Luncheon Survey',
    xaxis: {title: 'Food Option'},
    yaxis: {title: 'Number of Respondents'}
 };

// 12.1.3 skill drill

// for pie chart instead of 'x' and 'y' we use 'labels' and 'values'
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

// skill drill creating scatter plot

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];
  
  Plotly.newPlot('plotArea', data);

// using the .map() method
// doubling the numbers in an array
//var numbers = [1,2,3,4,5];
//var doubled = numbers.map(function(num){
    //return num * 2;
//});
//console.log(doubled)

// 12.2.1 skill drill
var numbers = [0,2,4,6,8];
var nums = numbers.map(function(five){
    return five + 5;
});
console.log(nums)

// using .map() to extract specific properties from each object in an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// returning population instead of city
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
});
console.log(cityNames);

//  12.2.1 skill drill
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

//var animalsS = words.filter(function(sS){
//    return ;
//});
// using .sort()
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

// using .slice() first arguement is the position of where to begin the slection, next is the 
// position of the array where the slicing stops
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2)

// slice skill drill
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3 );

// slicing to the end of an array , omit the second arguement displays 'orangutan', 'salamander'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );


// sort cities in descending order of population growth
// select only the top five cities in terms of growth
// create separate arrays for the city names and their population growths
// use Plotly to create a bar chart with these arrays
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,7);

var topFiveCityNames = cityGrowths.map(city=> city.City);
// using parseInt to change strings to intergers because in the data the numbers are strings
var topFiveGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x:topFiveCityNames,
    y:topFiveGrowths,
    type:'bar'
};

var data =[trace];
var layout = {
    title: 'Most Rapidly Growing Cities',
    xaxis: {title: 'City'},
    yaxis: {title: 'Population Growth, 2016-2017'}
};
Plotly.newPlot('bar-plot', data, layout);
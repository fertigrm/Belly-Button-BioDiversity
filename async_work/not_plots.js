// retrieving data using d3
let data = 'samples.json'
d3.json("samples.json").then(function(data){
    console.log("hello");
});
// ext ract wfreq from the array and put into new array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});
// sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// use .filter() to delete null values from the sorted wfreq array

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// use object.enteries() to print each key-value pair inside the array
//researcher1 = {
 //   name: 'Roza',
//    age: 34,
 //   hobby: 'Hiking'
//};
// console.log(Object.entries(researcher1));
// print each trait and corresponding property
//researcher1 = [['name', 'Roza'], ['age', 34], ['hobby','Hiking']];
//
// using forEach
//
// researcher1.forEach(([first, second]) => console.log(first + ": " + second));
//
// d3.json("samples.json").then(function(data){
//    firstPerson = data.metadata[0];
//    Object.entries(firstPerson).forEach(([key, value]) =>
//      {console.log(key + ': ' + value);});
// });


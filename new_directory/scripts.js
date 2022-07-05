// creates and event listener

d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

// will print menu
// console.log(d3.selectAll("#menu").node().id)

// use d3 library to create an event lisener for a dropdown menu
// dropdown menu should contain the following names:
// Mickey, Minnie, Donald, Goofy. 
// when selected from the dropdown menu the characters name should be 
// printd to the browser console
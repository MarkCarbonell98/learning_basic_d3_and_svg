var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

d3.select('#quotes')
    .style('list-style', 'none')
  .selectAll('li')
  .data(quotes)
  .enter()
  .append('li')
    .text((d, index) => d.quote + " and the index is: " + index + d.movie + ' ' + d.rating + d.year)
  
  d3.select('#quotes')
    //the html elements must be selected first in order to be entered 
    .selectAll()
    .data(quotes)
    .enter()
    .append('h3')
      .text(d => d.movie)

d3.select('#quotes').selectAll('li').data(quotes).enter()

console.log( d3.select('#quotes').selectAll('li').data(quotes).enter());
//returns a d3 selection with an array
console.log(d3.select('#quotes').selectAll('li').data(quotes));
//contains enter() and exit() and groups() AS ARRAYS and and parents as an array with an html selection inside of it

//data(quotes) => enter() => append('li')

//this data can be accesed through the first parameter of the d3 function callback, the second remains the index of the current element


  
  // .append('span')
    // .style('background-color', 'lightgreen')
  // .text(d => d.movie)


const colors = {
  "G": "red", 
  "PG": "lightblue", 
  "PG-13": "purple", 
  "R": "gray"
}

d3.selectAll('li')
  .text(d => d.quote)
    .style('background-color', d => {
      return colors[d.rating];
    })

    //removed element from quotes
// quotes.pop();
// console.log('TCL: quotes.pop();', quotes.pop());

//the element is still being showns in quotes
d3.selectAll('li').data(quotes)
console.log('TCL: d3.selectAll(li).data(quotes)', d3.selectAll('li').data(quotes));

//returns a selection of all elements that do not appear in the enter() method to the exit() method for easier access
console.log('TCL: d3.selectAll(li).data(quotes).exit()', d3.selectAll('li').data(quotes).exit());

//removes all the elements of the exit() array 
// console.log('TCL: d3.selectAll(li).data(quotes).exit().remove()', d3.selectAll('li').data(quotes).exit().remove());

// selects all the elements 
// d3.selectAll('li')
// binds these elements in index order to the elements returned by the selection
// .data(quotes)
//returns the elements in the exit selection of the data returned by quotes (also the quotes he could not order to the enter() method)
// .exit()
//removes all the elements of the selection
// .remove()

const filteredElements = quotes.filter(c => c.rating !== 'R');
console.log('TCL: filteredElements', filteredElements);

//the data in the exit selection is correct but d3 is still rendering an R element because no key function is provided by data
// d3.selectAll('li')
//     .data(filteredElements)
//     .exit()
//     .remove()
    
    console.log(d3.selectAll('li')
    .data(filteredElements));
    
    //the callback function tells d3 to match elements depending on their quote content. If the content of two quotes match d3 will render the data of the corresponding pair as one. as the elements in the exit selection dont have the .quote then they are filtered out of the array and not rendered in the dom
  d3.selectAll('li')
    .data(filteredElements, function(element) {
      console.log(element);
      return element.quote;
    })
    .exit()
    .remove();

d3.select('#second-quotes')
  .selectAll('p')
    .data(quotes)
    .enter()
    .append('p')
      .text(d => d.rating);

d3.selectAll('p')
  .data(filteredElements, movie => movie.quote)
  .exit()
  .remove()

  //groups parents elements and exit are the keys



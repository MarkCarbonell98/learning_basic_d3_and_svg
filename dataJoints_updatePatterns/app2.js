let quotes = [
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

let newQuotes = [
    {
        quote: "Houston, we have a problem.",
        movie: "Apollo 13",
        year: 1995,
        rating: "PG-13"
    }, {
        quote: "Gentlemen, you can't fight in here! This is the war room!",
        movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        year: 1964,
        rating: "PG"
    }
];

const colors = {
    "G": "#3cff00",
    "PG": "#f9ff00",
    "PG-13": "#ff9000",
    "R": "#ff0000"
};

d3.select('#quotes')
    .style('list-style', 'none')
    .selectAll('li')
        .data(quotes)
        .enter()
        .append('li')
            .text(d => d.quote + ' ' + d.movie + ' ' + d.year) 
            .style('padding', '2em')
            //binding the li to the colors of the colors object
            .style('background-color', d => colors[d.rating])
            .style('margin', "20px")
            .style('border-radius', '50%')

const rankedMovies = quotes.filter(movie => {
    return movie.rating !== "R";
});

console.log('TCL: rankedMovies', rankedMovies);

d3.select('.remove-quote').on('click', () => {
    d3.selectAll('li')
        .data(rankedMovies, d => d.quote)
        .exit()
        .remove()
})
// d3.selectAll('li')
//     .data(rankedMovies, d => d.quote)
//     .exit()
//     .remove();

//general update pattern 
let button = d3.select('.add-quote').on('click', () => {
    let listItems = d3.select('#second-quotes')
        .style('list-style', 'none')
        .selectAll('li')
        .data(newQuotes, d => d.quote);

        listItems
        .enter()
        .append('li')
        .text(d => d.quote + ' ' + d.movie + ' ' + d.year) 
            .style('padding', '2em')
            //binding the li to the colors of the colors object
            .style('background-color', d => colors[d.rating])
            .style('margin', "20px")
            .style('border-radius', '50%')
        // use .merge to merge selections together
        .merge(listItems)
            .style('color', 'purple')
        button.remove();
});

//update selection === matched elements 

//data === nodes, p tags elements on the page

//exit happens only when there are more elements than data

// enter elements === only data
// exit === overload of elements on data
// update === matched elements with data
// merge === merged elements with old selection

// 1 update and store selection in variable
// 2 remove elements from exit()
// 3 update the new selection without removed elements
// 4 merge the selection with the old one






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
    },
    {
      quote: "Run Forest, run!",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    },
    {
      quote: "Hasta la vista, baby",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    },
    {
      quote: "Suck my unit!",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    },
    {
      quote: "I could do this all day",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    },
  ];

// d3.select('#quotes')
//   .style('list-style', 'none')
//   .selectAll('li')
//   //selects all the 
//   .data(quotes)
//   .enter()
//   .append('li')
//     .text((d,i) => {
//         return `Movie title: ${d.movie} Movie year: ${d.year} \n Movie rating: ${d.rating} \n Favorite Quote: ${d.quote}`;
//     })
//     .style('background-color', () => {
//         return `rgba(${(Math.random() * 255) +1}, ${(Math.random() * 255) +1}, ${(Math.random() * 255) +1}, ${(Math.random() + 0.1).toFixed(2)})`;
//     })
//     .style('font-size', () => {
//         return Math.random() * 60 + 'px';
//     })
//     .style('color', () => {
//         return `rgba(${(Math.random() * 255) +1}, ${(Math.random() * 255) +1}, ${(Math.random() * 255) +1}, ${(Math.random() + 0.1).toFixed(2)})`;
//     })


// d3.select('#quotes')
//   .style('list-styling', 'none')
//   .selectAll('li')
//   .data(quotes)
//   .enter()
//   .append('li')
//     .text(d => 'year: ' + d.year)

// console.log(
//     d3.select('#quotes')
//         .style('list-styling', 'none')
//         .selectAll('li')
//         .data(quotes).enter().append('li').text(d => d.quote)
// )

d3.select('#quotes')
  .style('list-style', 'none')
  .selectAll('li')
  .data('#quotes')
  .enter()
  append('li')
    .text(d => ` ${d.quote} - ${d.movie} - (${d.year})`)
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', d => d.quote.length < 25 ? '2em' : '1em');

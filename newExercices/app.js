//add and remove elements from the DOM
d3.select('h1').on("click", function() {
    console.log('the event listener was triggered');
}) 

//remove event listener
d3.select('h1').on("click", null);

//selecting the container
d3.select('#new-note').on("submit", function() {
    //access the event object
    d3.event.preventDefault();
    let input = d3.select("input");

    //selecting the notes div
    d3.select('#notes')
        // appending new p tag
        .append('p')
        // adding the note class to it 
        .classed('note', true)
        //getting the value property of the input element
        .text(input.property("value"));

    input.property("value", '');

    d3.select('.preview')
        .classed('show', true);
})

d3.select('.remove').on("click", () => {
    d3.event.preventDefault();
    d3.selectAll('p') 
        .remove();
});

d3.select('.lucky').on('click', function() {
    d3.event.preventDefault();
    d3.selectAll('p:not(.preview)')
        .style('font-size', function() {
            return Math.random() * 40 + 'px';
        })
        .style('background-color', function() {
            return `rgba(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random()})`;
        })
        .style('border-color', function() {
            return `rgba(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random()})`;
        })
});

d3.select('input').on('keypress', function() {
    d3.select('.preview')
        .classed('show', false)
        .classed('note', true)
        .text(d3.select('input').property('value'));
})
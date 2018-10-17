// // returns the d3 object
// console.log(d3);
// // returns the d3 version
// console.log(d3.version);
// //returns the select object with the first matched elements 
// console.log(d3.select('#page-title'));
// // returns a selection object with the _groups and _parents properties, both arrays of selected elements
// console.log(d3.selectAll("li"));
// //returns a node list of the selected elements
// console.log(d3.selectAll('li')._groups[0]);
// //returns an array with the selected elements
// console.log(d3.selectAll('li').nodes());
// // returns only one selected element as html
// console.log(d3.selectAll('li').node());

// d3.select('#page-title').style("background-color", "#935").attr("class", "new-class").text('d3 is reaaally coool');
// // style attr text and html work as getter if no second arguments is supplied
// console.log(d3.select('#page-title').style('background-color'))

// // selections and callbacks
// d3.selectAll('li').style('font-size', (e, indexOfCurrent) =>  {
//     return Math.random() * 50 + 'px';
// })

// d3.selectAll('li').style('background-color', (e, i) => {
//     return i % 2 == 0 ? '#fff341' : '#7ff351';
// })

// d3.select('.outer')
//         .style('color','purple')
//     .select('div')
//         .style('font-size', '30px')
//         .style('background-color', 'orangered')
//     .select('div')
//         .style('border', '8px solid #f2344f');

// //adds event listener
// d3.select('h1').on('click', function() {
//     console.log('event listeners are sweet!');
// })

// //removes event listener
// d3.select('h1').on('click', null);

// d3.select('#new-note').on('submit', (e,i) => {
//     //cant access the event object from here bro
//     d3.event.preventDefault();
//     let input = d3.select('input');
//     d3.select('#notes').append('p')
//         .classed('note', true)
//         .text(input.property('value'));
//     input.property('value', '');
// });

// //remove elements from the dom
// // d3.selectAll('p').remove();
// console.log(d3.select('p').text('new text'));
d3.select('.red').on('click', () => {
    d3.selectAll('.note').remove();
});

d3.select('.green').on('click', () => {
    d3.selectAll('.note')
        .style('font-size', () => {
            return Math.random() * 100 + 'px';
        })
})
let input = d3.select('input');
let preview = d3.select('.preview');

d3.select('#new-note').on('submit', () => {
    d3.event.preventDefault();
    if(input.property('value') !== '') {
        d3.select('#notes')
            .append('p')
            .classed('note', true)
            .text(input.property('value'));
        input.property('value', '');
        setPreview('');
    }
})

input.on('input', () => {
    let note = d3.event.target.value;
    setPreview(note);
});

const setPreview = (val) => {
    preview.text(val)
        .classed('hide', val === "");
}
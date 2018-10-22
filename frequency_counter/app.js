d3.select('#reset')
    .on("click", () => {
        d3.selectAll('.letter')
            .remove();
        
        d3.select('#phrase')
            .text('');

        d3.select('#count')
            .text("");
    })


d3.select('form') 
    .on('submit', () => {
        d3.select('.analysis').classed('noshow', false)
        d3.event.preventDefault();
        let input = d3.select('input');
        let text = input.property('value');

        const letters = d3.select('#letters')
                            .selectAll('.letter')
                            .data(counter(text), d => d.character)
            // all functions return the data passed here as the first param 
            letters.classed("new", false)
                .exit()
                .remove()

            letters
            .enter()
            .append('div')
                .classed('letter', true)
                .classed('new', true)
            .merge(letters)
                .style('width', '20px')
                .style('line-height', '20px')
                .style('height', d => {
                    return d.count * 20 + 'px';
                })
                .text(d => {
                    return d.character;
                })
        
        d3.select('#phrase')
            .text("Analysis of: " + text);

        d3.select('#count')
            .text("New characters: " + letters.enter().nodes().length);
        
        input.property('value', '');
    })

const counter = str => {
    let sorted = str.split('').sort();
    let data = [];
    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i];
        let last = data[data.length - 1];
        last && last.character == sorted[i] ? last.count++ : data.push({ character: sorted[i], count: 1 });

    }
    return data;
}

console.log(counter('marcosesmaricooo'));


d3.select('form') 
    .on('submit', () => {
        d3.select('.analysis').classed('noshow', false)
        d3.event.preventDefault();
        let input = d3.select('input');
        let text = input.property('value');

        d3.select('#letters')
            .selectAll('.letter')
            .data(counter(text))
            // all functions return the data passed here as the first param 
            .enter()
            .append('div')
                .classed('letter', true)
                .style('width', '20px')
                .style('line-height', '20px')
                .style('height', d => {
                    return d.counts * 20 + 'px';
                })
                .text(d => {
                    return d.characters;
                })
        
        d3.select('analysis')
            .select('span')
                .text(text);
        
        input.property('value', '');
    })

const counter = str => {
    let data = [];
    str.split('').sort().reduce((acc, c) => {
            acc[c] = (acc[c]++ || 0) + 1;
            if(c != ' ') {
                data.push({characters : c, counts: acc[c]});
            }
            return acc;
    }, {})
    return data;
}

console.log(counter('marcos es maricooo'));


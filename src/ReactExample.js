import React from 'react';

function ReactExample(props){
    const {x, y, title} = props
    return (
    <div>
        {title}
        <p>{x} {y}</p>
    </div>
    )
} 

export default ReactExample;
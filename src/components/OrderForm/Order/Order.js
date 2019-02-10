import React from 'react';


function Order(props) {
    return <div className="Order">
        <p>{props.label}  {props.info.count} x {props.info.total} KGS
            <img alt="Delete" onClick={() =>props.sub(props.name)} className='del' src= 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fduo-toolbar-signs%2F512%2Ferase-512.png&f=1'>

            </img>
        </p>
    </div>
}



export default Order;
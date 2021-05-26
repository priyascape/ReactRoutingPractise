import React from 'react';

const Num = (props) => {
    return (
        <div>
            <h1 className="mt-5">The number is: {props.param} </h1>
        </div>
    );
};


export default Num;
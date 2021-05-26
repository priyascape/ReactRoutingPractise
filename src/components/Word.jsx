import React from 'react';

const Word = (props) => {
    return (
        <div>
            {!isNaN(props.param)? <h1 className="mt-5" style= {{backgroundColor: props.bgColor, color: props.textColor}}>The number is: {props.param}</h1> :
            <h1 className="mt-5" style= {{backgroundColor: props.bgColor, color: props.textColor}}>The word is: {props.param}</h1>}
        </div>
    );
};

export default Word;
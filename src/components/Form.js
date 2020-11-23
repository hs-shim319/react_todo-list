import React from 'react';
import './Form.css';

const Form = ({value, onChange, onKeyPress, onCreate, color}) => {
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate} style={{background:color}}>+</div>
        </div>
    )
}

export default Form;
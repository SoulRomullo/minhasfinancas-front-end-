import React from 'react';

function FromGroup(props){
    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
      </div>
    )
}

export default FromGroup;
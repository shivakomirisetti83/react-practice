import React from 'react';

const FullName = (props) => {
    return (
        <div className="name">{props.firstName} {props.lastName}</div>
    )
}

export default FullName;
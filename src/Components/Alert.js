import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        const lowerCased = word.toLocaleLowerCase();
        return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
    };
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role="alert" style={{ marginBottom: "0px" }}>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

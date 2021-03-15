import React from "react";

function Button(props) {
    return (
        <div className="col-3 d-inline">
            <div className="btn btn-success" onClick={props.changeButtonText}>{props.text}</div>
        </div>
    );
    }
import React from 'react';

function BreakLength(props) {
    function decreaseBreak() {
        if (props.breakLength === 1) {
            return;
        }

        props.decreaseBreak();
    }

    function increaseBreak() {
        if (props.breakLength === 60) {
            return;
        }

        props.increaseBreak();
    }

    return (
        <section>
            <h4>Set Your Break Length</h4>
            <section className="interval-container-inner">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseBreak}>Down</button>
                <p className="interval-length">{props.breakLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseBreak}>Up</button>
            </section>
        </section>
    )
}

export default BreakLength;
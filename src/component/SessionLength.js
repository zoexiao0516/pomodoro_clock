import React from 'react';

function SessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }

        props.decreaseSession();
    }

    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }

        props.increaseSession();
    }

    return (
        <section>
            <h4>Set Your {props.sessionName} Length</h4>
            <section className="interval-container-inner">
                <button style={{backgroundColor: props.buttonColor}} disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button style={{backgroundColor: props.buttonColor}} disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>Up</button>
            </section>
        </section>
    )
}

export default SessionLength;
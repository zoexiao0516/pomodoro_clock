import React from 'react';

// Timer is going to be a class component b/c we need to keep state of 
// whether the timer is playing or if it's stopped
class Timer extends React.Component {
    constructor() {
        super();
        
        this.state = {
          isSession: true,
          timerSecond: 0,
          intervalId: 0
        };

        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
      }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);  // update every second
        this.props.onPlayStopTimer(true)
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    this.setState({
                        isSession: !this.state.isSession
                    });
                    this.props.toggleInterval(this.state.isSession)

                    // if (this.state.isSession) {
                    //     this.setState({
                    //         isSession: false
                    //     });
                    //     this.props.toggleInterval(this.state.isSession)
                    // } else{
                    //     this.setState({
                    //         isSession: true
                    //     });
                    //     this.props.toggleInterval(this.state.isSession)
                    // }
                } else{
                    this.props.decreaseTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false)
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }
      
    render() {
    return(
        <section>
            <section className="timer-container">
                <h4>{this.state.isSession === true ? "In a Session" : "On a Break"}</h4>
                <span className="timer">{this.props.timerMinute}</span>
                <span className="timer">:</span>
                <span className="timer">{this.state.timerSecond === 0 
                ? "00" 
                : this.state.timerSecond < 10 
                ? "0" + this.state.timerSecond :
                this.state.timerSecond}</span>
            </section>
            <section className="timer-action">
            <button onClick={this.playTimer} style={{backgroundColor: this.props.buttonColor}}>Play</button>
            <button onClick={this.stopTimer} style={{backgroundColor: this.props.buttonColor}}>Stop</button>
            <button onClick={this.resetTimer} style={{backgroundColor: this.props.buttonColor}}>Reset</button>
            </section>
        </section>
    );
    }
}

export default Timer;
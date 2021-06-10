import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import SessionLength from './SessionLength';
import Timer from './Timer';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles.js';
import { useTheme } from '../theme/useTheme';


class App extends React.Component {
  constructor() {
    super();

    // lift the state up and update the states here in the parent component
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
      // buttonColor: "#ff8f69"
    }

    // bind functions
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onDecreaseTimerMinute = this.onDecreaseTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this)
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.timerMinute + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onDecreaseTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }


  render() {
    return(
      <main>
        <h2>Pomodoro Clock</h2>
        
        <div className="setting-link">
        <Link to='/theming'>Theming</Link></div>
        
        <section className='interval-container-outer'>
          <SessionLength sessionLength={this.state.breakLength}
            increaseSession={this.onIncreaseBreakLength}
            decreaseSession={this.onDecreaseBreakLength}
            isPlay={this.state.isPlay}
            buttonColor={this.state.buttonColor}
            />
          
          <SessionLength sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
            isPlay={this.state.isPlay}
            // buttonColor={this.state.buttonColor}
            />
        </section>
        
        <Timer timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          decreaseTimerMinute={this.onDecreaseTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
          // buttonColor={this.state.buttonColor}
          />
      
      </main>
    );
  }
}

// export default App;

function ThemeChanger() {
  // 3: Get the selected theme, font list, etc.
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  // 5: Render if the theme is loaded.
  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <App />
      </ThemeProvider>
    }
    </>
  );
}

export default ThemeChanger;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Theming.css';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles.js';
import { useTheme } from '../theme/useTheme';
import ThemeSelector from '../ThemeSelector';


// class ThemeChanger extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'orange',
//             hexCode: "#ff8f69"
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         this.setState(() => {
//             return {
//                 hexCode: this.getHexCode[this.state.value]
//             }
//         })
//         // alert('You selected color: ' + this.state.value + " and hexcode: " + this.getHexCode[this.state.value]);
//         event.preventDefault();
//     }

//     getHexCode = {
//         violet: "#7852A9",
//         yellow: "#FCF3A6",
//         orange: "#ff8f69",
//         magenta: "#FF5CFF"
//     }

//     ThemeContext = React.createContext(
//         this.getHexCode.orange // default value
//     );

//     render() {
//         return (
//             <main>
//                 <h4>Adjust the color theme</h4>

//                 <div className="home-link"><Link buttonColor={this.state.hexCode} to='/'>Go home</Link></div>

//                 <form onSubmit={this.handleSubmit}>

//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="violet">Violet</option>
//                         <option value="yellow">Yellow</option>
//                         <option value="orange">Orange</option>
//                         <option value="magenta">Magenta</option>
//                     </select>

//                     <input type="submit" value="Select" />
//                 </form>

//             </main>
//         );
//     }
// }

// export default ThemeChanger;

// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

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
        <Container style={{fontFamily: selectedTheme.font}}>
          <div className="home-link"><Link to='/'>Go home</Link></div>
          <ThemeSelector setter={ setSelectedTheme } />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default ThemeChanger;
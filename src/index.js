import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './component/App';
import Theming from './component/Theming';
import reportWebVitals from './reportWebVitals';
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
  setToLS('all-themes', themes.default);
  return(
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/theming" component={Theming}/>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Router>
//     <div>
//       <Route exact path="/" component={App}/>
//       <Route path="/setting" component={Setting}/>
//     </div>
//   </Router>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

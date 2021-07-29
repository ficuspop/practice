import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import VRMpage from './pages/VRMpage';
import App from './pages/App';

// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: '30px',
//   // you can also just use 'scale'
//   transition: transitions.SCALE
// }
const Page: React.FC = () => {
  const [enableGrid, setEnableGrid] = useState(false)
  return (<div style={{width:'100VW', height:'100VH', background: '#000'}}>
    <input type='button' value='grid' onClick={() => { setEnableGrid(!enableGrid)}} />
      <Router >
        <Route exact path='/vrm' component={VRMpage} />
        <Route exact path='/cube' component={App} />
      </Router>
      {enableGrid && <gridHelper scale={[100,0, 100]}/>}
      
  </div>)
}

ReactDOM.render(
  // 外側でCanvasの記述、Apptsxでやるとエラーになる
  <>
  <Page/>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



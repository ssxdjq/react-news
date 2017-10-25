import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from './components/pc_index.js';
import PCNewsDetail from './components/pc_news_detail.js';
import MobileIndex from './components/mobile_index.js';
import MobileNewsDetail from './components/mobile_news_detail.js';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';


const BasicExample = () => (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <Router history={hashHistory}>
      			<Route path="/" component={PCIndex}></Route>
      			<Route path="/details/:uniquekey" component={PCNewsDetail}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
        </Router>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetail}></Route>
            <Route path="/usercenter" component={MobileUserCenter}></Route>
        </Router>
      </MediaQuery>
    </div>
)

ReactDOM.render(<BasicExample/>, document.getElementById('main'));

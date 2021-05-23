import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
// import MenuTop from './components/menuTop/Menu';
import HomePage from './pages/HomePage';
// import PageTest from './pages/PageTest';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <MenuTop /> */}
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/pagetest" component={PageTest} /> */}
          </Suspense>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import LocalServiceWorkerRegister from './sw-register';


const routing = (
  <Router>
    <React.StrictMode>
      <Header>
      <Switch>
          <Route exact path="/" component={App} />
      </Switch>
      <Footer/>
      </Header>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.register();
LocalServiceWorkerRegister();
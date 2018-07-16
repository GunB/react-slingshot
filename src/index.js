// /* eslint-disable import/default */

// import React from 'react';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import configureStore, { history } from './store/configureStore';
// import Root from './components/Root';
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// require('./favicon.ico'); // Tell webpack to load favicon.ico
// const store = configureStore();

// render(
// <AppContainer>
//   <Root store={store} history={history} />
// </AppContainer>,
// document.getElementById('app')
// );

// if (module.hot) {
// module.hot.accept('./components/Root', () => {
//   const NewRoot = require('./components/Root').default;
//   render(
//     <AppContainer>
//       <NewRoot store={store} history={history} />
//     </AppContainer>,
//     document.getElementById('app')
//   );
// });
// }

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./components/material-component/assets/css/material-dashboard-react.css";

import indexRoutes from "./components/material-component/routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

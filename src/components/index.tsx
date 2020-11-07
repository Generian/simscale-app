// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import reducer from './reducers'
// import 'todomvc-app-css/index.css'
// // import App from './containers/App'
// import { Provider } from 'react-redux'

// const store = createStore(reducer)

// ReactDOM.render(
//   <Provider store={store}>
//     {/* <App /> */}
//   </Provider>,
//   document.getElementById('root')
// )
import React from 'react'
import * as ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <App userName="Beveloper" lang="TypeScript" />,
  document.getElementById("main")
);
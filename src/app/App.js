import React, { Component } from 'react';
import './App.scss';
import "../config/ReactotronConfig";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import history from "../services/history";
import "../config/ReactotronConfig";
import { store, persistor } from "../store"

class App extends Component {  
  render() {
    return (
      <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                  <GlobalStyle></GlobalStyle>
                  <Routes></Routes>
                </Router>
            </PersistGate>
      </Provider>      
    );
  }
}

export default App;

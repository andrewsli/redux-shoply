import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import shoplyReducer from "./shoplyReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(shoplyReducer)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

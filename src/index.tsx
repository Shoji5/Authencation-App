import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores";
import "./tailwind.output.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

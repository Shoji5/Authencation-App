import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef } from "react";
import { userGetInfo } from "./stores/userReducer";
import { ToastContainer, toast as Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LoadingBarRef = {
  add(value: number): void;
  decrease(value: number): void;
  continuousStart(startingValue?: number, refreshRate?: number): void;
  staticStart(startingValue: number): void;
  complete(): void;
};

function App({ isLoading, userGetInfo, toast }: any) {
  const loadingBar = useRef<LoadingBarRef>(null);

  useEffect(() => {
    userGetInfo();
  }, []);
  useEffect(() => {
    if (toast.first) return;
    if (toast.success) Toast.success("successful!");
    else Toast.error(toast.msg);
  }, [toast]);

  useEffect(() => {
    if (isLoading) loadingBar.current?.continuousStart();
    else loadingBar.current?.complete();
  }, [isLoading]);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoadingBar ref={loadingBar} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state: any) => ({ isLoading: state.isLoading, toast: state.toast });

const mapDispatchToProps = { userGetInfo };

export default connect(mapStateToProps, mapDispatchToProps)(App);

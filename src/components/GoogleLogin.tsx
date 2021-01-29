import React from "react";
import { connect } from "react-redux";
import GoogleIcon from "../images/Google.svg";
import ReactGoogleLogin from "react-google-login";
import { userGoogleLogin } from "../stores/userReducer";

const GoogleLogin = ({ userGoogleLogin }: any) => {
  const onSuccessGoogleLogin = (res: any) => {
    // console.log(res.accessToken);
    userGoogleLogin(res.accessToken);
  };

  return (
    <ReactGoogleLogin
      clientId="1055848896745-b5aovdqiso3m1uia5scqbf5mduq4al99.apps.googleusercontent.com"
      onSuccess={onSuccessGoogleLogin}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <img className="mx-2" src={GoogleIcon} alt="" />
        </button>
      )}
    />
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = { userGoogleLogin };

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);

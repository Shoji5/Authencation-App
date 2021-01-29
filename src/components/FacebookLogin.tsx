import React from "react";
import { connect } from "react-redux";
import FacebookIcon from "../images/Facebook.svg";
import ReactFacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { userFacebookLogin } from "../stores/userReducer";

const FacebookLogin = ({ userFacebookLogin }: any) => {
  const responseFacebook = (res: any) => {
    userFacebookLogin(res.accessToken);
  };
  return (
    <ReactFacebookLogin
      appId="158111445857472"
      callback={responseFacebook}
      render={(renderProps: any) => (
        <button onClick={renderProps.onClick}>
          <img className="mx-2" src={FacebookIcon} alt="" />
        </button>
      )}
    />
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = { userFacebookLogin };

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);

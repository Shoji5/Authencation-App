import React from "react";
import { connect } from "react-redux";
import GithubIcon from "../images/Gihub.svg";
import ReactGithubLogin from "react-github-login";
import { userGithubLogin } from "../stores/userReducer";

const GithubLogin = ({ userGithubLogin }: any) => {
  const onSuccessGithubLogin = (res: any) => {
    userGithubLogin(res.code);
  };
  const onFailureGithubLogin = (err: any) => {
    console.log(err);
  };
  return (
    <ReactGithubLogin
      clientId="f1a833dfc44ec2792205"
      onSuccess={onSuccessGithubLogin}
      onFailure={onFailureGithubLogin}
      redirectUri=""
      scope="user:email"
      buttonText={<img className="mx-2" src={GithubIcon} alt="" />}
    />
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = { userGithubLogin };

export default connect(mapStateToProps, mapDispatchToProps)(GithubLogin);

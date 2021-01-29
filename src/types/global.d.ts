declare module "react-github-login";
declare module "react-facebook-login/dist/facebook-login-render-props";
interface IUser {
  name?: string;
  uid?: string;
  email?: string;
  image?: string;
  bio?: string;
  phone?: string;
  domain?: "facebook" | "github" | "google" | "local";
}

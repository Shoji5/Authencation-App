import { useState, MouseEvent } from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../stores/userReducer";

function DropDown({ userLogout, user }: any) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const history = useHistory();

  const onLogoutClicked = (e: MouseEvent<HTMLButtonElement>) => {
    userLogout();
    history.push("/login");
  };

  return (
    <div className="relative">
      <button
        className="flex items-center dropdown__btn"
        onClick={() => setDropDownOpen(!dropDownOpen)}
        //@ts-ignore
        open={dropDownOpen}
      >
        <img className="w-10 h-10 object-cover rounded-lg" src={user.image} alt="" />
        <p className="mx-2 text-xs font-bold sm:block hidden">{user.name}</p>
        <i
          className={cn("fas fa-caret-down transform duration-200 sm:inline-block hidden", {
            "-rotate-180": dropDownOpen,
          })}
        ></i>
      </button>
      <div
        className={cn(
          "absolute right-0 top-12 mt-2 origin-top-right rounded-md shadow-md w-48 transform duration-100",
          {
            "opacity-0": !dropDownOpen,
            "scale-95": !dropDownOpen,
            "-z-10": !dropDownOpen,
            "ease-in": !dropDownOpen,
            "opacity-100": dropDownOpen,
            "scale-100": dropDownOpen,
            "z-50": dropDownOpen,
            "ease-out": dropDownOpen,
          }
        )}
      >
        <div className="px-2 py-1 bg-white rounded-md">
          <button
            className="flex items-center w-full px-4 py-2 my-1 text-xs font-medium bg-transparent rounded-lg text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => history.push("/")}
          >
            <i className="fas fa-user-circle text-lg mr-3"></i>
            <span>My Profile</span>
          </button>
          {/* <button className="flex items-center w-full px-4 py-2 my-1 text-xs font-medium bg-transparent rounded-lg text-gray-600 hover:text-gray-700 hover:bg-gray-200 active:bg-gray-300">
            <i className="fas fa-user-friends text-lg mr-3"></i>
            <span>Group Chat</span>
          </button> */}
          <hr className="" />
          <button
            className="flex items-center w-full px-4 py-2 my-1 text-xs font-medium bg-transparent rounded-lg text-red-500 hover:text-red-600 hover:bg-gray-200 active:bg-gray-300"
            onClick={onLogoutClicked}
          >
            <i className="far fa-sign-out text-lg mr-3"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ user: state.user });

const mapDispatchToProps = { userLogout };

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);

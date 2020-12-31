import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function EditPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="px-4 xl:w-3xl lg:w-2xl sm:w-xl w-full">
          <Link to="/" className="text-blue-550 hover:text-blue-600 active:text-blue-700">
            <i className="far fa-angle-left mr-2"></i> Back
          </Link>
          <div className="mt-4 sm:p-10 sm:border border-gray-200 rounded-xl">
            <h3 className="text-2xl">Change Info</h3>
            <p className="text-sm font-medium text-gray-450">Changes will be reflected to every services</p>
            <div className="mt-6 flex items-center">
              <button className="relative mr-6 rounded-lg overflow-hidden">
                <img
                  className="w-16 h-16 object-cover blur"
                  src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/133567601_424143602061327_5045347988406242295_n.jpg?_nc_cat=111&ccb=2&_nc_sid=b9115d&_nc_ohc=jT7ioMiTvIQAX8y3Pj3&_nc_ht=scontent.fvca1-1.fna&oh=88799419735935039394521363a39e74&oe=6012A53E"
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 transition-all">
                  <i className="fas fa-camera text-white text-xl"></i>
                </div>
              </button>
              <span className="text-sm text-gray-450 font-medium cursor-default">CHANGE PHOTO</span>
            </div>
            <form>
              <label className="mt-5 text-sm block">
                <span className="text-gray-600">Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  required
                  className="px-5 h-12 xl:w-96 lg:w-80 sm:w-72 w-full border border-gray-450 rounded-xl"
                />
              </label>
              <label className="mt-5 text-sm block">
                <span className="text-gray-600">Bio</span>
                <br />
                <textarea
                  rows={5}
                  name="bio"
                  placeholder="Enter your bio..."
                  required
                  className="px-5 py-3 xl:w-96 lg:w-80 sm:w-72 w-full border border-gray-450 rounded-xl resize-none"
                />
              </label>
              <label className="mt-5 text-sm block">
                <span className="text-gray-600">Phone</span>
                <br />
                <input
                  type="number"
                  name="number"
                  placeholder="Enter your phone..."
                  required
                  className="px-5 h-12 xl:w-96 lg:w-80 sm:w-72 w-full border border-gray-450 rounded-xl"
                />
              </label>
              <label className="mt-5 text-sm block">
                <span className="text-gray-600">Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  required
                  className="px-5 h-12 xl:w-96 lg:w-80 sm:w-72 w-full border border-gray-450 rounded-xl"
                />
              </label>
              <label className="mt-5 text-sm block">
                <span className="text-gray-600">Password</span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your new password..."
                  required
                  className="px-5 h-12 xl:w-96 lg:w-80 sm:w-72 w-full border border-gray-450 rounded-xl"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-550 hover:bg-blue-600 active:bg-blue-700 rounded-xl h-10 px-6 mt-5 text-white font-semibold"
              >
                Save
              </button>
            </form>
          </div>
          <div className="flex justify-between text-sm text-gray-350 ms:mt-2 mt-5 mb-4 sm:mx-0 sm:border-t-0 border-t border-gray-350">
            <p>Tuấn Vũ</p>
            <p>devchallenges.io</p>
          </div>
        </div>
      </div>
    </>
  );
}

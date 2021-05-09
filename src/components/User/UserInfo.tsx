import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserInfoSelector } from "../../services/user.service";

export const UserInfo = () => {
  const userData = useRecoilValue(currentUserInfoSelector);
  return (
    <div className="px-5 py-2 ring-2 ring-lightblue-900 rounded-lg">
      <h1 className="text-2xl text-center mb-3 font-semibold">
        Current Active User
      </h1>
      <div>
        <h3 className="text-xl font-semibold">
          <span className="text-gray-200 text-base font-light">user: </span>
          {userData.username}{" "}
          <span className="text-gray-200">( {userData.name} )</span>
        </h3>
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          <span className="text-gray-200 text-base font-light">email: </span>
          {userData.email}{" "}
        </h3>
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          <span className="text-gray-200 text-base font-light">phone: </span>
          {userData.phone}{" "}
        </h3>
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          <span className="text-gray-200 text-base font-light">website: </span>
          <a
            href={userData.website}
            rel="noopener"
            className="underline text-blue-400"
          >
            {userData.website}
          </a>
        </h3>
      </div>
    </div>
  );
};

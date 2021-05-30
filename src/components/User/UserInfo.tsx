import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserInfoSelector } from "../../stores/user.module";
import { User } from "../../types";
import { Button } from "../Button";
import { LightText } from "../LightText";

type UserFieldTypes = { field: keyof User };
const UserField: React.FC<UserFieldTypes> = ({ field }) => {
  const userInfo = useRecoilValue(currentUserInfoSelector(field));
  return <Button disabled>{userInfo}</Button>;
};

export const UserInfo = () => {
  return (
    <div className="px-5 py-2 space-y-2">
      <h1 className="text-2xl text-center mb-3">Current Active User</h1>
      <div>
        <p className="text-lg flex lg:justify-between justify-center items-center">
          <LightText>user: </LightText>
          <UserField field="name" />
        </p>
      </div>
      <div>
        <p className="text-lg flex lg:justify-between justify-center items-center">
          <LightText>email: </LightText>
          <UserField field="email" />
        </p>
      </div>
      <div>
        <p className="text-lg flex lg:justify-between justify-center items-center">
          <LightText>phone: </LightText>
          <UserField field="phone" />
        </p>
      </div>
      <div>
        <p className="text-lg flex lg:justify-between justify-center items-center">
          <LightText>website: </LightText>
          <UserField field="website" />
        </p>
      </div>
    </div>
  );
};

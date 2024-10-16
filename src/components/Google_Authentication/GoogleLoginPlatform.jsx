import { GoogleLogin } from "@react-oauth/google";
import React from "react";

export const GoogleLoginPlatform = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("credentialResponse " , credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

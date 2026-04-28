"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleGoogleLogin}
          className="btn border-blue-500 text-blue-500"
        >
          <FaGoogle /> Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

"use client";

import React from "react";
import Input from "./components/inputs";
import Button from "./components/button";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="john.doe@example.com"
            required
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="********"
            required
          />
          <div className="mt-6 text-center">
            <Button type="submit" label="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

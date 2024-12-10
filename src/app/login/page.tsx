"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([]);

  const getUsernameValue = (e: { target: { value: string } }) => {
    setUsernameValue(e.target.value);
  };
  const getPasswordValue = (e: { target: { value: string } }) => {
    setPasswordValue(e.target.value);
  };

  const checkUserAndPass = () => {
    if (usernameValue.length == 0) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (passwordValue.length == 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const getData = async () => {
    const dataJSON = await fetch(
      "https://instagram-backend-1-v8sf.onrender.com/user/getUser",
      { method: "GET" }
    );
    const res = await dataJSON.json();
    setData(res);
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black space-y-20">
      <div className=" italic text-white font-serif text-5xl">Instagram</div>
      <div className="w-screen flex flex-col justify-center items-center space-y-2">
        <Input
          className="w-3/4 bg-zinc-900 text-gray-50 "
          placeholder="Username"
          type="Email"
          value={usernameValue}
          onChange={getUsernameValue}
        />
        {usernameError == true && (
          <div className="text-red-600">Hooson bj bolku</div>
        )}
        <div className="flex w-3/4 bg-zinc-900 border border-input border-black">
          <Input
            className="w-3/4 bg-zinc-900 text-gray-50"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={passwordValue}
            onChange={getPasswordValue}
          />{" "}
          <Button
            className=" dark:text-white bg-zinc-900  text-gray-50 justify-center "
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </div>
        {passwordError == true && (
          <div className="text-red-600">Hooson bj bolku</div>
        )}
        <Button className="w-3/4 bg-blue-700" onClick={checkUserAndPass}>
          Log in
        </Button>
      </div>
      <div className="flex space-x-2">
        <div className="text-white"> Don't have an account?</div>
        <Link href="/signup" className="text-blue-600">
          Sign up
        </Link>
      </div>
    </div>
  );
};
export default Page;

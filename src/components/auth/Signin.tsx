"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

const emailDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];

const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checkingPassword, setCheckingPassword] = useState(false);
  const [requiredError, setRequiredError] = useState({
    emailReq: false,
    passReq: false,
  });
  const [loading, setLoading] = useState(false);
  const [suggestedDomains, setSuggestedDomains] =
    useState<string[]>(emailDomains);
  const [error, setError] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState: any) => !prevState);
  }
  const router = useRouter();
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    email.current = value;

    setRequiredError((prevState) => ({
      ...prevState,
      emailReq: false,
    }));

    if (!value.includes("@")) {
      setSuggestedDomains(emailDomains);
      return;
    }

    const [, currentDomain] = value.split("@");
    const matchingDomains = emailDomains.filter((domain) =>
      domain.startsWith(currentDomain)
    );
    setSuggestedDomains(matchingDomains);
  };

  const handleSubmit = async () => {
    if (!email.current || !password.current) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        username: username.current,
        email: email.current,
        password: password.current,
        redirect: false,
      });

      setLoading(false);

      if (res?.error) {
        console.error("Sign-in error:", res.error);
        toast.error(res.error);
      } else {
        toast.success("Successfully signed in!");
        router.push("/home");
      }
    } catch (error) {
      console.error("Unexpected error during sign-in:", error);
      toast.error("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  // // Handle clicks outside the dropdown
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setSuggestedDomains([]);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <section className="wrapper relative flex min-h-screen items-center justify-center overflow-hidden antialiased">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full flex-col justify-between gap-12 rounded-2xl bg-primary/5 p-8 sm:max-w-[26rem]"
      >
        <div className="flex flex-col text-center">
          <h2 className="text-3xl font-semibold tracking-tighter xl:text-4xl">
            Welcome to <br />
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1 font-black tracking-tighter text-transparent">
              E-Governance
            </span>
          </h2>
          <p className="text-lg font-medium tracking-tighter text-primary/75 md:text-xl">
            Log in to access content!
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid w-full items-center gap-4">
            <div className="relative flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                className="focus:ring-none border-none bg-primary/5 focus:outline-none"
                name="username"
                id="username"
                placeholder="Your username"
                onChange={(e) => {
                  username.current = e.target.value;
                }}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                className="focus:ring-none border-none bg-primary/5 focus:outline-none"
                name="email"
                id="email"
                placeholder="name@email.com"
                value={email.current}
                onChange={handleEmailChange}
              />
              {requiredError.emailReq && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <Label>Password</Label>
              <div className="flex">
                <Input
                  className="focus:ring-none border-none bg-primary/5 focus:outline-none"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  ref={passwordRef}
                  onChange={(e) => {
                    setRequiredError((prevState) => ({
                      ...prevState,
                      passReq: false,
                    }));
                    password.current = e.target.value;
                  }}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                      setIsPasswordVisible(false);
                      handleSubmit();
                    }
                  }}
                />
                <button
                  className="absolute bottom-0 right-0 flex h-10 items-center px-4 text-neutral-500"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {requiredError.passReq && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
          </div>
          <div className="text-center text-sm text-white">
            Don't have an Account?{" "}
            <Link className="hover:underline " href="/signup">
              Sign up
            </Link>
          </div>
          <Button
            size={"lg"}
            variant={"outline"}
            disabled={loading || !email.current || !password.current}
            onClick={handleSubmit}
            className="hover:cursor-pointer flex items-center justify-center gap-2"
          >
            {loading && (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                <span>Processing...</span>
              </>
            )}
            {!loading && <span>Login</span>}
          </Button>
        </div>
      </motion.div>
      <div className="absolute -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]" />
    </section>
  );
};

export default Signin;

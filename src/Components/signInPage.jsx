"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import Google from "../../src/assets/Google.svg";
import Facebook from "../../src/assets/Facebook.svg";
import Button from "@/components/shared/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "../Components/ui/form";
import { Input } from "@/Components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Must have at least 3 character" })
    .email({
      message: "Must be a valid email",
    }),
  password: z.string().min(8, {
    message: "Your password is not valid",
  }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data) => {};

  return (
    <section className="bg-BgColor py-32">
      <div className="container mx-auto w-[607px] h-[723px] bg-white shadow-sm rounded-[20px]">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h3 className="font-medium  text-[64px] text-primaryColor text-center pt-12">
              Sign in 
            </h3>
          </div>
          <div className="w-full sm:w-[360px] mx-auto">
            <div className="flex gap-6 mt-5">
              <div className="relative">
                <Button className="!bg-transparent border border-BorderColor !px-14 !py-2 !text-primaryColor">
                  Google
                </Button>
                <Image
                  src={Google}
                  alt="Google"
                  className="absolute top-3 left-6"
                />
              </div>
              <div className="relative">
                <Button className="!bg-transparent border border-BorderColor !px-14 !py-2 !text-primaryColor">
                  Facebook
                </Button>
                <Image
                  src={Facebook}
                  alt="Facebook"
                  className="absolute top-3 left-6"
                />
              </div>
            </div>

            <h4 className="text-center auth_title pt-5">Or sign in with</h4>
            <div className="auth-form pt-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <div className="grid grid-cols-1 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="afrm-label">
                            Enter your email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="account@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="afrm-label">Password</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} placeholder="*******" className="focus-visible:ring-0"/>
                          </FormControl>
                            
                           <Button className="text-white w-full !mt-6">
                            Sign In
                            </Button>
                         
                          <FormDescription className="text-center !no-underline">
                            <Link className="frm-alink text-BtnColor" href="/reset">
                              Forgot Your password?
                            </Link>
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
            <div className="pt-5 text-center">
              <p className="frm_cr">
                Don’t have an account?{" "}
                <Link
                  className="text-primary text-base font-semibold"
                  href="/signup"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

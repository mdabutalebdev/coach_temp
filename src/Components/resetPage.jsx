"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/shared/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

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
        
          <div className="">
            <h3 className="font-medium  text-[64px] text-primaryColor text-center pt-40">
              Reset Password
            </h3>
          </div>
          <div className="w-full sm:w-[580px] mx-auto">
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
                              className="py-6"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button className="text-white w-full !mt-6">
                      Reset Password
                    </Button>
                  </div>
                </form>
              </Form>
            
          </div>
        
      </div>
    </section>
  );
}

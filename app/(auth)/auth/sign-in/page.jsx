"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
// import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "enter a valid email",
    }),

  password: z
    .string({
      required_error: "password is required",
    })
    .min(8, {
      message: "password must be atleast 8 characters",
    }),
});

function SignInPage() {
  const [isSubmitting, setisSubmitting] = useState(false);
  const { push } = useRouter();
  const param=useSearchParams()

  
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    try {
      setisSubmitting(true);
      // const error=param.get("error");

      signIn("credentials", {
        callbackUrl: `${window.location.origin}`,
        redirect: true,
        email: values.email,
        password: values.password,
      });

      // if(error){
      //   console.log(error)
      // }
     
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Card className="mx-auto w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Login to your Account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-rose-400 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between text-black">
                    <div>password</div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="password"
                      placeholder="*******"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-rose-400 text-xs" />
                </FormItem>
              )}
            />

            <div className="flex flex-col ">
              <Button
                className="bg-sky-500 hover:bg-sky-500"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader className="animate-spin" />
                  </div>
                ) : (
                  <div>Login</div>
                )}
              </Button>
            </div>
          </form>
        </Form>

        <Separator className="my-2" />
        <div className="flex items-center justify-center">
          <Link className="text-xs underline text-center" href="/auth/sign-up">
            Create Account
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default SignInPage;

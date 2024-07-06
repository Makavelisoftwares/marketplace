"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import React, { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader } from "lucide-react";

import { CreateCategory } from "@/actions/category.action";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string({
    required_error: "category name is required",
  }),
});

export const FormCategory = () => {
  const [isSubmitting, setisSubmitting] = useTransition(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    await CreateCategory(values.name);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <Label className="text-zinc-900 font-bold">Category Name*</Label>
          <div className="flex items-center space-x-3">
            <div className="">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="Programming and Computing"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-rose-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col ">
              <Button
                className="bg-sky-800 hover:bg-sky-800"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader className="animate-spin" />
                    <div>creating category</div>
                  </div>
                ) : (
                  <div>Create category</div>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductSchema } from "@/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/actions/product.action";
import { toast } from "sonner";

export const ProductForm = ({ suppliers, b_id, categories }) => {
  const [isMounted, setisMounted] = useState(false);
  const [isPending, startTransition] = useTransition(false);
  const { refresh } = useRouter();
  useEffect(() => {
    setisMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(ProductSchema),
  });
  function onSubmit(values) {
    startTransition(async () => {
      const { error, success } = await createProduct(
        b_id,
        values.name,
        values.desc,
        values.cost_price,
        values.sell_price,
        values.quantity,
        values.category,
        values.supplier
      );
      

      if (error) {
        toast.error(error);
      }
      if (!error) {
        toast.success(success);
        refresh();
      }
    });
  }

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="mb-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* 1 */}
          <div className="grid-cols-2 grid gap-3">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product quantity</FormLabel>
                    <FormControl>
                      <Input
                        // min={1}
                        // type="number"
                        placeholder="10"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* 2 */}
          <div className="grid-cols-2 grid gap-3">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category for this product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((item, i) => (
                          <SelectItem key={i} value={item?.id}>
                            {item?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="cost_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Cost Price</FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        type="number"
                        placeholder="10"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* 3 */}
          <div className="grid-cols-2 grid gap-3">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="sell_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product selling price</FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        type="number"
                        placeholder="12"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select supplier for this product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {suppliers.map((item, i) => (
                          <SelectItem key={i} value={item?.id}>
                            {item?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* 4 */}

          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            className="w-full bg-rose-500 hover:bg-rose-500"
            type="submit"
          >
            Save product
          </Button>
        </form>
      </Form>
    </div>
  );
};

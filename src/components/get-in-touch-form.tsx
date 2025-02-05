"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GetInTouchFormSchema, GetInTouchFormSchemaType } from "@/lib/schema";
import { Loader } from "lucide-react";
import { GetInTouchEmailTemplate } from "./get-in-touch-emaill-template";

export const GetInTouchForm = ({ type }: { type: "buy" | "sell" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(GetInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      desired_area: "",
    },
  });

  const handleSubmit = async (values: GetInTouchFormSchemaType) => {
    setIsLoading(true);
    const loadingToast = toast.loading("Sending Message...");

    try {
      const formData = new FormData();
      formData.append("email", process.env.NEXT_PUBLIC_CLIENT_EMAIL || "");
      formData.append("subject", "New query from Tenzin Sopa Real Estate");

      const payLoadData = {
        ...values,
        type,
      };
      // Generate the HTML email template
      const htmlTemplate = GetInTouchEmailTemplate({ values: payLoadData });
      formData.append("html", htmlTemplate);

      // Send API request
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("API Response:", result);

      // Handle response
      toast.dismiss(loadingToast);
      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        throw new Error(result.error || "Failed to send the message.");
      }
    } catch (error) {
      console.log(error);
      // toast.dismiss(loadingToast);
      toast.error("Failed to invite member");
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Your name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="desired_area"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Your desired area" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-max">
          {isLoading ? (
            <span>
              <Loader className="animate-spin size-4" />
              Please wait...
            </span>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14L11.6667 11.6667M13.3333 7.66667C13.3333 10.7963 10.7963 13.3333 7.66667 13.3333C4.53705 13.3333 2 10.7963 2 7.66667C2 4.53705 4.53705 2 7.66667 2C10.7963 2 13.3333 4.53705 13.3333 7.66667Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get in Touch
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

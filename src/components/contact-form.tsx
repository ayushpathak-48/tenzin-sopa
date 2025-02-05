"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ContactFormSchema,
  // ContactFormSchemaType,
  HomePageContactFormSchema,
  // HomePageContactFormSchemaType,
} from "@/lib/schema";
import { Loader } from "lucide-react";
import { ContactEmailTemplate } from "./contact-email-template";
import { Textarea } from "./ui/textarea";
import { z } from "zod";

export const ContactForm = ({
  page = "contact",
}: {
  page?: "contact" | "home";
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema =
    page == "contact" ? ContactFormSchema : HomePageContactFormSchema;
  const defaultValues =
    page == "contact"
      ? {
          name: "",
          email: "",
          desired_area: "",
          message: "",
        }
      : {
          name: "",
          email: "",
        };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const loadingToast = toast.loading("Inviting...");

    try {
      const formData = new FormData();
      formData.append("email", process.env.NEXT_PUBLIC_CLIENT_EMAIL || "");
      formData.append("subject", "New query from Tenzin Sopa Real Estate");

      // Generate the HTML email template
      const htmlTemplate = ContactEmailTemplate({ values });
      formData.append("html", htmlTemplate);

      // Send API request
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

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
      toast.dismiss(loadingToast);
      toast.error("Failed to invite member");
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-3 lg:w-[426px]"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="text-[#000000AB] font-medium text-sm/5"
                htmlFor="name"
              >
                Your name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Eg. John doe"
                  className="bg-[#FFFFFF] border border-[#00000038] rounded-[8px]"
                  id="name"
                />
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
              <FormLabel
                className="text-[#000000AB] font-medium text-sm/5"
                htmlFor="email"
              >
                Your Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="email"
                  placeholder="olivia@untitledui.com"
                  className="bg-[#FFFFFF] border border-[#00000038] rounded-[8px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {page == "contact" ? (
          <>
            {" "}
            <FormField
              name="desired_area"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-[#000000AB] font-medium text-sm/5"
                    htmlFor="location"
                  >
                    Your location
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="location"
                      placeholder="Your desired area"
                      className="bg-[#FFFFFF] border border-[#00000038] rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="text-[#000000AB] font-medium text-sm/5"
                    htmlFor="message"
                  >
                    Your message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      {...field}
                      id="message"
                      placeholder="olivia@untitledui.com"
                      className="bg-[#FFFFFF] border border-[#00000038] rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : null}
        <Button className="w-max mt-[35px]">
          {isLoading ? (
            <Loader className="animate-spin size-4" />
          ) : (
            "Get in Touch"
          )}
        </Button>
      </form>
    </Form>
  );
};

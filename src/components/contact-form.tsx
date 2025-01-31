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
import { GetInTouchFormSchema } from "@/lib/schema";
import { Loader } from "lucide-react";

export const ContactForm = () => {
  // const addWorkspace = useWorkspaceStore((state) => state.addWorkspace);
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  const form = useForm({
    resolver: zodResolver(GetInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      desired_area: "",
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    // const loadingToast = toast.loading("Inviting...");

    try {
      // const response = await inviteMember(values);
      // toast.dismiss(loadingToast);
      // if (response.success) {
      //   toast.success("Workspace created successfully");
      //   router.push(`/workspaces/${response.data?.$id}`);
      // } else {
      //   toast.error("Failed to create workspace");
      // }
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
        className="flex flex-col gap-3 w-[426px]"
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
          name="email"
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

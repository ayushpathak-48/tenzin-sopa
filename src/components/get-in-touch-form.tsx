/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { GetInTouchFormSchema } from "@/lib/schema";
import { Loader } from "lucide-react";

export const GetInTouchForm = () => {
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
      //   if (response.data) {
      //     addWorkspace(response.data);
      //   }
      //   onCancel?.();
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
            <Loader className="animate-spin size-4" />
          ) : (
            "Get in Touch"
          )}
        </Button>
      </form>
    </Form>
  );
};

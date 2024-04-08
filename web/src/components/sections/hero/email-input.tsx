"use client";

import type { FormEvent } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useProjectStore } from "@/lib/store";
import { useZodForm } from "@/lib/zod-form";
// import {
//   queryEmail,
//   WaitlistHandler,
// } from "@/server-action/email/waitlist-handler";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});
export default function EmailInput() {
  const spinner = useRef(false);
  const router = useRouter();
  const methods = useZodForm({
    schema: emailSchema,
    defaultValues: {
      email: "",
    },
  });
  const updateEmail = useProjectStore((state) => state.updateEmail);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    spinner.current = true;

    try {
      const formData = new FormData(e.currentTarget);

      const rawData = {
        email: formData.get("email"),
      };
      const data = emailSchema.parse(rawData); // will throw if fails

      updateEmail(data.email);

      // const findEmail = await queryEmail({ input: { email: data.email } });
      // if (findEmail.length > 0 && findEmail[0]!.verified !== 0) {
      //   toast({
      //     title: "You are already on our waitlist 🥺",
      //     description: (
      //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //         <code className="text-white">
      //           {JSON.stringify(findEmail[0]!.email, null, 2)}
      //         </code>
      //       </pre>
      //     ),
      //   });
      //   router.push(`/verify/${findEmail[0]!.verificationId}`);
      // }

      // const res = await WaitlistHandler({ input: { email: data.email } });

      toast({
        title: "OMFG You joined our waitlist?  🎉 ",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(data.email, null, 2).replace(/"/g, "")}
            </code>
          </pre>
        ),
      });
      router.push(`/verify`);
    } catch (error) {
      console.error(`Error:`, error);
      toast({
        title: "Please enter a valid email address 🥺",
        variant: "destructive",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="p-4 text-red-400">
              <span className={"whitespace-pre-wrap text-antiflash-white"}>
                Talk to us in our{" "}
                <a
                  href="https://discord.gg/2vxMpkYJHX"
                  className={"text-bluetiful underline underline-offset-4"}
                >
                  server
                </a>{" "}
                if it keeps happening.
              </span>
            </code>
          </pre>
        ),
      });
    }
  }

  return (
    <div>
      <Form {...methods}>
        <form onSubmit={handleSubmit}>
          <div
            className={"flex flex-col gap-4 space-y-4 md:flex-row md:space-y-0"}
          >
            <FormItem>
              <div>
                <Input
                  id="email"
                  {...methods.register("email")}
                  placeholder={"you@company.com"}
                  variant="secondary"
                  className={
                    "text-md emerald-boxshadow rounded-full border-[3px] border-black px-6 text-smoky-black transition-all duration-300 ease-in-out focus:border"
                  }
                />
                <p className="text-xs font-medium text-red-500">
                  {methods.formState.errors?.email?.message}
                </p>
              </div>

              <FormDescription className={"text-xs"}>
                By signing up you agree to our{" "}
                <a href="/terms" className={"underline"}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className={"underline"}>
                  Privacy Policy
                </a>
                .
              </FormDescription>
              <FormMessage />
            </FormItem>

            <Button
              type="submit"
              className={
                "black-boxshadow gap-2 rounded-full border-[3px] border-black bg-blurple text-antiflash-white transition-all hover:bg-blurple/90 hover:shadow-none focus:bg-blurple/90 focus:shadow-none"
              }
            >
              {spinner.current && <div className={"h-4 w-4 animate-spin"} />}
              <span>Join our waitlist</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

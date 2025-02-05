"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="py-10 px-4 lg:px-[120px]">
        <div className="overflow-hidden bg-[linear-gradient(180deg,_#C3DFED_0%,_#D4E9F3_44%,_#DFF0F7_100%)] py-[60px] px-4 lg:px-20 relative rounded-[16px]">
          <Image
            src={"/assets/contact-hero.png"}
            alt="Hero Image"
            height={1200}
            width={692}
            className="h-full absolute right-0 bottom-0 max-lg:opacity-50"
          />
          <div className="relative z-[2] flex flex-col gap-[62px]">
            <div className="flex flex-col gap-4 w-[515px] max-w-full">
              <div className="flex flex-col">
                <motion.div
                  initial={{ translateY: -50, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[#001829] text-xl font-semibold font-lufga"
                >
                  Get in Touch
                </motion.div>
                <motion.div
                  initial={{ translateX: -100, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[#014C7F] font-semibold text-[48px]/[64px] font-lufga"
                >
                  Discover The Real Estate Advantage
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

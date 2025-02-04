import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="py-10 px-4 lg:px-[120px]">
        <div className="bg-[linear-gradient(180deg,_#C3DFED_0%,_#D4E9F3_44%,_#DFF0F7_100%)] py-[60px] px-4 lg:px-20 relative  rounded-[16px]">
          <Image
            src={"/assets/contact-hero.png"}
            alt="Hero Image"
            height={1200}
            width={692}
            className="absolute right-0 bottom-0 max-lg:opacity-50"
          />
          <div className="relative z-[2] flex flex-col gap-[62px]">
            <div className="flex flex-col gap-4 w-[515px] max-w-full">
              <div className="flex flex-col">
                <div className="text-[#001829] text-xl font-semibold">
                  Get in Touch
                </div>
                <div className="text-[#014C7F] font-semibold text-[48px]/[64px]">
                  Discover The Real Estate Advantage
                </div>
              </div>
            </div>
            {/* <div className="bg-[#FFFFFFB8] shadow-[0px_30px_60px_-15px_#8F90BC26] backdrop-blur-[20px] py-5 px-6 rounded-[20px] rounded-tl-none w-[474px]"> */}
            <ContactForm />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

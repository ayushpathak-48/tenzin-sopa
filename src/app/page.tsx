"use client";

import { GetInTouchForm } from "@/components/get-in-touch-form";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [buyOrSell, setBuyOrSell] = useState<"buy" | "sell">("buy");
  return (
    <>
      {/* Section 1 */}
      <div className="py-5 px-4 lg:py-10 lg:px-[120px]">
        <div className="bg-[linear-gradient(180deg,_#C3DFED_0%,_#D4E9F3_44%,_#DFF0F7_100%)] py-10 lg:py-[60px] px-4 lg:px-20 relative flex flex-col gap-[62px] rounded-[16px]">
          <Image
            src={"/assets/home-hero.png"}
            alt="Hero Image"
            height={1000}
            width={1000}
            className="absolute right-0 bottom-0"
          />
          <div className="flex flex-col gap-4 w-[515px] max-w-full ">
            <div className="flex flex-col">
              <div className="text-[#001829] text-xl font-semibold font-lufga">
                Tenzin Sopa
              </div>
              <div className="text-[#002842] font-semibold text-[40px]/[48px] lg:text-[56px]/[64px] font-lufga">
                Discover The Real Estate Advantage
              </div>
            </div>
            <div className="text-[#002842] text-xl tracking-[-2%] font-lufga">
              We provide a holistic solution for your real estate sale, or
              purchase needs{" "}
            </div>
          </div>
          <div className="relative z-[3]">
            <div className="flex items-center justify-start">
              <div
                onClick={() => setBuyOrSell("buy")}
                className={cn(
                  " uppercase tracking-[20%] pt-1 px-4 text-sm/8 rounded-t-[16px] cursor-pointer font-lufga active:scale-[0.95] transition-all",
                  buyOrSell == "buy" ? "bg-[#FFFFFFB8]" : "text-[#00000099]"
                )}
              >
                Buy
              </div>
              <div
                onClick={() => setBuyOrSell("sell")}
                className={cn(
                  " uppercase tracking-[20%] pt-1 px-4 text-sm/8 rounded-t-[16px] cursor-pointer font-lufga active:scale-[0.95] transition-all",
                  buyOrSell == "sell" ? "bg-[#FFFFFFB8]" : "text-[#00000099]"
                )}
              >
                Sell
              </div>
            </div>
            <div className="bg-[#FFFFFFB8] shadow-[0px_30px_60px_-15px_#8F90BC26] backdrop-blur-[20px] py-5 px-6 rounded-[20px] rounded-tl-none w-full lg:w-[474px]">
              <GetInTouchForm />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex items-center gap-20 px-4 py-10 lg:px-[120px] lg:py-20">
        <Image
          src={"/assets/user-img.png"}
          alt="User Image"
          height={436}
          width={311}
          className="max-lg:hidden"
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <div className="text-[#100A55] font-bold text-[32px]/[40px] tracking-[-1%]">
              The new way to find your new home
            </div>
            <div className="text-[#100A55] font-medium text-base/[25.6px]">
              I specialize in bringing you the best homes for sale and real
              estate listings in the area. Whether you are buying a home,
              selling a home or need help securing a Home Mortgage, I&apos;ve
              got you covered.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-[#0000000A] shadow-[0px_0px_4px_0px_#00000029] flex items-start gap-6 rounded-[16px] border-2 border-[#7BCAFE1F] hover:scale-[1.05] transition-all">
              <Image
                src={"/assets/home-tick.svg"}
                alt=""
                width={64}
                height={64}
                className="size-16"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#000929] font-bold text-[24px]/[36px] tracking-[-1%]">
                  Your Partner in Finding Home
                </div>
                <div className="text-[#4D5461] text-base/[26.6px]">
                  Whether you&apos;re buying, selling, or investing, I&apos;m
                  here to make the process seamless. Let&apos;s work together to
                  find the perfect property for your lifestyle and goals.
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#0000000A] shadow-[0px_0px_4px_0px_#00000029] flex items-start gap-6 rounded-[16px] border-2 border-[#7BCAFE1F] hover:scale-[1.05] transition-all">
              <Image
                src={"/assets/homeownership.svg"}
                alt=""
                width={64}
                height={64}
                className="size-16"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#000929] font-bold text-[24px]/[36px] tracking-[-1%]">
                  Homeownership Made Easy
                </div>
                <div className="text-[#4D5461] text-base/[26.6px]">
                  From navigating listings to closing the deal, I guide you
                  every step of the way. Discover homes that match your dreams
                  and a partner you can trust.
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#0000000A] shadow-[0px_0px_4px_0px_#00000029] flex items-start gap-6 rounded-[16px] border-2 border-[#7BCAFE1F] hover:scale-[1.05] transition-all">
              <Image
                src={"/assets/trusted-expertise.svg"}
                alt=""
                width={64}
                height={64}
                className="size-16"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#000929] font-bold text-[24px]/[36px] tracking-[-1%]">
                  Trusted Expertise
                </div>
                <div className="text-[#4D5461] text-base/[26.6px]">
                  Helping you find the right home or buyer with personalized
                  guidance and market expertise. Let’s make your real estate
                  journey a success.
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#0000000A] shadow-[0px_0px_4px_0px_#00000029] flex items-start gap-6 rounded-[16px] border-2 border-[#7BCAFE1F] hover:scale-[1.05] transition-all">
              <Image
                src={"/assets/tailored-for-you.svg"}
                alt=""
                width={64}
                height={64}
                className="size-16"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#000929] font-bold text-[24px]/[36px] tracking-[-1%]">
                  Tailored for you
                </div>
                <div className="text-[#4D5461] text-base/[26.6px]">
                  Buying or selling a home can be complex—but it doesn’t have to
                  be. With my expertise, I’ll help you achieve your real estate
                  goals effortlessly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col py-10 lg:py-[60px] p-2 pr-4 lg:px-[112px] gap-10">
        <div>
          <div className="text-[#E01D30] font-medium text-lg font-lufga">
            OUR PROPERTIES
          </div>
          <div className="text-[#054457] tracking-[-1%] font-extrabold text-[32px]/[36px] lg:text-[48px]/[56px] font-lufga">
            Newly Added Properties around You!
          </div>
        </div>
        <div className="flex items-center gap-8 max-lg:flex-col overflow-x-auto scrollbar-hidden">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex items-center gap-[56px] py-10 px-4 max-lg:flex-col lg:py-[60px] lg:px-[120px]">
        <div className="relative lg:min-w-[613px]">
          <Image
            src={"/assets/about-us.png"}
            alt=""
            height={475}
            width={613}
            className="h-[269px] lg:h-[475px] w-[613px] object-cover rounded-[16px]"
          />
          <div className="absolute flex items-center gap-2 bg-white lg:py-2 px-[24.85px] bottom-3 right-3 lg:bottom-20 lg:right-[140.13px] rounded-[16px] ">
            <span className="text-[#054457] tracking-[0.25%] text-[32px]/[58px] flex items-center lg:text-[48px]/[58px] font-semibold">
              25+
            </span>
            <span className="text-[#737373]">Properties Sold</span>
          </div>
        </div>
        <div className="flex flex-col gap-[19px]">
          <div>
            <div className="font-medium text-lg/[26px] tracking-[0.5px] text-[#E01D30] font-lufga">
              ABOUT US
            </div>
            <div className="text-[#054457] font-semibold text-[32px]/[36px] lg:text-[48px]/[56px] tracking-[-1%] font-lufga">
              How much is your property worth now?
            </div>
          </div>
          <div className="text-[#73788C] traccking-[-2%] text-base/[26px] font-lufga">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work for
            local people.
          </div>
          <Link href={"/contact"}>
            <Button className="w-max">Get In Touch</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

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
      <div className="py-10 px-[120px]">
        <div className="bg-[linear-gradient(180deg,_#C3DFED_0%,_#D4E9F3_44%,_#DFF0F7_100%)] py-[60px] px-20 relative flex flex-col gap-[62px] rounded-[16px]">
          <Image
            src={"/assets/home-hero.png"}
            alt="Hero Image"
            height={1000}
            width={1000}
            className="absolute right-0 bottom-0"
          />
          <div className="flex flex-col gap-4 w-[515px] max-w-full">
            <div className="flex flex-col">
              <div className="text-[#001829] text-xl font-semibold">
                Tenzin Sopa
              </div>
              <div className="text-[#002842] font-semibold text-[56px]/[64px]">
                Discover The Real Estate Advantage
              </div>
            </div>
            <div className="text-[#002842] text-xl tracking-[-2%]">
              We provide a holistic solution for your real estate sale, or
              purchase needs{" "}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-start">
              <div
                onClick={() => setBuyOrSell("buy")}
                className={cn(
                  " uppercase tracking-[20%] pt-1 px-4 text-sm/8 rounded-t-[16px] cursor-pointer",
                  buyOrSell == "buy" ? "bg-[#FFFFFFB8]" : "text-[#00000099]"
                )}
              >
                Buy
              </div>
              <div
                onClick={() => setBuyOrSell("sell")}
                className={cn(
                  " uppercase tracking-[20%] pt-1 px-4 text-sm/8 rounded-t-[16px] cursor-pointer",
                  buyOrSell == "sell" ? "bg-[#FFFFFFB8]" : "text-[#00000099]"
                )}
              >
                Sell
              </div>
            </div>
            <div className="bg-[#FFFFFFB8] shadow-[0px_30px_60px_-15px_#8F90BC26] backdrop-blur-[20px] py-5 px-6 rounded-[20px] rounded-tl-none w-[474px]">
              <GetInTouchForm />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex items-center gap-20 px-[120px] py-20">
        <Image
          src={"/assets/user-img.png"}
          alt="User Image"
          height={436}
          width={311}
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
          <div className="p-4 bg-[#0000000A] shadow-[0px_0px_4px_0px_#00000029] flex items-start gap-6 rounded-[16px] border-2 border-[#7BCAFE1F]">
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
                Whether you&apos;re buying, selling, or investing, I&apos;m here
                to make the process seamless. Let&apos;s work together to find
                the perfect property for your lifestyle and goals.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col py-[60px] px-[112px] gap-10">
        <div>
          <div className="text-[#E01D30] font-medium text-lg">
            OUR PROPERTIES
          </div>
          <div className="text-[#054457] tracking-[-1%] font-extrabold text-[48px]/[56px]">
            Newly Added Properties around You!
          </div>
        </div>
        <div className="flex items-center gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex items-center gap-[56px] py-[60px] px-[120px]">
        <div className="relative min-w-[613px]">
          <Image
            src={"/assets/about-us.png"}
            alt=""
            height={475}
            width={613}
            className="h-[475px] w-[613px] object-cover rounded-[16px]"
          />
          <div className="absolute flex items-center gap-2 bg-white py-2 px-[24.85px] bottom-20 right-[140.13px] rounded-[16px] ">
            <span className="text-[#054457] tracking-[0.25%] text-[48px]/[58px] font-semibold">
              25+
            </span>
            <span className="text-[#737373]">Properties Sold</span>
          </div>
        </div>
        <div className="flex flex-col gap-[19px]">
          <div>
            <div className="font-medium text-lg/[26px] tracking-[0.5px] text-[#E01D30]">
              ABOUT US
            </div>
            <div className="text-[#054457] font-semibold text-[48px]/[56px] tracking-[-1%]">
              How much is your property worth now?
            </div>
          </div>
          <div className="text-[#73788C] traccking-[-2%] text-base/[26px]">
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

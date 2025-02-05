"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: number;
    img: string;
    title: string;
    price: string;
    type: string;
    beds: string;
    sqft: string;
    bathrooms: string;
    cuttedPrice?: string;
    is_discounted?: boolean;
  };
}
export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="min-w-[352px] w-full md:w-[352px] pl-2">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: property.id * 0.1 }}
        viewport={{ once: true }}
        className="border-[1.5px] border-[#EBF7FF] bg-white rounded-[8px] relative"
      >
        <Image
          src={property.img}
          alt=""
          height={200}
          width={352}
          className="max-md:w-full h-[200px] rounded-t-[8px]"
        />

        {/* Discounted Section */}
        {property.is_discounted ? (
          <>
            <div className="bg-[#0189E4] left-[-8px] top-[184px] py-2 px-4 absolute rounded-[8px] rounded-bl-none flex items-center gap-1 font-bold text-xs text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.62501 2C3.85707 2 4.07963 2.07902 4.24373 2.21967C4.40782 2.36032 4.50001 2.55109 4.50001 2.75V3.5H5.37501C5.60708 3.5 5.82964 3.57902 5.99373 3.71967C6.15783 3.86032 6.25001 4.05109 6.25001 4.25C6.25001 4.44891 6.15783 4.63968 5.99373 4.78033C5.82964 4.92098 5.60708 5 5.37501 5H4.50001V5.75C4.50001 5.94891 4.40782 6.13968 4.24373 6.28033C4.07963 6.42098 3.85707 6.5 3.62501 6.5C3.39294 6.5 3.17038 6.42098 3.00629 6.28033C2.84219 6.13968 2.75 5.94891 2.75 5.75V5H1.875C1.64294 5 1.42038 4.92098 1.25628 4.78033C1.09219 4.63968 1 4.44891 1 4.25C1 4.05109 1.09219 3.86032 1.25628 3.71967C1.42038 3.57902 1.64294 3.5 1.875 3.5H2.75V2.75C2.75 2.55109 2.84219 2.36032 3.00629 2.21967C3.17038 2.07902 3.39294 2 3.62501 2ZM3.62501 9.5C3.85707 9.5 4.07963 9.57902 4.24373 9.71967C4.40782 9.86032 4.50001 10.0511 4.50001 10.25V11H5.37501C5.60708 11 5.82964 11.079 5.99373 11.2197C6.15783 11.3603 6.25001 11.5511 6.25001 11.75C6.25001 11.9489 6.15783 12.1397 5.99373 12.2803C5.82964 12.421 5.60708 12.5 5.37501 12.5H4.50001V13.25C4.50001 13.4489 4.40782 13.6397 4.24373 13.7803C4.07963 13.921 3.85707 14 3.62501 14C3.39294 14 3.17038 13.921 3.00629 13.7803C2.84219 13.6397 2.75 13.4489 2.75 13.25V12.5H1.875C1.64294 12.5 1.42038 12.421 1.25628 12.2803C1.09219 12.1397 1 11.9489 1 11.75C1 11.5511 1.09219 11.3603 1.25628 11.2197C1.42038 11.079 1.64294 11 1.875 11H2.75V10.25C2.75 10.0511 2.84219 9.86032 3.00629 9.71967C3.17038 9.57902 3.39294 9.5 3.62501 9.5ZM9.75002 2C9.94313 1.99995 10.1308 2.05465 10.2839 2.15558C10.4369 2.25651 10.5467 2.398 10.5962 2.558L11.6278 5.9L14.5625 7.3505C14.6955 7.41633 14.806 7.51101 14.8828 7.62502C14.9596 7.73903 15 7.86835 15 8C15 8.13165 14.9596 8.26097 14.8828 8.37498C14.806 8.48899 14.6955 8.58367 14.5625 8.6495L11.6278 10.1007L10.5953 13.442C10.5458 13.6018 10.436 13.7432 10.283 13.844C10.1301 13.9448 9.94254 13.9995 9.74959 13.9995C9.55663 13.9995 9.36909 13.9448 9.21615 13.844C9.0632 13.7432 8.95342 13.6018 8.9039 13.442L7.87227 10.1L4.93751 8.6495C4.8045 8.58367 4.69406 8.48899 4.61727 8.37498C4.54047 8.26097 4.50005 8.13165 4.50005 8C4.50005 7.86835 4.54047 7.73903 4.61727 7.62502C4.69406 7.51101 4.8045 7.41633 4.93751 7.3505L7.87227 5.89925L8.90477 2.558C8.95417 2.39812 9.06383 2.25672 9.2167 2.15581C9.36957 2.05489 9.55707 2.00011 9.75002 2Z"
                  fill="white"
                />
              </svg>
              Discounted
            </div>
            <div className="absolute left-[-8px] top-[216px]">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path d="M8 8L0 0H8V8Z" fill="#0165A8" />
              </svg>
            </div>
          </>
        ) : null}
        <div className="py-8 px-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="text-[#0189E4] font-extrabold text-[24px]/[36px] tracking-[-1%]">
                {property.price}{" "}
                <span className="line-through text-[#020808] font-medium text-base/6 opacity-50">
                  {property.cuttedPrice}
                </span>
              </div>
              <div className="text-[#020808] font-bold text-[24px]/[36px] tracking-[-1%]">
                {property.title}
              </div>
              <div></div>
            </div>
            <div className="text-[#020808] opacity-50 text-base/6">
              {property.type}
            </div>
          </div>
          <div className="border-[1.5px] border-[#EBF7FF]" />
          <div className="flex items-center justify-between gap-[11px]">
            <div className="flex items-center gap-2">
              <Image
                alt="Bedroom"
                src={"/assets/icons/bed.svg"}
                height={20}
                width={20}
                className="size-5"
              />
              <span className="!text-sm/[19.6px] font-medium text-[#020808] whitespace-nowrap opacity-70">
                {property.beds} Beds
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="Bedroom"
                src={"/assets/icons/bathrooms.svg"}
                height={20}
                width={20}
                className="size-5"
              />
              <span className="!text-sm/[19.6px] font-medium text-[#020808] whitespace-nowrap opacity-70">
                {property.bathrooms} Bathrooms
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="Bedroom"
                src={"/assets/icons/sqft.svg"}
                height={20}
                width={20}
                className="size-5"
              />
              <span className="!text-sm/[19.6px] font-medium text-[#020808] whitespace-nowrap opacity-70">
                {property.sqft} sqft
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="pt-10 px-[120px]">
      <Image
        src={"/assets/logo.png"}
        alt="Remax Advantage Plus"
        height={52}
        width={148}
        className="h-[52px] w-[148px]"
      />
      <div className="flex mt-4 border-b border-[#00000029] pb-8">
        <div className="flex flex-col gap-[54px] min-w-[410px]">
          <div className="text-[#8F90A6] text-base/5">
            <span className="font-bold">RE/MAX Advantage Plus - Blaine</span>
            <br />
            Tenzin Sopa <br />
            Real Estate Sales Professional
            <br />
            License# 40629957
            <br />
            Cell: 763-267-5574 Direct: 763-267-5574
            <br />
            <br />
            11806 Aberdeen St NE Suite #100
            <br />
            Blaine, MN 55449
            <br />
            763-267-5574
          </div>
          <div>© 2021 . All rights reserved.</div>
        </div>
        <div className="flex flex-col gap-11">
          <div className="text-[#000000CC]">
            Should you require assistance in navigating our website or searching
            for real estate, please contact our offices at{" "}
            <span className=" font-bold text-base/6 underline">
              763-267-5574
            </span>
            .
          </div>
          <div className="flex flex-col gap-2">
            <Image
              alt=""
              src={"/assets/broker-footer.png"}
              height={34}
              width={149}
              className="h-[34px] w-[149px] "
            />
            <div className="text-[#000000]">
              The data relating to real estate for sale on this web site comes
              in part from the Broker Reciprocity Program of the Regional
              Multiple Listing Service of Minnesota, Inc. Real estate listings
              held by brokerage firms other than RE/MAX Advantage Plus - Blaine
              are marked with the Broker Reciprocity logo or the Broker
              Reciprocity thumbnail logo (little black house) and detailed
              information about them includes the name of the listing brokers.
              The broker providing these data believes them to be correct, but
              advises interested parties to confirm them before relying on them
              in a purchase decision.
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[19px] pb-10 flex items-center justify-between">
        <div>© 2024 Inside Real Estate</div>
        <div className="flex items-center justify-start gap-8">
          <Link href={"#"} className="text-[#000000CC] text-base/5">
            Terms of use
          </Link>
          <Link href={"#"} className="text-[#000000CC] text-base/5">
            Privacy Policy
          </Link>
          <Link href={"#"} className="text-[#000000CC] text-base/5">
            Accessibility
          </Link>
          <Link href={"#"} className="text-[#000000CC] text-base/5">
            Fair Housing Statemet
          </Link>
        </div>
      </div>
    </div>
  );
};

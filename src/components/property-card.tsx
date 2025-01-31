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
    <div className="border-[1.5px] border-[#EBF7FF] bg-white rounded-[8px] w-[352px]">
      <Image src={property.img} alt="" height={200} width={352} />
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
    </div>
  );
};

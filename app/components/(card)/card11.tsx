import { productImg } from "@/app/site-settings/siteUrl";
import Taka from "@/app/utils/taka";
import Link from "next/link";
import React from "react";

const Card11 = ({ item }: any) => {
  return (
    <>
      <div className="group rounded-lg">
        <div className="p-2 bg-gray-200 rounded-t-lg">
          <div className="flex justify-center overflow-hidden">
            <Link href={"/product/" + item?.id + "/" + item?.slug}>
              <img
                src={productImg + item.image[0]}
                alt="Mountain"
                className="h-auto min-w-full object-cover group-hover:scale-105  transition-all duration-300 ease-linear"
              />
            </Link>
          </div>
        </div>

        <div className="p-5 bg-white font-seven">
          <Link href={"/product/" + item?.id + "/" + item?.slug}>
            <h6 className="text-base text-gray-800 font-bold whitespace-nowrap overflow-hidden text-ellipsis sm:max-w-[170px] max-w-[150px]">
              {item?.name}
            </h6>{" "}
          </Link>
          <Link href={`/category/${item.category_id}`}>
            <p className="text-sm capitalize text-gray-500 pb-3">
              {item?.category}
            </p>
          </Link>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 xl:gap-4 md:gap-4 lg:gap-4">
            <div className="text-base font-semibold">
              <Taka />
              {/* {camp?.status === "active" ? campPrice : productGetPrice} */}
            </div>
            <div className="line-through text-gray-400 text-sm">
              <h1 className="">
                {/* {camp?.status !== "active" &&
                (item.discount_type === "no_discount" ||
                  item.discount_price === "0.00") ? (
                  " "
                ) : (
                  <p>
                    <Taka />
                    {Math.trunc(item.regular_price)}
                  </p>
                )} */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card11;

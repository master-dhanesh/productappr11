"use client";
import { ProductContext } from "@/utils/Context";
import Link from "next/link";
import React, { useContext } from "react";

const page = () => {
    const [products] = useContext(ProductContext);
    return (
        <div className="flex flex-wrap gap-5 p-5 w-[100%] h-[100%] ">
            {products &&
                products.map((p) => {
                    return (
                        <Link
                            href={`/product/${p.id}`}
                            key={p.id}
                            className="flex flex-col justify-center p-5 items-center rounded shadow-lg card w-[30%] h-[50%]"
                        >
                            <img
                                className="hover:scale-110 mb-5 h-[75%] object-contain"
                                src={p.image}
                                alt=""
                            />
                            <h1 className="text-xl">{p.title}</h1>
                        </Link>
                    );
                })}
        </div>
    );
};

export default page;

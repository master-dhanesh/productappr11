"use client";
import { ProductContext } from "@/utils/Context";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
    const router = useRouter();
    const [products, setproducts] = useContext(ProductContext);
    const { id } = useParams();
    const product = products && products.find((p) => p.id == id);
    console.log(product);
    return <div>page</div>;
};

export default page;

"use client";
import { ProductContext } from "@/utils/Context";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
    const router = useRouter();
    const [products, setproducts] = useContext(ProductContext);
    const { id } = useParams();
    const product = products && products.find((p) => p.id == id);

    const DeleteHandler = () => {
        const productIndex = products.findIndex((p) => p == product);
        const copyProducts = [...products];
        copyProducts.splice(productIndex, 1);
        setproducts(copyProducts);
        localStorage.setItem("products", JSON.stringify(copyProducts));
        router.push("/product");
    };

    // const EditPageRedirect = () => {
    //     router.push(`/product/edit/${product.id}`);
    // };

    return (
        products && (
            <div className="mt-10 flex items-center w-100 ">
                <img className="w-[30%]" src={product.image} alt="" />
                <div className="ml-10 w-[70%]">
                    <h1 className="text-5xl">{product.title}</h1>
                    <h3 className="mt-3 text-zinc-500 text-2xl">
                        {product.category}
                    </h3>
                    <p className="text-red-300">${product.price}</p>
                    <p className="mt-5">{product.description}</p>
                    <div className="mt-10">
                        <Link
                            href={`/product/edit/${product.id}`}
                            className="rounded py-3 px-5 border text-blue-300 shadow "
                        >
                            Edit
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="ml-5 rounded py-3 px-5 border text-red-300 shadow "
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default page;

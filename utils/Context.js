"use client";
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(
        JSON.parse(window.localStorage.getItem("products")) || []
    );

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;

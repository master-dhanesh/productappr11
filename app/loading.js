import React from "react";

const loading = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img
                className="w-[70%] h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1590615370581-265ae19a053b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </div>
    );
};

export default loading;

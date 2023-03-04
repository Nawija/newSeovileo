import * as React from "react";
import { useState, useEffect } from "react";


const DubleCircle = () => {
    const [msg, setMsg] = useState(false);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsg(true);
        }, 6000);
        return () => timer;
    });

    return (
        <div className="absolute dubleCircle left-0 -translate-x-full -z-50">
            <div className="h-32 w-32 bg-green-500 rounded-full blur-3xl "></div>
            <div className="h-32 w-32 bg-orange-500 rounded-full blur-3xl "></div>
        </div>
    );
};

export default DubleCircle;

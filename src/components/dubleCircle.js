import * as React from "react";


const DubleCircle = () => {

    return (
        <div className="absolute dubleCircle  -translate-x-full -z-50">
            <div className="h-32 w-32 bg-green-500 rounded-full blur-3xl "></div>
            <div className="h-32 w-32 bg-orange-500 rounded-full blur-3xl "></div>
        </div>
    );
};

export default DubleCircle;

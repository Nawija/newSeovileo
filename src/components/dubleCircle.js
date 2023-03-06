import * as React from "react";


const DubleCircle = () => {

    return (
        <div className="absolute dubleCircle -translate-x-full -z-50">
            <div className="h-32 w-32 bg-green-600 rounded-full blur-2xl "></div>
            <div className="h-32 w-32 bg-amber-600 rounded-full blur-2xl "></div>
        </div>
    );
};

export default DubleCircle;

import React from 'react';

export const ProgressBar: React.FunctionComponent<{ value?: number }> = ({ value: value = 0.3 }) => (
    <div className="w-full my-4">
        <div className="h-2 flex rounded bg-pink-200">
            <div style={{ width: `${value * 100}%` }} className={`transition-all ease-in-out duration-300 rounded bg-pink-500 ${value < 1 ? "animate-pulse" : ""}`} ></div>
        </div>
    </div >
)
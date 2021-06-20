import React from 'react';

export const ProgressBar: React.FunctionComponent<{ finished?: number }> = ({ finished = 30 }) => (
    <div className="w-full my-4">
        <div className="h-2 flex rounded bg-pink-200">
            <div style={{ width: `${finished}%` }} className="bg-pink-500"></div>
        </div>
    </div>
)
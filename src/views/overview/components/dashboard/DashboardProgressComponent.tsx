

import React from 'react';
import { ProgressBar } from '~/src/components/ProgressBar';

export const DashboardProgressComponent: React.FunctionComponent<{}> = () => (
    <div className="flex flex-col items-center mt-16 mx-8">
        <div className="text-5xl m-4">😊</div>
        <div className="text-xl m-4">Lets get started</div>
        <ProgressBar />
    </div>
)
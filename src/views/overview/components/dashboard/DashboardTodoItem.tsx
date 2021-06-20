

import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardTodoItem: React.FunctionComponent<{}> = () => (
    <Link to="/todo/5" className="">
        <div className="flex flex-row items-center hover:bg-gray-100 active:bg-gray-100 ">
            <div className="p-5">
                <input type="checkbox" readOnly checked={true} />
            </div>
            <div className="flex-grow">Fix styling after this</div>
            <div className="pr-4"><span className="text-xl">🕸</span></div>
        </div>
    </Link >

);
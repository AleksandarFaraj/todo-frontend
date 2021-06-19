

import React from 'react';
import { Link } from 'react-router-dom';
import "~/src/tailwind.css";

export const DashboardComponent: React.FunctionComponent<{}> = () => (
    <div>
        <input type="checkbox" readOnly checked={true} />
        <Link to="/todo/5">
            <div>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fix styling after this</div>
                <div>🕸</div>
            </div>
        </Link>
    </div>
);
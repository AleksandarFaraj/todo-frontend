

import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardComponent: React.FunctionComponent<{}> = () => (
    <div>
        <div>
            <div>😊</div>
            <div>Get started</div>
            <div>ProgressBar</div>
        </div>
        <div>
            <div>
                <input type="checkbox" readOnly checked={true} />
                <Link to="/todo/5">
                    <div>
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fix styling after this</div>
                        <div>🕸</div>
                    </div>
                </Link>
            </div>
        </div>
        <Link to="/todo/add">Add</Link>
    </div>
);
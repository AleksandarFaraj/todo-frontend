
import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardContainer: React.FunctionComponent<{}> = () => (
    <div>
        <div>
            <div>Icon</div>
            <input type="text" placeholder="Search..."></input>
        </div>
        <div>
            <div>😊</div>
            <div>Get started</div>
            <div>ProgressBar</div>
        </div>
        <div>
            <div>
                <button>Complete todo</button>
                <Link to="/todo/5">
                    <div>
                        <div>Fix styling after this</div>
                        <div>🕸</div>
                    </div>
                </Link>
            </div>
        </div>
        <Link to="/todo/add">Add</Link>
    </div>
);
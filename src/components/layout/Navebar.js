import moment from 'moment';
import React from 'react';
import './navbar.css';

function Navebar({taskRemaining}) {
    return (
        <div className="navbar">
            <div className="navbar-task">
                <h1 className="navbar-task-count">{taskRemaining}</h1>
                <h5 >remaining</h5>
            </div>
            <div className="navbar-date">{moment(new Date()).format('LL')}</div>
        </div>
    )
}

export default Navebar

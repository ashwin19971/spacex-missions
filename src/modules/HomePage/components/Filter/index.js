import React, { Component } from 'react';

import "./Filter.scss";
import { launchYears, statusInfo } from '../../../../models/filtersInfo';

class Filter extends Component {
    render() {
        const {
            setYearFilter,
            setLaunchFilter,
            setLandingFilter,
            launchYear,
            successfulLaunch,
            successfulLanding
        } = this.props;
        return (
            <div id="filter-wrapper">
                <p id="filter-wrapper-heading">Filters</p>
                <div className="filters-wrapper">
                    <div className="filter-heading">
                        <span>Launch Year</span>
                    </div>
                    {
                        launchYears.map((val, index) => (
                            <p
                                key={index}
                                className={`${val == launchYear ? 'selected' : ''}`}
                                onClick={() => setYearFilter(val)}
                            >{val}</p>
                        ))
                    }
                </div>
                <div className="filters-wrapper">
                    <div className="filter-heading">
                        <span>Successful Launch</span>
                    </div>
                    {
                        statusInfo.map((val, index) => (
                            <p
                                key={index}
                                className={`${val == successfulLaunch ? 'selected' : ''}`}
                                onClick={() => setLaunchFilter(val)}
                            >{val}</p>
                        ))
                    }
                </div>
                <div className="filters-wrapper">
                    <div className="filter-heading">
                        <span>Successful Landing</span>
                    </div>
                    {
                        statusInfo.map((val, index) => (
                            <p
                                key={index}
                                className={`${val == successfulLanding ? 'selected' : ''}`}
                                onClick={() => setLandingFilter(val)}
                            >{val}</p>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Filter;

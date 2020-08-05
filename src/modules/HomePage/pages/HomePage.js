import React, { Component } from 'react';

import './HomePage.scss';
import Filter from '../components/Filter';
import MissionCard from '../components/MissionCard';
import { getMissionsList } from '../api/getMissionsList';
import {
  computeUrl,
  getAllQueryParams,
  convertParamsIntoString
} from '../../../utils/computeUrl';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      missionsList: [],
      limit: 100,
      launchYear: '',
      successfulLaunch: '',
      successfulLanding: '',
      isLoading: true
    }
  }

  componentDidMount() {
    this.setMissionData();
  }

  setYearFilter = (launchYear) => {
    const {
      limit,
      successfulLaunch,
      successfulLanding
    } = this.state;
    this.setState({ launchYear });
    this.applyFilters(limit, launchYear, successfulLaunch, successfulLanding);
    this.setMissionData();
  }

  setLaunchFilter = (successfulLaunch) => {
    const {
      limit,
      launchYear,
      successfulLanding
    } = this.state;
    this.setState({ successfulLaunch });
    this.applyFilters(limit, launchYear, successfulLaunch, successfulLanding);
    this.setMissionData();
  }

  setLandingFilter = (successfulLanding) => {
    const {
      limit,
      launchYear,
      successfulLaunch
    } = this.state;
    this.setState({ successfulLanding });
    this.applyFilters(limit, launchYear, successfulLaunch, successfulLanding);
    this.setMissionData();
  }

  applyFilters = (limit, launchYear, successfulLaunch, successfulLanding) => {
    let currentUrl = computeUrl(limit, launchYear, successfulLaunch, successfulLanding);
    window.history.replaceState(null, null, currentUrl);
  }

  setMissionData = async () => {
    const { limit } = this.state;
    let queryParams = getAllQueryParams();
    this.setState(queryParams);
    let queryString = convertParamsIntoString(queryParams) || `limit=${limit}`;
    this.setState({ isLoading: true });
    let data = await getMissionsList(queryString);
    this.setState({ isLoading: false });
    this.setState({ missionsList: data });
  }

  render() {
    const {
      missionsList,
      launchYear,
      successfulLaunch,
      successfulLanding,
      isLoading
    } = this.state;
    return (
      <div id="home-page-wrapper">
        <p className="page-title">SpacEx Launch programs</p>
        <div>
          <Filter
            setYearFilter={this.setYearFilter}
            setLaunchFilter={this.setLaunchFilter}
            setLandingFilter={this.setLandingFilter}
            launchYear={launchYear}
            successfulLaunch={successfulLaunch}
            successfulLanding={successfulLanding}
          />
          {
            isLoading ?
              <p className="ref-text"><b>Data is Loading.....</b></p> :
              missionsList && missionsList.length ?
                <div className="missions-wrapper">
                  {
                    missionsList.map((val, index) => (
                      <MissionCard
                        key={index}
                        missionInfo={val}
                      />
                    ))
                  }
                </div> : 
                <p className="ref-text"><b>No Data Available</b></p>
          }
        </div>
        <p className="developer-ref"><b>Developed By:&nbsp;&nbsp;</b>Ashwin Giri</p>
      </div>
    )
  }
}

export default HomePage;

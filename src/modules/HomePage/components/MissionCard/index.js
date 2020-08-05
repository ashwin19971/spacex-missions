import React, { Component } from 'react';

import "./MissionCard.scss";

class MissionCard extends Component {

    render() {
        const {
            missionInfo
        } = this.props;
        return (
            <div className="mission-card-wrapper">
                <div className="mission-image-wrapper">
                    <img src={missionInfo["links"]["mission_patch_small"]} />
                </div>
                <p className="mission-title">{missionInfo["mission_name"]}&nbsp;#{missionInfo["flight_number"]}</p>
                {
                    missionInfo["mission_id"] && missionInfo["mission_id"].length ?
                        <div>
                            <p><b>Mission Ids:</b></p>
                            <ul>
                                {
                                    missionInfo["mission_id"].map((val, index) => (
                                        <li key={index}>{val}</li>
                                    ))
                                }
                            </ul>
                        </div> : ''
                }
                <div>
                    <p><b>Launch Year: &nbsp;</b></p>
                    <p>{missionInfo["launch_year"]}</p>
                </div>
                <div>
                    <p><b>Successful Launch: &nbsp;</b></p>
                    <p>{missionInfo["launch_success"] ? "true" : "false"}</p>
                </div>
                <div>
                    <p><b>Successful Landing: &nbsp;</b></p>
                    <p>{missionInfo["rocket"]["first_stage"]["cores"][0]["land_success"] ? "true" : "false"}</p>
                </div>
            </div>
        )
    }
}

export default MissionCard;

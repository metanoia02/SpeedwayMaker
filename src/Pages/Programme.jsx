import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SpeedwayApi from "../api";
import data from '../data.json';

import { HeatHeading } from "../Components/HeatHeading";
import { HeatRow } from "../Components/HeatRow";
import { RiderHeading } from "../Components/RiderHeading";
import { RiderRow } from "../Components/RiderRow";

function padRiders(array) {
  if (array.length < 8) {
    array.push({
      position: 8,
      rider: {
        firstName: "",
        lastName: "",
      }
    })
  }
};

function Programme() {
  const location = useLocation();
  const homeId = location.state[0].value;
  const awayId = location.state[1].value;

  const [homeTeamRiders, setHomeTeamRiders] = useState([]);
  const [awayTeamRiders, setAwayTeamRiders] = useState([]);
  const [heats1, setHeats1] = useState([]);
  const [heats2, setHeats2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await SpeedwayApi.get("/TeamRider");

      const home = result.data
        .filter((rider) => rider.teamId == homeId)
        .sort((a, b) => a.position - b.position);

      setHomeTeamRiders(home);
      padRiders(home);

      const away = result.data
        .filter((rider) => rider.teamId == awayId)
        .sort((a, b) => a.position - b.position);

      setAwayTeamRiders(away);
      padRiders(home);

      const heats = [];
      let heatNumber = 0;
      let isHome = true;
      let colourIndex = 0;

      for (let i = 0; i < 64; i++) {
        let rider;

        if (colourIndex == 4) colourIndex = 0;

        heats[i] = {
          useSpan: i % 2 == 0,
          heat: i % 4 == 0 ? String((heatNumber += 1)) : "",
          gateL: data.gateL[i],
          gateR: data.gateR[i],
          riderNo: data.riderOrder[i],
          colour: data.cellColour[colourIndex],
        };

        if (isHome) {
          rider = home.filter((rider) => rider.position == heats[i].riderNo);
        } else {
          rider = away.filter((rider) => rider.position == heats[i].riderNo);
        }

        if (rider.length == 1) {
          heats[i].riderName =
            (rider[0].rider.nickname
              ? rider[0].rider.nickname
              : rider[0].rider.firstName) +
            " " +
            rider[0].rider.lastName;
        }

        colourIndex++;
        if (i % 2 == 1) isHome = !isHome;
      }

      setHeats1(heats.slice(0, 32));
      setHeats2(heats.slice(32, 64));
    }
    fetchData();
  }, []);

  return (
    <div className="programme">
      <div className="row">
        <div className="column">
          <table>
            <thead>
              <RiderHeading />
            </thead>
            <tbody>
              {homeTeamRiders.map((rider, index) => (
                <RiderRow key={index} {...rider} />
              ))}
            </tbody>
          </table>
          <br />
          <table>
            <thead>
              <HeatHeading />
            </thead>
            <tbody>
              {heats1.map((heat, index) => (
                <HeatRow key={index} {...heat} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="column">
          <table>
            <thead>
              <RiderHeading />
            </thead>
            <tbody>
              {awayTeamRiders.map((rider, index) => (
                <RiderRow key={index} {...rider} />
              ))}
            </tbody>
          </table>
          <br />
          <table>
            <thead>
              <HeatHeading />
            </thead>
            <tbody>
              {heats2.map((heat, index) => (
                <HeatRow key={index} {...heat} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Programme;
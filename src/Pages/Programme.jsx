import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data';
import { fetchApi } from '../fetchApi';

import { HeatHeading } from '../Components/HeatHeading';
import { HeatRow } from '../Components/HeatRow';
import { RiderHeading } from '../Components/RiderHeading';
import { RiderRow } from '../Components/RiderRow';

/**
 * Fills the array with blank riders to a length of 8
 * @param {TeamRiderDTO[]} teamRiders
 */
function padRiders(teamRiders) {
  if (teamRiders.length < 8) {
    while (teamRiders.length < 8) {
      teamRiders.push({
        position: teamRiders.length + 1,
        rider: {
          firstName: '',
          lastName: '',
        },
      });
    }
  }
}

/**
 * A Speedway score sheet. Blank if no team inputs.
 */
function Programme() {
  // Get team ids from form
  const location = useLocation();
  let homeId,
    awayId = undefined;

  if (location.state) {
    homeId = location.state[0].value;
    awayId = location.state[1].value;
  }

  // TODO: Improve type safety of hooks.
  const [homeTeamRiders, setHomeTeamRiders] = useState([]);
  const [awayTeamRiders, setAwayTeamRiders] = useState([]);
  const [heats1, setHeats1] = useState([]);
  const [heats2, setHeats2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchApi('TeamRider');

      let home = [];
      let away = [];

      // Make sorted lists of home and away riders.
      home = result
        .filter((rider) => rider.teamId == homeId)
        .sort((a, b) => a.position - b.position);

      away = result
        .filter((rider) => rider.teamId == awayId)
        .sort((a, b) => a.position - b.position);

      setHomeTeamRiders(home);
      setAwayTeamRiders(away);

      // Pad the array to add extra line required. Also fills blank form if no team input.
      padRiders(home);
      padRiders(away);

      const heats = [];
      let heatNumber = 0;
      let isHome = true;
      let colourIndex = 0;

      // Fill 16 heats with 4 riders
      for (let i = 0; i < 64; i++) {
        // Loop over the 4 cell colours every 4 rows.
        if (colourIndex == 4) colourIndex = 0;

        // Define this rows props
        heats[i] = {
          useSpan: i % 2 == 0,
          heat: i % 4 == 0 ? String((heatNumber += 1)) : '',
          gateL: data.gateL[i],
          gateR: data.gateR[i],
          riderNo: data.riderOrder[i],
          colour: data.cellColour[colourIndex],
        };

        // Home and away riders alternate every two rows
        let rider;
        if (isHome) {
          rider = home.filter((rider) => rider.position == heats[i].riderNo);
        } else {
          rider = away.filter((rider) => rider.position == heats[i].riderNo);
        }

        // TODO: Rider name logic needs to be moved to the api.
        if (!rider) {
          rider.riderName = '';
        } else if (rider.length == 1) {
          heats[i].riderName =
            (rider[0].rider.nickname ? rider[0].rider.nickname : rider[0].rider.firstName) +
            ' ' +
            rider[0].rider.lastName;
        }

        // Increment colour row counter
        colourIndex++;
        // Swap between home and away riders every two rows
        if (i % 2 == 1) isHome = !isHome;
      }

      // Split heats into two arrays for one component in each column.
      setHeats1(heats.slice(0, 32));
      setHeats2(heats.slice(32, 64));
    }
    fetchData();
  }, []);
  // TODO: Remove and consolidate styles of row and programme
  return (
    <div className='container d-print-inline'>
      <div className='programme table-responsive'>
        <div className='row'>
          <div className='column'>
            <div className='riders '>
              <table className='centred'>
                <thead>
                  <RiderHeading />
                </thead>
                <tbody>
                  {homeTeamRiders.map((rider, index) => (
                    <RiderRow key={index} {...rider} />
                  ))}
                </tbody>
              </table>
              {homeId && <img src={'./teams/' + homeId + '.png'} />}
            </div>
            <br />
            <div className='heats'>
              <table className='centred'>
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
          </div>
          <div className='column'>
            <div className='riders'>
              <table className='centred'>
                <thead>
                  <RiderHeading />
                </thead>
                <tbody>
                  {awayTeamRiders.map((rider, index) => (
                    <RiderRow key={index} {...rider} />
                  ))}
                </tbody>
              </table>
              {homeId && <img src={'./teams/' + awayId + '.png'} />}
            </div>
            <br />
            <div className='heats'>
              <table className='centred'>
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
      </div>
    </div>
  );
}

export default Programme;

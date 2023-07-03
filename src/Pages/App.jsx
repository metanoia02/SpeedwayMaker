import { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { fetchApi } from '../fetchApi';

/**
 * A selection form for selecting a home and away team for a programme.
 */
function App() {
  const navigate = useNavigate();
  const [teamErrorMsg, setteamErrorMsg] = useState('');
  const [leagueSelection, setSelectedLeague] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState(null);
  const [teamOptions, setTeamOptions] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [teamComponentText, setTeamComponentText] = useState('Home Team:');
  const [closeTeamMenu, setCloseTeamMenu] = useState(false);
  const controlStyle = {
    padding: '15px',
  };
  const errorStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  async function fetchLeagues() {
    return await fetchApi('leagues');
  }

  /**
   * Custom change handler for team selection element.
   */
  function onTeamChange(object, { action }) {
    switch (action) {
      case 'input-change':
        if (object) setSelectedTeams(object);
        break;
      case 'menu-close':
        break;
      case 'clear':
        setSelectedTeams(null);
        setTeamComponentText('Select Home Team:');
        setCloseTeamMenu(false);
        break;
      case 'select-option':
        if (object) setSelectedTeams(object);
        setTeamComponentText('Select Away Team:');
        setCloseTeamMenu(true);
        break;
      case 'remove-value':
        if (object) setSelectedTeams(object);
        if (object.length == 0) setTeamComponentText('Select Home Team:');
        setCloseTeamMenu(false);
        break;
      default:
        break;
    }
    validateForm(object);
  }

  /**
   * Update league hook and enable and reset the teams selection.
   * @param {*} value
   */
  function handleLeagueChange(value) {
    setSelectedLeague(value);
    setIsDisabled(false);
    setSelectedTeams('');
  }

  /**
   * Fill the team selection menu
   * Filters the result based on selected league.
   */
  async function getTeamOptions() {
    try {
      const result = await fetchApi('teams');
      const teams = result.filter((team) => team.leagueId == leagueSelection.id);
      setTeamOptions(teams.map((tag) => ({ label: tag.name, value: tag.id })));
      return teams;
    } catch (error) {
      console.error(error);
    }
  }

  function validateForm(object) {
    if (!object || object.length != 2) {
      setteamErrorMsg('Select two teams');
      return false;
    }
    setteamErrorMsg('');
    return true;
  }

  /**
   * Handle the form submission.
   * Passes selected teams to programme page.
   */
  function submitForm() {
    if (validateForm(selectedTeams))
      navigate('programme', { replace: false, state: selectedTeams });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <p className='h4' style={controlStyle}>
            League:
          </p>
          <AsyncSelect
            cacheOptions
            defaultOptions
            value={leagueSelection}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            loadOptions={fetchLeagues}
            onChange={handleLeagueChange}
          />
        </div>
        <div className='col-md-4'></div>
      </div>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <p className='h4' style={controlStyle}>
            {teamComponentText}
          </p>
          <Select
            isDisabled={isDisabled}
            closeMenuOnSelect={closeTeamMenu}
            isMulti
            value={selectedTeams}
            options={teamOptions}
            onFocus={getTeamOptions}
            onChange={onTeamChange}
            isClearable
          />
          <span style={errorStyle}>{teamErrorMsg}</span>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <button type='submit' className='btn btn-primary' onClick={submitForm}>
            Create Programme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

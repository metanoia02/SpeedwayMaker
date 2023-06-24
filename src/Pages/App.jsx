import { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import SpeedwayApi from '../api';

/**
 * Fetch the list of leagues.
 */
async function fetchLeagues() {
  try {
    let result = await SpeedwayApi.get('/leagues');
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * A selection form for selecting a home and away team for a programme.
 */
function App() {
  const [leagueSelection, setSelectedLeague] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [teamComponentText, setTeamComponentText] = useState('Home Team:');
  const controlStyle = {
    padding: '15px',
  };
  const navigate = useNavigate();

  /**
   * Custom change handler for team selection element.
   */
  function onTeamChange(object, { action }) {
    switch (action) {
      case 'input-change':
        if (object) setSelectedValue(object);
        break;
      case 'menu-close':
        break;
      case 'clear':
        setSelectedValue();
        setTeamComponentText('Select Home Team:');
        break;
      case 'select-option':
        if (object) setSelectedValue(object);
        setTeamComponentText('Select Away Team:');
        break;
      case 'remove-value':
        setSelectedValue();
        break;
      default:
        break;
    }
  }

  /**
   * Update league hook and enable and reset the teams selection.
   * @param {*} value
   */
  function handleLeagueChange(value) {
    setSelectedLeague(value);
    setIsDisabled(false);
    setSelectedValue('');
  }

  /**
   * Fill the team selection menu
   * Filters the result based on selected league.
   */
  async function getTeamOptions() {
    try {
      let result = await SpeedwayApi.get('/teams');
      result = result.data.filter((team) => team.leagueId == leagueSelection.id);
      setOptions(result.map((tag) => ({ label: tag.name, value: tag.id })));
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Handle the form submission.
   * Passes selected teams to programme page.
   */
  function submitForm() {
    if (selectedValue.length != 2) return; // TODO: validateForm(), this doesnt work if select 3 and then delete one due to async update
    navigate('programme', { replace: false, state: selectedValue });
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
            isReq
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
            closeMenuOnSelect={false}
            isMulti
            value={selectedValue}
            options={options}
            onFocus={getTeamOptions}
            onChange={onTeamChange}
            isClearable
          />
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

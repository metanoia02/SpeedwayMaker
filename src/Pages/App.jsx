import { useState } from 'react';
import Select, { components } from 'react-select';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import SpeedwayApi from '../api';

function App() {
  const [leagueSelection, setSelectedLeague] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [teamComponentText, setTeamComponentText] = useState('Home Team:');
  const navigate = useNavigate();

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

  const fetchLeagues = () => {
    return SpeedwayApi.get('/leagues').then((result) => {
      const res = result.data;
      return res;
    });
  };

  const handleLeagueChange = (value) => {
    setSelectedLeague(value);
    setIsDisabled(false);
    setSelectedValue('');
  };

  function getTeamOptions() {
    setIsLoading(true);
    return SpeedwayApi.get('/teams')
      .then((result) => {
        return result.data.filter((team) => team.leagueId == leagueSelection.id);
      })
      .then((response) => {
        setOptions(response.map((tag) => ({ label: tag.name, value: tag.id })));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }

  function submitForm() {
    if (selectedValue.length != 2) return;

    navigate('programme', { replace: false, state: selectedValue });
  }

  const controlStyles = {
    padding: '15px',
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <p className='h4' style={controlStyles}>
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
          <p className='h4' style={controlStyles}>
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
            isLoading={isLoading}
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

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import './FilterMessages.css';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

function FilterMessages(props) {
    const { filterByPriority, filterBy, updSortBy } = props;
    const [filterPriority, setFilterPriority] = useState("");
    const [sortBy, setSortBy] = useState('date');

    const handlePriorityChange = (event) => {
        setFilterPriority(event.target.value);
        filterByPriority(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        updSortBy(event.target.value);
    };

    return (
        <div className="c-filter-messages">
            <form noValidate autoComplete="off">
                <div className="filter-control">
                    <SearchIcon className="search-icon" />
                    <TextField className="form-control" label="filter messages by text in title or details" onChange={e => filterBy(e.target.value)} />
                </div>
                <FormControl className="form-control">
                    <InputLabel id="filter-priority-label">Filter by priority</InputLabel>
                    <Select
                        labelId="filter-priority-label"
                        id="filter-priority" value={filterPriority}
                        onChange={handlePriorityChange}
                    >
                        <MenuItem value="">ALL</MenuItem>
                        <MenuItem value="1">Alert</MenuItem>
                        <MenuItem value="2">Information</MenuItem>
                    </Select>
                </FormControl>
                <FormControl component="fieldset">
                    <div className="sort-container">
                    <FormLabel component="legend" className="sort-label">Sort By</FormLabel>
                    <RadioGroup  row aria-label="sortBy" name="sortBy1" value={sortBy} onChange={handleSortChange}>
                        <FormControlLabel value="date" control={<Radio />} label="Date" />
                        <FormControlLabel value="priority" control={<Radio />} label="Priority" />
                    </RadioGroup>
                    </div>
                </FormControl>
            </form>
        </div>
    )
}

export default FilterMessages;
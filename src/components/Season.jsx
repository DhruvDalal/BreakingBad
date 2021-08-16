import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Checkbox,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const seasons = [1, 2, 3, 4, 5];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Season = (props) => {
  const classes = useStyles();

  return (
    <FormControl varient='filled' className={classes.formControl}>
      <InputLabel id='demo-simple-select-placeholder-label'>
        Select season
      </InputLabel>
      <Select
        labelId='demo-select-mutiple-checkbox-label'
        id='demo-select-mutiple-checkbox'
        multiple
        value={props.season}
        onChange={(e) => props.setSeason(e.target.value)}
        input={<Input id='select-multiple-chip' />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        displayEmpty
      >
        <MenuItem value={''} selected disabled>
          Select seasons
        </MenuItem>
        {seasons.map((s) => (
          <MenuItem key={s} value={s}>
            <Checkbox checked={props.season.indexOf(s) > -1} />
            <ListItemText primary={s} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Season;

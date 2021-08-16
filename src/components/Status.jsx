import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const stMenu = ['Alive', 'Deceased', 'Presumed dead', 'Unknown', 'All'];

const Status = (props) => {
    const classes = useStyles();
  return (
    <FormControl variant='filled' className={classes.formControl}>
      <InputLabel shrink id='demo-simple-select-placeholder-label'>
        Status
      </InputLabel>
      <Select
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        value={props.val}
        onChange={(e) => {
          props.setStatus(e.target.value);
        //   console.log(e.target.value);
        }}
        displayEmpty
      >
        <MenuItem value={''} selected disabled>
          Select Status
        </MenuItem>
        {stMenu.map((val, id) => {
          return (
            <MenuItem key={id} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Status;

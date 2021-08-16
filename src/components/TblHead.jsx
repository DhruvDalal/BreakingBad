import React from 'react'
import {
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tableHeaderCell: {
      fontWeight: '600',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
}))

const titleList = ["Name","Occupation","DOB","Status","Know More.."]

const TblHead = () => {
    const classes = useStyles();
    return (
        <TableHead stickyHeader aria-label='sticky table'>
            <TableRow>
            {titleList.map((val)=>{
                return <TableCell className={classes.tableHeaderCell}>{val}</TableCell>
            })}
            </TableRow>
          </TableHead>
    )
}

export default TblHead

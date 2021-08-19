import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';
import {
    TableCell,
    TableRow,
    Button,
    Avatar,
    Grid,
    Typography,
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    nameCell: {
      fontWeight: 'bold',
      color: theme.palette.secondary.dark,
      fontSize: '20px',
      justifyContent: 'center',
    },
    btn: {
      textDecoration: 'none',
    },
    eachRow: {
      borderTop: '0.10rem dashed blue',
  
      '&:hover': {
        background: '#79cfe0',
        color: theme.palette.getContrastText('#79cfe0'),
      },
    },
  }));

const TblRow = (props) => {
    const classes = useStyles();
    const row = props.data;
    return (
        <TableRow key={row.char_id} className={classes.eachRow}>
                  <TableCell className={classes.nameCell}>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar src={row.img} />
                      </Grid>
                      <Grid item lg={10}>
                        {row.name}
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    {row.occupation.length !== 0
                      ? row.occupation.map((elem, index) => {
                          return (
                            <Typography>{row.occupation[index]},</Typography>
                          );
                        })
                      : null}
                  </TableCell>
                  <TableCell>{row.birthday}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Link
                      className={classes.btn}
                      to={
                        row.char_id <= 58
                          ? `/${row.char_id - 1}`
                          : `/${row.char_id - 1 - 54}`
                      }
                    >
                      <Button variant='contained' color='primary'>
                        Know More.. <LaunchIcon />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
    )
}

export default TblRow

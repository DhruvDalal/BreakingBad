import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar';
import Pagination from './components/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';
import Status from './components/Status';
import TblHead from './components/TblHead';
import Season from './components/Season';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    margin: '10px 10px',
    maxWidth: '98%',
    borderRadius: '15px',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
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
  menu: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  filter:{
    display:'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxHeight: '70px',
    top: '15px',
  },
  filt:{
    fontSize: '30px',
    color: 'Blue'
  }
}));

const TableMain = (props) => {
  const data = props.data;  
  const [nameCh, setName] = useState('');
  const [status, setStatus] = useState('');
  const [season, setSeason] = useState([]);
  // console.log(nameCh);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();
  return (
    <>
      <NavBar setName={setName} />
      <div className={classes.filter}>
      <span className={classes.filt}>Filters: </span>
      <Status val={status} setStatus={setStatus} />
      <Season season={season} setSeason={setSeason} />
      </div>
      
      <Pagination
        pg={page}
        rpp={rowsPerPage}
        cnt={data.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TblHead />
          <TableBody>
            {data
              .filter((val) => {
                if (nameCh === '') {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(nameCh.toLowerCase())
                ) {
                  return val;
                }
                return 0;
              })
              .filter((val) => {
                if (status === '' || status === 'All') {
                  return val;
                } else if (val.status === status) {
                  return val;
                }
                return null;
              }).filter((val)=>{
                if (season.length === 0){
                  return val;
                }else if(season.sort().join(',') === val.appearance.sort().join(',')){
                  return val;
                }
                return null
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        pg={page}
        rpp={rowsPerPage}
        cnt={data.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableMain;

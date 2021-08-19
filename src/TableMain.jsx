import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar';
import Pagination from './components/Pagination';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
} from '@material-ui/core';
import Status from './components/Status';
import TblHead from './components/TblHead';
import Season from './components/Season';
import TblRow from './components/TblRow';

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
  const rlData = data
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
  });

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
        cnt={rlData.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TblHead />
          <TableBody>
            {rlData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TblRow key={row.char_id} data={row}/>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        pg={page}
        rpp={rowsPerPage}
        cnt={rlData.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableMain;

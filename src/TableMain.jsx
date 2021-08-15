import React,{useState} from 'react';
import { Link} from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    margin: '10px 10px',
    maxWidth: '98%',
    borderRadius: '15px',
  },
  tableHeaderCell: {
    fontWeight: '600',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  nameCell: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
    fontSize: '20px',
    justifyContent: 'center',
  },
  btn:{
    textDecoration: 'none',
  },
  eachRow: {
    borderTop: '0.10rem dashed blue',

    '&:hover':{
      background: '#79cfe0',
      color: theme.palette.getContrastText('#79cfe0'),
    }
  },
}));
const TableMain = (props) => {
  const data = props.data;
  const [nameCh,setName] = useState("")
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
       <NavBar  setName = {setName}/>
      <TablePagination
        rowsPerPageOptions={[10, 31, 62]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead stickyHeader aria-label='sticky table'>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Occupation
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>DOB</TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Know More..
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter( (val) => {
                if(nameCh === ""){
                  return val;
                }else if(val.name.toLowerCase().includes(nameCh.toLowerCase())){
                    return val;
                }
                return 0;
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => (
                <TableRow key={row.char_id} className={classes.eachRow} >
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
                  <Link className={classes.btn} to={row.char_id<=58?`/${(row.char_id)-1}`:`/profile/${((row.char_id)-1)-54}`}>
                    <Button variant='contained' color='primary' >
                      Know More.. <LaunchIcon />
                    </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 31, 62]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableMain;

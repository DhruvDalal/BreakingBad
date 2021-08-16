import React from 'react'
import {
    TablePagination,
  } from '@material-ui/core';

const Pagination = (props) => {
    return (
        <TablePagination
        rowsPerPageOptions={[10, 31, 62]}
        component='div'
        count={props.cnt}
        rowsPerPage={props.rpp}
        page={props.pg}
        onPageChange={props.handleChangePage}
        onRowsPerPageChange={props.handleChangeRowsPerPage}
      />
    )
}

export default Pagination

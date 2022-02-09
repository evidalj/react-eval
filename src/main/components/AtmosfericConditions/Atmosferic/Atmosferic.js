import React, { useState } from "react";
import Styles from './Styles.module.scss';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
const Atmosferic = props => {
  const { results, changePage, onClickDetail, page, pageSize, totalRows } = props;
  // const [page, setPage] = useState(0);
  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'cityid', headerName: 'City ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'state', headerName: 'State' },
    { field: 'probabilityofprecip', headerName: 'Probability of precip' },
    { field: 'relativehumidity', headerName: 'Relative humidity' },
    { field: 'lastreporttime', headerName: 'id' },
    { field: 'rain', headerName: 'Rain' },
  ];

  const onChangePage = (event, page) => {
    console.log(page);
    //setPage(page);
    changePage(page);
  }
  return (
    <Grid item xs={12}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {
                columns.map(colum => {
                  return (
                    <TableCell>{colum.headerName}</TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              results.map(result => {
                return (
                  <TableRow key={result._id}>
                    <TableCell onClick={() => onClickDetail(result)}>{result._id}</TableCell>
                    <TableCell >{result.cityid}</TableCell>
                    <TableCell >{result.name}</TableCell>
                    <TableCell >{result.state}</TableCell>
                    <TableCell >{result.probabilityofprecip}</TableCell>
                    <TableCell >{result.relativehumidity}</TableCell>
                    <TableCell >{result.lastreporttime}</TableCell>
                    <TableCell >{result.probabilityofprecip > 60 || result.relativehumidity > 50 ? 'Si' : 'No'} </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalRows}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[5, 10, 20, 50]}
        page={page} 
        onPageChange={onChangePage}/>
      {/* <button onClick={() => onChangePage('back')}>back page</button>
      <button onClick={() => onChangePage('next')}>next page</button> */}
    </Grid>
  );

}

export default Atmosferic;
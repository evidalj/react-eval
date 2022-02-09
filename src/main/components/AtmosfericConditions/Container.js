import React, { useEffect, useState } from 'react'
import Atmosferic from './Atmosferic/Atmosferic';
import AtmosfericDetail from './Atmosferic/AtmosfericDetail';
import AtmosFericServices from '../../services/atmosfericServices';
import { Grid } from '@material-ui/core';
const AtmosfericContainer = props => {

  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [detail, setDetail] = useState({});
  const [totalRows, setTotalRows] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);


  const onClickDetail = (event) => {
    setDetail(event);
  }
  const changePage = (newPage) => {
    setPage(newPage);
  }
  const getAtmosfericConditions = async () => {
    const atmosfericServices = new AtmosFericServices();
    const response = await atmosfericServices.getAtmosfericsConditions(page + 1, 10);
    setResults(response.data.results);
    setTotalRows(response.data.pagination.total);
  }

  useEffect(() => {
    getAtmosfericConditions();
  }, [page])
  return (
    <React.Fragment>
      <Grid container spacing={2}></Grid>
        <Atmosferic 
        results={results} 
        changePage={changePage} 
        page={page}
        totalRows={totalRows} 
        pageSize={pageSize} 
        onClickDetail={onClickDetail} />
        <AtmosfericDetail details={detail} />
      
    </React.Fragment>
  );
}

export default AtmosfericContainer;
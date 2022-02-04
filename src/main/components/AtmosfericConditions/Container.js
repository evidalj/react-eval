import React, { useEffect, useState } from 'react'
import Atmosferic from './Atmosferic/Atmosferic';
import AtmosfericDetail from './Atmosferic/AtmosfericDetail';
import AtmosFericServices from '../../services/atmosfericServices';
const AtmosfericContainer = props => {

  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [detail, setDetail] = useState({});

  const onClickDetail = (event) => {
    // console.log(event);
    setDetail(event);
  }
  const changePage = (event) => {
    console.log(event);
    if (event === 'next') {
      setPageNumber(pageNumber + 1);
    }
    if (event === 'back') {
      if (pageNumber !== 1) {
        setPageNumber(pageNumber - 1);
      }

    }
  }
  const getAtmosfericConditions = async () => {
    const atmosfericServices = new AtmosFericServices();
    const response = await atmosfericServices.getAtmosfericsConditions(pageNumber, 10);
    setResults(response.data.results);
  }

  useEffect(() => {
    getAtmosfericConditions();
  }, [pageNumber])
  return (
    <React.Fragment>
      <Atmosferic results={results} changePage={changePage} onClickDetail={onClickDetail} />
      <AtmosfericDetail details={detail} />
    </React.Fragment>
  );
}

export default AtmosfericContainer;
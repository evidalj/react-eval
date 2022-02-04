import React, { useState } from "react";
import Styles from './Styles.module.scss';
const Atmosferic = props => {
  const { results, changePage, onClickDetail } = props;

  const onChangePage = (event) => {
    changePage(event);
  }
  return (
    <div className={Styles.container}>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>City Id</th>
            <th>Name</th>
            <th>state</th>
            <th>Probability of precip</th>
            <th>Relative humidity</th>
            <th>Last Report Time</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((element, index) => {
              return (<tr>
                <td  onClick={()=>onClickDetail(element)}>{element._id}</td>
                <td >{element.cityid}</td>
                <td >{element.name}</td>
                <td >{element.state}</td>
                <td >{element.probabilityofprecip}</td>
                <td >{element.relativehumidity}</td>
                <td >{element.lastreporttime}</td>
                <td >{element.probabilityofprecip > 60 || element.relativehumidity > 50 ? 'Si' : 'No'} </td>
              </tr>
              )

            })
          }
        </tbody>
      </table>
      <button onClick={() => onChangePage('back')}>back page</button>
      <button onClick={() => onChangePage('next')}>next page</button>
    </div>
  );

}

export default Atmosferic;
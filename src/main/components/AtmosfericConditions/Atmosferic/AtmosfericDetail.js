import React from "react";

const AtmosfericDetail = props => {
    const { details } = props;
    console.log('...',details);
    return (
        <div>
            <div><b>Detalles atmosfericos</b></div>
            <div><b>id: </b>{details?._id}</div>
            <div><b>City Id :</b>{details?.cityid}</div>
            <div><b>Name: </b>{details?.name}</div>
            <div><b>state: </b>{details?.state}</div>
            <div><b>Probability of precip :</b>{details?.probabilityofprecip}</div>
            <div><b>Relative humidity:</b> {details?.relativehumidity}</div>
            <div><b>Last Report Time: </b>{details?.lastreporttime}</div>
            <div><b>Rain: </b>{details?.probabilityofprecip > 60 || details?.relativehumidity > 50 ? 'Si' : 'No'}</div>
        </div>

    );
}

export default AtmosfericDetail;
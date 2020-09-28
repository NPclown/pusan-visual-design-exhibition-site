import React from 'react';

const GraduateDetail = ({match})=>{
    const {params: {id}} = match
    return (
        <>
          <p>
            <strong>
                졸업자 idx:
            </strong>
            {id}
          </p>
        </>
      );
    };


export default GraduateDetail

import React from 'react';

const Pagination = (props) =>{
    const page = [];

    for(let i = 1; i <= props.count/10 + 1; i++) page.push(i);

    return (
        <div className="paginate">
            {
                page.map((item, index) => {
                    return (
                    <div onClick={() => props.getData(item)} key={index} className={parseInt(props.current) === item ? ('font-s26-w3-b9 paginate-link active') : ('font-s26-w3-b9 paginate-link') }>
                        {item}
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Pagination;

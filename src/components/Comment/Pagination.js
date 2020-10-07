import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = (props) =>{
    const page = [];

    for(let i = 1; i <= props.count/10 + 1; i++) page.push(i);

    return (
        <div className="paginate">
            {
                page.map((item, index) => {
                    return (
                    <Link to={`/art/detail/${props.article_id}/${item}`} key={index} className={parseInt(props.current) === item ? ('font-s26-w3-b9 paginate-link active') : ('font-s26-w3-b9 paginate-link') }>
                        {item}
                    </Link>
                    )
                })
            }
        </div>
    );
}

export default Pagination;
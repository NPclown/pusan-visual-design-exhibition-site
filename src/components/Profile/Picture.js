import React from 'react';
import {Link} from 'react-router-dom';

function Picture ({props,name,subject,image,idx}) {
    return(
        <div className = "container1" >
            <img src={image} alt="Avatar" class="pic" />  
            <div className = "overlay">
                {name}
            </div>
        </div>
    )
}
export default Picture;


// import * as React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { RouteComponentProps } from 'react-router';

// const logo = require('./logo.svg');

// const Home = () => {
//   return (
//     <h3>Home</h3>
//   );
// };

// const Post = (props: RouteComponentProps<{ postId: string }>) => {
//   function goNextPost() {
//     const nextPostId = +props.match.params.postId + 1;  // params는 항상 'string'으로 반환 되니 형변환.
//     props.history.push(`/profile/${index}`);
//   }
//   return (
//     <div>
//       <h3>Post {props.match.params.index}</h3>

//     </div>
//   );
// };

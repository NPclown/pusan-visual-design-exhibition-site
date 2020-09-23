import React, {useState, useEffect} from 'react';
import CommentCont from './CommentCont';
import Axios from 'axios';

import './Comment.css'

const Comment = (props) =>{
    const [state, setState] = useState({isLoading : true, comments : []})

    const getData = async () => {
        Axios.get(`/api/get_article_comment?article_id=${props.idx}`)
        .then((res) => {
            setState({isLoading : false, comments : res.data})
        }).catch((err) => {
            alert(err)
            setState({isLoading : false, comments : []})
        }) 
    }
    const register = () => {
        alert('댓글 등록!!');
    }

    useEffect(() => {
        getData();
    },[])

    return state.isLoading ? (
        <div className="loading">
            <span>Loading...</span>
        </div>
        ) : (
        <div className="comment">
            <div className="comment-title">
                <div className="left">댓글 <span className="small">({state.comments.length})</span></div>
                <div className="right" onClick={register}>댓글쓰기</div>                
            </div>
            <div className="comment-cont">
                {
                    state.comments.map((item) => (
                        <CommentCont key={item.id} name={item.uploader_name} cont={item.comment} date="2020-09-24"></CommentCont>
                    ))
                }
            </div>
        </div>
    );
}

export default Comment;
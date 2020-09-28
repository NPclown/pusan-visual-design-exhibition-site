import React, {useState, useEffect} from 'react';
import CommentCont from './CommentCont';
import Axios from 'axios';

import './Comment.css'

const Comment = (props) =>{
    const [state, setState] = useState({isLoading : true, comments : []})

    const register = () => {
        alert('댓글 등록!!');
    }

    useEffect(() => {
        const getData = async() => {
            try{
                var result = await Axios.get(`/api/get_article_comment?article_id=${props.idx}`);
                setState({isLoading : false, comments : result.data})
            } catch(error) {
                alert(error)
                setState({isLoading : false, comments : []})
            }
        }
        getData();
    },[props.idx])

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
                    state.comments.map((item, index) => (
                        <CommentCont key={index} id={item.id} name={item.uploader_name} cont={item.comment} date={item.uploader_date}></CommentCont>
                    ))
                }
            </div>
        </div>
    );
}

export default Comment;
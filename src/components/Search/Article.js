import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import ArtPicture from '../Art/ArtPicture';

const Article = (props) =>{
    const [state, setState] = useState({isLoading : true, article : []})

    useEffect(() => {
      const getData = async() => {
          try{
              var result = await Axios.get(`/api/search_article?title=${props.title}`);
              setState({isLoading : false, article : result.data})
          } catch(error) {
              alert(error)
              setState({isLoading : false, article : []})
          }
      }
      getData();
    },[props.title])

    return state.isLoading ? (<div>loading</div>) : (
        <div className = "art-row1">{
            state.article.map((art) => {
                return(
                 <Link to = {`detail/${art.id}`}>
                 <ArtPicture title = {art.title} maker={art.maker} image={art.thumbnail_path}></ArtPicture>
                 </Link>
            )
          }
        )}
        </div>
    );
}

export default Article;
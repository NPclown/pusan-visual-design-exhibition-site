import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import ArtPicture from '../Art/ArtPicture';

const Article = (props) =>{
    const [state, setState] = useState({isLoading : true, data : []})

    useEffect(() => {
      const getData = async() => {
          try{
              var result = await Axios.get(`/api/search_article?title=${props.title}`);
              setState({isLoading : false, data : result.data})
          } catch(error) {
              alert(error)
              setState({isLoading : false, data : []})
          }
      }
      getData();
    },[props.title])

    return state.isLoading ? (<div>loading</div>) : (
        <div className = "art-row1">{
            state.data.map((art, index) => {
                return(
                 <Link to = {`/art/detail/${art.id}`} key={index}>
                 <ArtPicture title = {art.title} maker={art.maker} image={art.thumbnail_path}></ArtPicture>
                 </Link>
            )
          }
        )}
        </div>
    );
}

export default Article;
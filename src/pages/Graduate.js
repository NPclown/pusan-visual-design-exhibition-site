//졸업자 게시판
import React,{Component} from 'react';
import Picture from '../components/Profile/Picture'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/Picture.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Graduate extends Component{  constructor(props) {
  super(props);
  console.log('in constructor');
}

state = {
  data : [],
};

getMyData = async () => {
  let data = await axios.get('/api/get_profile_list');
  data = data.data;
  console.log('data is ' + JSON.stringify(data));
  this.setState({data});
};

componentDidMount() {
  console.log('in componentDidMount');
  this.getMyData();
}

componentDidUpdate() {
  console.log('in componentDidUpdate');
}

componentWillUnmount() {
  console.log('in componentWillUnmount');
}

render() {
  return (
    <div className="Graduate">
      <Header state="프로필"></Header>
        <div className = "content">
          <div className = "row1">
            {
              this.state.data.map((person) => {
                return(
                  <Link to = {`profile/detail/${person.id}`}>
                  <Picture name={person.name} image={person.thumbnail_path}></Picture>
                  </Link>
                )
              })
          }

          </div>
        </div>
           <Footer></Footer>
      </div>
  );
}

    }
  export default Graduate;
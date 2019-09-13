import React, { Component } from 'react';
import GithubApi from './Components/Github';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Axios from 'axios';

class App extends Component {
  state={
    response: '',
    username:'',
    Name: '',
    image: '',
    followers: '',
    following: '',
    Repositories: '',
    bio:'',
  }
  handleChange = (e) => {
    this.setState({username: e.target.value})
 }
 fetchApi = () => {
  const {username} = this.state;
  Axios.get(`https://api.github.com/users/${username}`)
  .then(response => 
     this.setState({
        response: response.data,
         Name: response.data.name,
         image: response.data.avatar_url,
         following: response.data.following,
         followers: response.data.followers,
         bio: response.data.bio,
     }, () => console.log(response.data)
     ))
  .catch(error => console.log(error))
}
Find = (e) => {
  e.preventDefault();
  this.fetchApi();
}
  render() { 
    const {response,Name,image,following,followers,bio} = this.state;
    return ( 
      <div>
        <Navbar handleChange={this.handleChange} Find={this.Find}/>
        {response && <GithubApi Name={Name} Image={image} Following={following} Followers={followers} Bio={bio} />}
        
      </div>
     );
  }
}
 
export default App;
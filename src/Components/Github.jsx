import React, { Component } from 'react';

import '../Stylesheets/GithubApi.css';

class GithubApi extends Component {
    // state = { 
    //     username:'',
    //     Name: '',
    //     image: '',
    //     followers: '',
    //     following: ''
    //  }
    //  handleChange = (e) => {
    //     this.setState({username: e.target.value})
    //  }
    //  fetchApi = () => {
    //      const {username,userInfo} = this.state;
    //      let info = userInfo;
    //      Axios.get(`https://api.github.com/users/${username}`)
    //      .then(response => 
    //         this.setState({
    //             Name: response.data.name,
    //             image: response.data.avatar_url,
    //             following: response.data.following,
    //             followers: response.data.followers
    //         }, () => console.log(response.data)
    //         ))
    //      .catch(error => console.log(error))
    //  }
    //  Find = (e) => {
    //     e.preventDefault();
    //     this.fetchApi();
    //  }
    render() 
        { 
        return ( 
            <div className='container-fluid'>
                <br/>
                <div className='row'>
                     <div className="col-sm-8 mr-3">
                        <div className="row">
                            <div className="col-sm-2">
                                <img src={this.props.Image} alt=""/> 
                            </div>
                            <div className="col-sm-6">
                                <h4 className='Name'>{this.props.Name}</h4> 
                                <h6 className="text-muted">Following {this.props.Following} &nbsp;&nbsp;&nbsp; Followers {this.props.Following} </h6>
                            </div>
                        </div>
                        <br/>
                        <p><strong>Bio:</strong> {this.props.Bio}</p>
                     </div>
                     <div className="col-sm-3" style={{backgroundColor: 'white'}}>
                        <h5>Side Bar</h5>
                     </div>
                </div>
                
            
            </div>
            
         );
    }
}
 
export default GithubApi;
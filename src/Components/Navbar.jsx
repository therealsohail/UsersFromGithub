import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className='navbar navbar-light bg-dark navbar-dark'>
                <a className="navbar-brand" style={{color:'white'}}>Find Github Users</a>
                <form className='form-inline'>
                <input className='form-control mr-3' type="text"
                placeholder='Enter Username'
                onChange={this.props.handleChange}
                />
                <button onClick={this.props.Find} className='btn btn-primary'>Find</button>
                </form>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Navbar;
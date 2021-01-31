import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{fontSize:35}}>Navbar <span className="badge badge-pill badge-secondary">
                            {this.props.totalItems}</span> Total Bill : <span className="badge badge-pill badge-secondary">{this.props.totalBill} Rs /-</span></a>
                        <form className="d-flex" onSubmit={this.handleSubmit}>
                            <input className="form-control me-2"  id="input" type="search" placeholder="Name, price" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit" >Add</button>
                        </form>
                    </div>
                </nav>
            </div>
         );
    }

    handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        this.props.handleSubmit(document.getElementById('input').value)
        console.log(document.getElementById('input').value)
    }
}
 
export default NavBar;
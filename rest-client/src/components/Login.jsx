import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
            loginFailed: false
            
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })

        if(this.state.username ==="Nolan" && this.state.password ==="password")
        {
            this.props.history.push(`/notes/${this.state.username}`);
        }
    }

    render() {
        return (
            <div className="Login container">
                <form className="form-inline">
                    <div className="input-group mr-2">
                        <label htmlFor="username">Username:&nbsp;&nbsp;</label>
                        <input id="username" name="username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange}></input>
                    </div>
                    <div className="input-group mr-2">
                        <label htmlFor="password">Password:&nbsp;&nbsp;</label>
                        <input id="password" name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <input onClick={this.handleChange} type="submit" className="btn btn-info"></input>
                </form>
            </div>
        )
    }

}

export default Login;

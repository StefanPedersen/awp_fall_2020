import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin() {
        console.log("login", this.state.username, this.state.password);
        this.props.login(this.state.username, this.state.password);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <h3>Login</h3>
                <input onChange={event => this.handleChange(event)}
                       name="username" type="text" placeholder="username"></input><br/>
                <input onChange={event => this.handleChange(event)}
                       name="password" type="password" placeholder="password"></input><br/>
                <button onClick={_ => this.handleLogin()}>Login</button>
            </>
        );
    }
}

export default Login;

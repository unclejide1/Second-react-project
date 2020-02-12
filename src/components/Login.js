import React from 'react'
import PropTypes from "prop-types";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in Manage your store's Inventory</p>
        <button className="github" onClick={() => props.authenticate('Github')}>Log in With Github</button>
        <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log in With Facebook</button>
    </nav>
)

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login
import React from "react";
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className="row">
            <div className="card-panel col m6 s12 offset-m3">
                <div className="col s12">
                    <h2 className="center-align logo-heading">Distagram</h2>
                </div>
                <form className="col s12">
                    <div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                                <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Sign up</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="section center-align ">
                    <Link to="/signIn">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;

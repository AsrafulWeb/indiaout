import React from 'react';
import logo from "./../../logo/boycott_indian_products_abrar_fahad.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-page-main'>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="p-3 rounded-3 border mt-5">
                            <div className="text-center">
                                <img src={logo} alt="" className="" style={{ maxHeight: "100px", maxWidth: "100px" }} />
                                <h2 className='mt-3'>Sign In Admin Or Editor</h2>
                            </div>
                            <br />
                            <form action="" className="login-fom">
                                <div class="mb-3">
                                    <label for="loginFormEmail" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="loginFormEmail" placeholder="example@gmail.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="loginFormPassword" class="form-label">Password</label>
                                    <input type="password" id="loginFormPassword" class="form-control" placeholder="example256#"/>
                                </div>
                                <br />
                                <input type="submit" value="Sign In" className='btn btn-danger w-100 mb-2' />
                                <Link to="/" className='btn btn-primary w-100 btn-sm'>Back To Home</Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
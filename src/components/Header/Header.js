import React from 'react';
import './Header.css';
import headerLogoImg from './../../logo/boycott_indian_products_abrar_fahad.jpg';

const Header = () => {

    return (
        <div className='header-main'>
            <nav class="navbar navbar-expand-lg bg-light header-main-section border-bottom">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        {/* <h4 className='header-logo-main-text'>INDIA OUT </h4> <br />
                        <small className='header-logo-small-text'>BANGLADESH</small> */}
                        <img src={headerLogoImg} alt="" className="header-logo-img" style={{ width: "70px" }} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/indian-products">Indian Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/bd-products">Deshi Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Daily</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <form className='header-search-form' action='/news'>
                                <div class="mb-3 d-flex header-search">
                                    <input type="email" class="form-control me-2 header-search-input" id="headerSearchInput" placeholder='Search News' />
                                    <button type="submit" class="btn btn-primary">Search</button>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
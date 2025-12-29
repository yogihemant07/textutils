import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

export default function Navbar(props) {

    const[colorText, SetColorText ] = useState('#563d7c');


    const onChangeColor = (e) => {
        const selectedColor = e.target.value;
        props.SetColor(selectedColor);
        SetColorText(selectedColor);
    };


    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>

                        <div className="mx-2">
                            {/* <label htmlFor="exampleColorInput" className="form-label">Color picker</label> */}
                            <input type="color" className="form-control form-control-color" id="exampleColorInput" onChange={onChangeColor} value={colorText} title="Choose your color"></input>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
                            <label className="form-check-label-dark" htmlFor="switchCheckDefault">Dark Mode</label>
                        </div>
                        <form className="d-flex mx-2" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    mode: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'Set About Text',
};
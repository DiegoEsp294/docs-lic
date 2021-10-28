import React from "react";

const Footer = ({imgGithub, imgLinkedin}) => {
    return (
    <div>
        <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
                <a 
                    className="nav-link" 
                    href="https://github.com/DiegoEsp294/docs-lic" 
                >
                    <img 
                        src={imgGithub}
                        className="img-fluid"
                        style={{backgroundColor: '#FFFFFF'}}
                        alt="Responsive image" 
                        width='70px' 
                        height='70px'/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/diego-espindola-5898a4149/">
                    <img 
                        src={imgLinkedin} 
                        className="img-fluid"
                        style={{backgroundColor: '#FFFFFF'}}
                        alt="Responsive image" 
                        width='100px' 
                        height='90px'/>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Footer;

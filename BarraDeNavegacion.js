import React from "react";

const BarraDeNavegacion = () => {
    const logoURL = "https://d1fdloi71mui9q.cloudfront.net/9tj8xOS1SC620XXzpJjL_ccedf6978f6169ef392e1c6f3215969b8";
    
    return (
        <nav>
            <div />
            <div>    
                <img className = "navBar-logo"
                    src = {logoURL} 
                    alt = "Houm-logo"
                /> 
            </div>
            <div />
        </nav>
    );    
};

export default BarraDeNavegacion;

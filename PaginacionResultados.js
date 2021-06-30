import React from 'react';

const PaginacionResultados = (props) => {
    const {onBackClick, onForwardClick, page, totalPages} = props;

    return (
        <div className = "pagination">
            <button 
                onClick = {onBackClick}
            >
                <div>
                    atras
                </div>
            </button>
            <div>
                {page} de {totalPages}
            </div>
            <button 
                onClick = {onForwardClick}
            >
                <div>
                    adelante
                </div>
            </button>
        </div>
    )
}

export default PaginacionResultados;
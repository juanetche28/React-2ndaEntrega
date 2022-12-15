import React from "react";

const Item = ({item}) => {
    return(
        <div className="card mb-3 fondoBody">
            <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
            <div className="card-body text-center">
                <p className="card-text"><b>{item.nombre}</b></p>
            </div>
        </div>
    )
}

export default Item;

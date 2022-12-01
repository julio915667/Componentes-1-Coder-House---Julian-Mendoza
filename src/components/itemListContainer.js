import React from 'react';

function ItemListContainer({welcome}){
    return (
        <main>
            <h1 className="colorWhite animate__backInDown">{welcome}</h1>
        </main>
    );
}

export default ItemListContainer;
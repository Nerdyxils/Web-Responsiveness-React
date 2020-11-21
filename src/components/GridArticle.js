import React from 'react'

function GridArticle (props) {
    return (
        <div className="grid_article__text col">
            <h2 className="grid__header">
                {props.name}
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic explicabo itaque dolorum omnis repudiandae quasi!
            </p>
        </div>
    )
}


export default GridArticle
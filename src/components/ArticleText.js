import React, {Components} from 'react'

function ArticleText (props) {
    return (
        <div className="article__text col">
            <h2 className="article__header">
                {props.name}
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic explicabo itaque dolorum omnis repudiandae quasi. 
                Pariatur quis commodi dicta. Dolorum nihil reiciendis 
                doloremque quaerat sunt!
            </p>
        </div>
    )
}


export default ArticleText
import React, {Components} from 'react'
import image from '../images/flexbox-img.jpg'

export class ArticleOne extends React.Component {
    render () {
        return (
            <article className="article__one--text">
               <h2>It doesn't have to be so hard</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                   Ipsum dolorum deserunt recusandae minima, nobis in ullam ea quis hic accusamus, 
                   accusantium nisi nam dolor. Ipsam ex debitis deserunt quisquam voluptate amet ipsa eveniet, 
                   enim consequatur doloribus saepe minus molestiae odio quae? In recusandae dicta vitae!</p>
               <img src={image} alt="flexbox-image" />
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                   Ipsum dolorum deserunt recusandae minima, nobis in ullam ea quis hic accusamus, 
                   accusantium nisi nam dolor. Ipsam ex debitis deserunt quisquam voluptate amet ipsa eveniet, 
                   enim consequatur doloribus saepe minus molestiae odio quae? In recusandae dicta vitae!</p>
            </article>
        )
    }
};
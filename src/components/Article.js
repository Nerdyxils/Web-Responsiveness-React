import React, {Components} from 'react'
import ArticleText from './ArticleText'


export class Article extends React.Component {
    render () {
        return (
            <article className="article">
               <div className="container">
                   <div className="row article__content">
                        <ArticleText name= "Mobile-first"/>
                        <ArticleText name= "Efficient"/>
                        <ArticleText name= "Done right"/>
                   </div>
               </div>
            </article>
        )
    }
};
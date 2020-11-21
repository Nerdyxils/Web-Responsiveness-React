import React, {Components} from 'react'
import GridArticle from './GridArticle'


export class ArticleTwo extends React.Component {
    render () {
        return (
            <article className="article__two--text">
               <div className="container article__two--content">
                   <GridArticle name= "Break it down"/>
                   <GridArticle name= "Work your way up"/>
                   <GridArticle name= "Break it down"/>
               </div>
            </article>
        )
    }
};
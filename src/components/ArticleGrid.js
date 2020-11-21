import React, {Component} from 'react'
import {ArticleOne} from './ArticleOne'
import {ArticleTwo} from './ArticleTwo'


export class ArticleGrid extends React.Component {
    render () {
        return (
            <article className="article--grid">
               <div className="container row article__content">
                   <ArticleOne />
                   <ArticleTwo />
               </div>
            </article>
        )
    }
};
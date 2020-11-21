import React, {Components} from 'react'

export class Main extends React.Component {
    render () {
        return (
            <div className="main">
               <div className="container row main__content">
                   <div className="col big__text">
                       <h1>Responsive layouts  
                           <span className="gold__text">
                             don't have to be a struggle
                            </span>
                        </h1>
                   </div>
                   <div className="col small__text">
                       <p className="text__main">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Quam nisi cum neque alias eveniet adipisci est atque ipsa provident labore.
                       </p>
                       <button type="button" className="btn btn__one">I WANT TO LEARN</button>
                   </div>
               </div>
            </div>
        )
    }
};
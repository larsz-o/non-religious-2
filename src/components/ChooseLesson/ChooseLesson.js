import {useState} from 'react';
import data from './lessonMetaData'

import LayoutPicker from '../Layouts/LayoutPicker';

const ChooseLesson = () => {

  const [lesson] = useState([data])
  const [introState, setIntroState] = useState(true)

  return (
    <main className="dark-mode">
      {introState ? (<div className="content">
        <div className="flex-box flex-center">
          {lesson.map((lesson, i) => {
            return (
              <div
                key={i}
                className="lesson-div-whole flex-box flex-center"
              >
                <div className="lesson-div flex-box flex-column column-lg-5 column-sm-12 column-md-12">
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="lesson-image-picker"
                  />
                  <h3 className="lesson-title-picker">{lesson.title}</h3>
                  <div className="column-lg-12 column-sm-12 column-md-12">
                    <div className="flex-box flex-center">
                 
                      <button
                        className="button button-dark"
                        onClick={() => setIntroState(false)}
                      >   
                        Start 
                      </button>
                     
                      
                    </div>
                  </div>
                </div>
                <div className="info-div column-lg-5 column-sm-12 column-md-12">
                    <div className="info-box">
                  <p>{lesson.metadata.description}</p>
                  </div>
                  <div className="info-box-trans">
                  <p>As a result of this lesson, you will be able to:</p>
                  <ul>
                  {lesson.metadata.objectives.map((objective, i) => {
                    return <li key={i}>{objective}</li>;
                  })}
                  </ul>
                  </div>
                  <p className="flex-box">
                    {lesson.metadata.themes.map((theme, i) => {
                      return <div className="theme-keyword" key={i}>{theme} </div>;
                    })}
                  </p>
                  <p><em>This case study was developed by: {lesson.metadata.contributors.map((person, i)=>{
                      return(
                          <span key={i}>{person} </span>
                      )})}</em></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>):(<div><LayoutPicker/></div>)}
    
  </main>
  )
  
  }
  export default ChooseLesson;

  



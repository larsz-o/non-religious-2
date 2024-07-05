import { useState, useEffect } from 'react';
import lessonData from '../ChooseLesson/lessonData'
import ProgressBar from '../Header/ProgressBar';
const LayoutPicker = () =>{
    const [lesson] = useState(lessonData);
    const [scene, updateScene] = useState(lesson[1])
    const [layoutNumber, updateLayoutNumber] = useState(scene.layoutNumber)
    const [completedPercent, updateCompletedPercent] = useState()

    useEffect(() => {
        updateLayoutNumber(scene.layoutNumber)
        let completedPercent = ((parseInt(scene.scene_number)/Object.keys(lesson).length) * 100).toFixed(2);
        updateCompletedPercent(completedPercent)
    })
return(
    <div>
        <div className="flex-box flex-end">
                   <div className="column-lg-3 column-md-3 column-sm-3">
                   <ProgressBar completed={completedPercent}/>
                    </div>
              </div>
    </div>
)
}
export default LayoutPicker;
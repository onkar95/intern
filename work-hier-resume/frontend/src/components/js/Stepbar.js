import React from 'react'
import Step from './Step'
import '../css/student.css'

const Stepbar = (props) => {
    return (
            <div className="stepWrapper">
                {props.labelArray.map((val, index) =>
                    <Step
                        label={val}
                        index={index}
                        key={index}
                        selected={props.currentStep === index + 1}
                        updateStep={props.updateStep}
                        currentStep={props.currentStep}
                    ></Step>
                )}
            </div>
    )
}

export default Stepbar

import React from 'react'
import Button from '../../../comonents/button/Button'

function StepName({onNext}) {
  return (
    <>
      <div>StepName</div>
      <Button text="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepName
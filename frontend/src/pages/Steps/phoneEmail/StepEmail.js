import React from 'react'
import Button from '../../../comonents/button/Button'

function StepEmail({onNext}) {
  return (
    <>
      <div>StepEmail</div>
      <Button text="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepEmail
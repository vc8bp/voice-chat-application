import React from 'react'
import Button from '../../../comonents/button/Button'

function StepUsername({onNext}) {
  return (
    <>
      <div>StepUsername</div>
      <Button text="Next" onClick={onNext}></Button>
    </>

  )
}

export default StepUsername
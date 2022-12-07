import React from 'react'
import Button from '../../../comonents/button/Button'

function StepOtp({ onNext}) {
  return (
    <>
        <div>StepOtp</div>
        <Button text="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepOtp
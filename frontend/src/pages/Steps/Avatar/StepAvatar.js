import React from 'react'
import Button from '../../../comonents/button/Button'

function StepAvatar({onNext}) {
  return (
    <>
      <div>Avatar</div>
      <Button text="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepAvatar
import React from 'react'
import styles from './Email.module.css'

function Email({update}) {
  return (
    <>
      <input onChange={e => update(v => ({...v, data: e.target.value, type: "email"}))} type="email"></input>
    </>
  )
}

export default Email
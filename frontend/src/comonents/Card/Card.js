import React from 'react'
import styles from './Card.module.css'

function Card({img, title, children}) {
  return (
    <div className={`${styles.card}`}>
        <div className={`${styles.hedingWrapper}`}>
            {img}
            <h1>{title}</h1>
        </div>
        {children}

    </div>
  )
}
export default Card
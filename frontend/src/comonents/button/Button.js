import styles from "./Button.module.css"

function Button({text, onClick}) {
  return (
    <button onClick={onClick} className={styles.btn}>
        <span>{text}</span>&rarr;
    </button>
  )
}

export default Button
import styles from './buttonsContainer.module.css';
const ButtonsContainer = () => {

    const buttonNames = ['C', '%', '/', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '0', '=', '00', '.'];
    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map((buttonName) => <button className={styles.button}>{ buttonName}</button>)}
      </div>
    )
}
export default ButtonsContainer;
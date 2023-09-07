import styles from './Button.module.css';

function Button({className,name,funcName}){
    return(
        <>
            <button type='submit' className={styles[className]} onClick={funcName}>{name}</button>
        </>
    );
}

export default Button;
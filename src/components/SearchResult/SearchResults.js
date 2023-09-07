import Track from '../Track/Track';
import styles from './SearchResult.module.css';

function SearchResult(){
    return(
        <div className={styles.result_container}>
            <h1>Results</h1>
            <div className={styles.resultList}>
                <Track />
                <Track />
            </div>
        </div>
    );
}

export default SearchResult;
import styles from './SearchBar.module.css';
import Button from '../Button';

function SearchBar(){

    const search = () =>{

    }

    return (
        <div className={styles.search_container}>
            <form>
                <input type='text' placeholder='Enter a song title'/>
                <Button className='search' name='search' funcName={search}/>
            </form>
        </div>
    );
}

export default SearchBar;
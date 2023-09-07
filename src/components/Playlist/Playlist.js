import Button from '../Button';
import styles  from './Playlist.module.css';

function Playlist(){

    const saveToSpotify = () => {
        alert('');
    }

    return(
        <div className={styles.playlist_container}>
            <form>
                <input type='text' />
                <div className={styles.playlist}>

                </div>
                <Button className='save' name='save to spotify' funcName={saveToSpotify} />
            </form>            
        </div>
    );
}


export default Playlist;
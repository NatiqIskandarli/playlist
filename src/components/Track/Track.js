import Button from "../Button";
import styles from "./Track.module.css";

function Track(){

    const addTrack = () =>{

    }

    return (
        <div className={styles.track_container}>
            <div className={styles.track}>
                <h2>Song name </h2>
                <h3>Artist Name</h3>
            </div>
            <div className={styles.addTrack}>
                <Button className='addButton' name='+' funcName={addTrack}/>
            </div>
        </div>
    );
}


export default Track;
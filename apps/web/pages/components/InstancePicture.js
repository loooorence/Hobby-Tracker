import styles from "./instanceWindow.module.css"
import {useState} from "react";

function InstancePicture(props) {
    const [enteredDate, setEnteredDate] = useState('');

  return (
    <div>
      <button className={styles.instance__picture}>picture</button>
      <button type ='button' onClick={props.onCancel}>cancel</button>
    </div>
  );
}

export default InstancePicture;

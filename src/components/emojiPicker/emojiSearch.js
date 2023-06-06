import { useState } from "react";

import styles from "./emojiPicker.module.scss";

export default function EmojiSearch({ onSearch }){
    const [val, setValue] = useState(""); 

    function handleChange(e){
        setValue(e.target.value);
        onSearch(e.target.value);
    }

    return (<input className={styles.search} type="text" onChange={handleChange} value={val} />);
}
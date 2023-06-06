import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInmput(){
    const refInput = useRef(null);

    return (
    <div>
        <input ref={refInput}/>
        <EmojiPicker ref={refInput}/>
    </div>
    );
}
import { forwardRef, useState } from "react"
import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";
import EmojiButton from "./emojiButton";

import styles from "./emojiPicker.module.scss";

export function EmojiPicker(props, refInput){
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);

    function handleClick(e){
        setIsOpen(!isOpen);
    }

    function hanldeSearch(e){
        const q = e;
        if(!!q){
            const search = emojiList.filter((emoji) => {
                return (
                    emoji.name.toLowerCase().includes(q) || 
                    emoji.keywords.toLowerCase().includes(q)
                );
            });
            setEmojis(search);
        }else{
            setEmojis(emojiList);
        }
    }

    function hanldeOnClickEmoji(emoji){
        const cursorPos = refInput.current.selectionStart;
        const text = refInput.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        refInput.current.value = prev + emoji.symbol + next;
        refInput.current.selectionStart = cursorPos + emoji.symbol.length;
        refInput.current.selectionEnd = cursorPos + emoji.symbol.length;
        refInput.current.focus();
        setIsOpen(false);
        setEmojis(emojiList);
    }

    return (
        <div className={styles.inputContainer}>
            <button className={styles.emojiPickerButton} onClick={handleClick}>😇</button>
            { isOpen ? (
            <div className={styles.emojiPickerContainer}>
                <EmojiSearch onSearch={hanldeSearch} />
                <div className={styles.emojiList}>
                    { emojis.map((emoji) => (
                        <EmojiButton key={emoji.symbol} onClick={hanldeOnClickEmoji} emoji={emoji}></EmojiButton>
                    ))}
                </div>
            </div>) : "" }
        </div>
    );
}

export default forwardRef(EmojiPicker);
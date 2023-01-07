import "./NewBook.css";
import Form from "./Form";
import { useState } from "react";
function NewBook(props) {
    const [isEditing, setisEditing] = useState(false)
    const saveBookData = (e) => {
        const BookData = {
            ...e,
            id: Math.random().toString(),
        };
        props.onSave(BookData)
    };
    const show = () => {
        setisEditing(true)
    }
    const stopCancel = () => {
        setisEditing(false)
    }
    return (
        <div className="new-book">
            {!isEditing && (
                <button type="submit" onClick={show}>Add New Book</button>
            )}
            {isEditing && (<Form
                onsaveData={saveBookData} onCancel={stopCancel}
            />)
            }
        </div>
    );
}

export default NewBook;
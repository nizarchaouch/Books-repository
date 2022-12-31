import { useState } from "react";
import "./Form.css"
function Form(props) {
    const [book, setBook] = useState({
        image: "",
        title: "",
    });
    const [imageIsValid, setimageIsValid] = useState(true);
    const [titleIsValid, setTitleIsValid] = useState(true);
    const ImageHandler = (event) => {
        setBook({ ...book, image: event.target.value });
        setimageIsValid(true);
    }
    const TitleHandler = (event) => {
        setBook({ ...book, title: event.target.value });
        setTitleIsValid(true);
    };
    const submit = (event) => {
        event.preventDefault();
        if (book.image.trim() === "") {
            setimageIsValid(false);
        }
        if (book.title.trim() === "") {
            setTitleIsValid(false);
        }
        const newBook = {
            ...book,
            image: book.image,
            title: book.title,
        };
        props.onsaveData(newBook);
        console.log(newBook);
        setBook({
            image: "",
            title: "",
        });
    };
    return (
        <form>
                <div className="new-book-controle">
                    <label style={{ color: titleIsValid ? "#FFF8EA" : "red" }}>Title</label>
                    <input type="text" value={book.title} onChange={TitleHandler} />
                    <label>{!titleIsValid ? "*obligatory" : ""}</label>
                </div>
                <div className="new-book-controle">
                    <label style={{ color: imageIsValid ? "#FFF8EA" : "red" }}>Image</label>
                    <input type="url" value={book.image} onChange={ImageHandler} />
                    <label>{!imageIsValid ? "*obligatory" : ""}</label>
                </div>
                <button type="submit" onClick={submit}>
                    Add Book
                </button>
                <button type="reset" onClick={props.onCancel}>
                    Cancel
                </button>
        </form>
    );
}

export default Form;
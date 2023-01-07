import { useState } from 'react';
import './FindBook.css'
import axios from 'axios';
import Card from './Card';

function FindBook() {
   /*  const [search, setsearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyCgTzxNyBTZLVvTtCBK6joWCxHaSy9gZQo' + '&maxResults=21')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    const bookList = bookData.map((item) =>
    <Card key={item.id} iamge={item.imageLinks.smallThumbnail} title={item.title} />
  ); */
return (
        <>
            <div className="row">
                <h1>Find Your Book Here</h1>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book"
                        /* value={search}
                        onChange={e => setsearch(e.target.value)}
                        onKeyPress={searchBook} */
                    />
                    <button ><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </>
    );
}

export default FindBook;
import '../App.css';
import '../Components/Card.css';
import FindBook from '../Components/FindBook';
import NewBook from '../Components/NewBook';
import Card from '../Components/Card';
import { useState } from 'react';

function Home() {
  const [books, setbooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isbtn, setbtn] = useState(true);
  const getbooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCgTzxNyBTZLVvTtCBK6joWCxHaSy9gZQo" + '&maxResults=23');
      if (!response.ok) {
        throw new Error("Something went wrong!!!!");
      }
      const data = await response.json();
      const fetchedbooks = data.items.map((book) => {
        return { ...book.volumeInfo, id: Math.random().toString(), };
      });
      console.log(fetchedbooks);
      setbooks(fetchedbooks);
    } catch (error) {
      alert("something went wrong!")
    }
    setIsLoading(false);
    setbtn(false)
  };
  const addBookHandler = (newbook) => {
    console.log(newbook);
    setbooks([...books, newbook]);
    console.log(books);
  };
  const bookList = books.map((item) =>
    <Card key={item.id} iamge={item.imageLinks.smallThumbnail} title={item.title} />
  );
  const loadingList = <h1 className='loading' >loading...</h1>
  const btn = <button className='btn' onClick={getbooks}>Get books</button>

  return (
    <>
      <div className="header">
        <FindBook />
        <NewBook onSave={addBookHandler} />
      </div>
      {isLoading && loadingList}
      <div className="container">
        {!isLoading && bookList}
      </div>
      {isbtn && btn}
    </>
  );
}

export default Home;
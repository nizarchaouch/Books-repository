import './App.css';
import './Components/Card.css';
import NewBook from './Components/NewBook';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  const books=[
    {
      id:"1",
      image:"//books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      title:"React js",
      amount:"$320",
    },
  //   {
  //     image:"www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //     title:"javaScripte",
  //     amount:"$500",
  //   },
  //   // {
  //   //   image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //   //   title:"React js",
  //   //   amount:"$320",
  //   // },
  //   // {
  //   //   image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //   //   title:"React js",
  //   //   amount:"$320",
  //   // },
  ]

  

  const [book, setbook] = useState(books);
  console.log(book);
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    const updatedbook = [...book, newExpense];
    setbook(updatedbook);
    console.log(book);
  };
  const bookList = book.map((item) => <Card key={item.id} img={item.image} title={item.title}/>);
  return (
    <>
    <div className="header">
      <NewBook onSave={addExpenseHandler}/>
    </div>
      <div className="container">
      {bookList}
      </div>
    
    </>
  );
}

export default App;

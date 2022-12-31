import './App.css';
import './Components/Card.css';
import NewBook from './Components/NewBook';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  // const books = [
  //   {
  //     id: "1",
  //     image: "//books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  //     title: "React js",
  //     amount: "$320",
  //   },
  //     {
  //       image:"www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //       title:"javaScripte",
  //       amount:"$500",
  //     },
  //     {
  //       image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //       title:"React js",
  //       amount:"$320",
  //     },
  //     {
  //       image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbook&psig=AOvVaw33WPoOlWqfP_fY6H3fuuW8&ust=1671950915917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiYudXUkfwCFQAAAAAdAAAAABAJ",
  //       title:"React js",
  //       amount:"$320",
  //     },
  // ]
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getExpenses = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCgTzxNyBTZLVvTtCBK6joWCxHaSy9gZQo" + '&maxResults=21');
      if (!response.ok) {
        throw new Error("Something went wrong!!!!");
      }
      const data = await response.json();
      const fetchedExpenses = data.items.map((expense) => {
        return { ...expense.volumeInfo };
      });
      console.log(fetchedExpenses);
      setExpenses(fetchedExpenses);
    } catch (error) {
      console.log("something went wrong!2");
      alert("something went wrong!")
    }
    setIsLoading(false);
  };
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses([...expenses, newExpense]);
        console.log(expenses);
  };
   const bookList = expenses.map((item) => 
    <Card key={item.id} iamge={item.imageLinks.smallThumbnail} title={item.title} />
  ); 
  const loadingList = <h1 className='loading' >loading...</h1>
  return (
    <>
      <div className="header">
        <NewBook onSave={addExpenseHandler} />
      </div>
      {isLoading && loadingList}
      <div className="container">
        {!isLoading &&bookList}
       {/*  {!isLoading && <Card books={expenses}/>} */}
        
      </div>
      <button className='btn' onClick={getExpenses}>Get Expenses</button>
      
    </>
  );
}

export default App;

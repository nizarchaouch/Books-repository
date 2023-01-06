import './App.css';
import './Components/Card.css';
import FindBook from './Components/FindBook';
import NewBook from './Components/NewBook';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isbtn, setbtn] = useState(true);
  const getExpenses = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCgTzxNyBTZLVvTtCBK6joWCxHaSy9gZQo" + '&maxResults=21');
      if (!response.ok) {
        throw new Error("Something went wrong!!!!");
      }
      const data = await response.json();
      const fetchedExpenses = data.items.map((expense) => {
        return { ...expense.volumeInfo, id: Math.random().toString(), };
      });
      console.log(fetchedExpenses);
      setExpenses(fetchedExpenses);
    } catch (error) {
      console.log("something went wrong!2");
      alert("something went wrong!")
    }
    setIsLoading(false);
    setbtn(false)
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
  const btn = <button className='btn' onClick={getExpenses}>Get Expenses</button>
  return (
    <>
      <div className="header">
        <FindBook />
        <NewBook onSave={addExpenseHandler} />
      </div>
      {isLoading && loadingList}
      <div className="container">
        {!isLoading && bookList}

      </div>
      {isbtn && btn}
    </>
  );
}

export default App;

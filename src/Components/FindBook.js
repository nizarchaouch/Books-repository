import './FindBook.css'

function FindBook() {
    return (
            <div className="row">
                <h1>Find Your Book Here</h1>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book"
                        // value={search}
                        // onChange={e => setsearch(e.target.value)}
                        // onKeyPress={searchBook}
                    />
                    <button ><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
    );
}

export default FindBook;
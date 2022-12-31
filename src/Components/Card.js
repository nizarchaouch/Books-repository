import './Card.css';
function Card(/* { books }, */props) {
    /* return (
        <>
            <div className="card">
                <img src={props.iamge} alt="image book" />
                <h3 className='title'>{props.title}</h3>
            </div>
        </>
    ) */
    return (
        <>
            {/* {
                //https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCgTzxNyBTZLVvTtCBK6joWCxHaSy9gZQo
                books.map((item) => {
                   let img=item.imageLinks.smallThumbnail;
                   let title=item.title;
                    if(img!=undefined&&title!=undefined){
                        return (
                            <>
                                <div className="card">
                                    <img src={img} alt="image book" />
                                        <h3 className='title'>{title}</h3>
                                </div>
                            </>
                        )
                    }
                    
                })
            } */}
            <div className="card">
                <img src={props.iamge} alt="image book" />
                <h3 className='title'>{props.title}</h3>
            </div>
        </>
    );
}

export default Card;
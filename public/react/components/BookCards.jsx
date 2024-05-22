import { Link } from 'react-router-dom'

function BookCard(props) {
    const {id, title, author, description, price, quantity, genre, img} = props.bookInfo
    return (
        <>
            <div className="book-card">
                <img src={img} />
                <h3>{title}</h3>
                <p>{author}</p>
            <Link to={`/books/${id}`}>
                <button>Details</button>
            </Link>
        </div>
        </>
    )
}

export default BookCard
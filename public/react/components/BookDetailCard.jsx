import { Link } from 'react-router-dom'

function BookDetailCard(props) {
    const { id, title, author, description, price, quantity, genre, img } = props.bookInfo
    
    console.log(props)

    return (
        <>
            <div className="book-card">
                <img src={img} />
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p>{genre}</p>
        </div>
        </>
    )
}

export default BookDetailCard
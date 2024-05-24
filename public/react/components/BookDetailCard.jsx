import { Link } from 'react-router-dom'
import axios from 'axios'
import apiURL from '../api';

function BookDetailCard(props) {
    const { id, title, author, description, price, quantity, genre, imageUrl } = props.bookInfo
    
    const handleDelete = async () => {
        try {
          await axios.delete(`${apiURL}/books/${id}`)
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            <div className="book-card">
                <img src={imageUrl} />
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p>{genre}</p>
                <Link to={`/books`}>
                    <button onClick={handleDelete}>Delete</button>
                </Link>
                <Link to={`/edit-book/${id}`}>
                    <button>Edit</button>
                </Link>
        </div>
        </>
    )
}

export default BookDetailCard

import { Link } from 'react-router-dom'
import axios from 'axios'
import apiURL from '../api';

function BookDetailCard(props) {
    const { id, title, author, description, price, quantity, genre, img } = props.bookInfo
    
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
                <img src={img} />
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p>{genre}</p>
                <Link to={`/`}>
                    <button onClick={handleDelete}>Delete</button>
                </Link>
                <Link to={`/books/${id}`}>
                    <button>Edit</button>
                </Link>
        </div>
        </>
    )
}

export default BookDetailCard
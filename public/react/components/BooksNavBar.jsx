import { Link } from "react-router-dom";

function BooksNavBar() {
    return (
        <>
            <Link to="/">Home Page</Link>
            <Link to="/new-book">Add Item</Link>
        </>
    )
}

export default BooksNavBar
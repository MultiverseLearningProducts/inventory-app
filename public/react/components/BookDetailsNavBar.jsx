import { Link } from "react-router-dom";

function BooksDetailsNavBar() {
    return (
        <>
            <Link to="/">Home Page</Link>
            <Link to="/books">Inventory</Link>
        </>
    )
}

export default BooksDetailsNavBar
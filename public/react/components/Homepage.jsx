import { Link } from "react-router-dom"

function HomePage() {
    return (
        <>
            <h1>Home page</h1>
            <Link to={`/books`}>
                <button>Check inventory</button>
            </Link>
        </>
    )
}

export default HomePage
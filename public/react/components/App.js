import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "./Books"

function App () {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
	
}

export default App
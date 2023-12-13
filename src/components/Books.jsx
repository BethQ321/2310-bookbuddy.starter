import { Link } from 'react-router-dom'

const Books = ({books}) => {

    return(
        <div>

            <h1>Books</h1>
            <ul>
                {
                    books.map((book) => {
                        const inStock = book.available ? "yes" : "no"
                        return (
                            <li key={book.id}>
                                <Link to={`/books/${book.id}`}>
                                    {book.title} </Link> available: {inStock}
                            </li>
                        )
                    })
                }
            </ul>
        
        </div>
    )
}

export default Books
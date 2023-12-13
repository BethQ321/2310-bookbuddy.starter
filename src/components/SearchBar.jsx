import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = ({books}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = books.filter((book) => {
        return book.title.indexOf(searchTerm) !== -1
    })

    return(
        <div>
            <label>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
            </label>
            {
                searchTerm.length > 0 ?
                    <div>
                        <h3>Viewing {filteredTerms.length} of {books.length}</h3>
                        <ul>
                            {
                                filteredTerms.map((book) => {
                                    return (
                                        <li key={book.id}>
                                            <Link to={`/books/${book.id}`}>
                                                {book.title}    
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                : null
            }
        </div>
    )
}

export default SearchBar
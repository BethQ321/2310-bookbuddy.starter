import { Link, useParams } from 'react-router-dom'

const SingleBook = ({books}) => {

    const params = useParams()
    const id = params.id*1

    const oneBook = books.find((book) => {
        return book.id === id
    })

    

    if(!oneBook) {
        return null
    } else {
        const inStock = oneBook.available ? "yes" : "no"
        console.log(oneBook)
        return (
            <div>
                <h1>{oneBook.title}</h1>
                <h3>{oneBook.author}</h3>
                <h3>Available to checkout: {inStock}</h3>
                <p>{oneBook.description}</p>
                <img className="width" src={oneBook.coverimage} /> 
                <br />
                <Link to='/books'>Back to books</Link>      
            </div>
        )
    }

}

export default SingleBook
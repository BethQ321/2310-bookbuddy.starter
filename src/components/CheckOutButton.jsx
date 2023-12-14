import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const CheckOutButton = ({books}) => {
    
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    const oneBook = books.find((book) => {
        return book.id === id
    })

    const handleSubmit = async (event) => {
        event.preventDefault()

        const loggedInToken = window.localStorage.getItem('token')
        console.log({oneBook})
        if(loggedInToken){
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${oneBook.id}`, {available: false}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
            }
            })
            navigate(`/books/${oneBook.id}`)
            console.log(response)
        }else{            
            throw 'no token'
        }
    }

    return(
        <div>
            <button onClick={handleSubmit}>
                Check out book
            </button>
        </div>
    )

}

export default CheckOutButton
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const CheckOutButton = ({books, user, setUser}) => {
    
    const params = useParams()
    const id = params.id*1

    const navigate = useNavigate()

    const oneBook = books.find((book) => {
        return book.id === id
    })

    const handleSubmit = async (event) => {
        event.preventDefault()

        const loggedInToken = window.localStorage.getItem('token')
        
        if(loggedInToken){
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${oneBook.id}`, {available: false}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
            }
            })
            console.log({user})
            setUser({books: [...user.books], oneBook})
            navigate(`/account`)
            console.log(response)
        }else{            
            throw 'no token'
        }
    }

    return(
        <div>
            <button disabled={(oneBook.available && id) ? false : true } onClick={handleSubmit}>
                Check out book
            </button>
        </div>
    )

}

export default CheckOutButton
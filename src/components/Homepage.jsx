const Homepage = ({user}) => {
    if(user.email) {
        return <h2>Welcome to our library, {user.firstname} {user.lastname}!</h2>
    } else {
        return <h2>Welcome to our library!</h2>
    }
}

export default Homepage
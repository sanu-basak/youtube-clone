import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    return (
        isMenuOpen && 
        <div className="p-5 shadow-lg w-48">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li>Sports</li>
                <li>Music</li>
                <li>Music</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Music</li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Music</li>
            </ul>
        </div>
    )
}

export default Sidebar
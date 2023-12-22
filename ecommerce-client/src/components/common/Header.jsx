import { Link } from "react-router-dom"


export default function Header() {
    return <header className="container">
        <nav>

        </nav>
        <nav>
            <ul className='flex gap-4'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/products">products</Link></li>
            </ul>
        </nav>
    </header>
}
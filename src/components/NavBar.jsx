import { CarWidget } from './CarWidget'
import '../App.css'
export const NavBar = () =>(
    <>
    <div className="header">
        <div>
            <h1>Ecommerce</h1>
        </div>
        <ul className="listas">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <CarWidget />
    </div>
    </>
)
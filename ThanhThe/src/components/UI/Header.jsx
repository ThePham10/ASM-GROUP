import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Group
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
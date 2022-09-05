import { Link } from "react-router-dom";


function VendingMachine() {

    return (
        <div className="VendingMachine">
            <ul>
                <li><Link to="/candy">
                    Candy
                </Link>
                </li>
                <li><Link to="/soda">
                    Soda
                </Link>
                </li>
                <li><Link to="/chips">
                    Chips
                </Link>
                </li>
            </ul>
        </div>
    );

}



export default VendingMachine;
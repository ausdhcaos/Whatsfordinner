import { Link } from 'react-router-dom';


const buttones = () =>{
    return(
        <div className="container">
            <Link to="/RestLogin">
                <button className="partner_button">
                    Become our partner
                </button>
            </Link>

        </div>
    )
}

export default buttones;

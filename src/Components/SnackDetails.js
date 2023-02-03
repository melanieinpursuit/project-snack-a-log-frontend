import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
// import backSign from "../assets/BACK SIGN.png"
// import editSign from "../assets/EDIT SIGN.png"
// import deleteSign from "../assets/DELETE SIGN.png"
import './SnackDetails.css'
const API = process.env.REACT_APP_API_URL

function SnackDetails () {
    const [snack, setSnack] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    const deleteSnack = () => {
        axios
        .delete(`${API}/snacks/${id}`)
        .then(
            () => {
                navigate(`/snacks`)
            }
        )
        .catch((c) => console.warn("catch", c))
    }

    useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((response) => {
            console.log(response.data)
            setSnack(response.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])
    
    return (
        <article>
        <div>
                <h1 className='snack-name2'>{snack.name}</h1>
                <img className='snack-pic' src={snack.image} alt='snacks' />
            <table className="snack-details">
                <th> {snack.is_healthy ? (
                        <th><img className='heart-solid2' src={heartSolid} alt="healthy" /></th>
                    ) : <th><img className='heart-outline2' src={heartOutline} alt="not healthy" /></th>}
                    <tr>
                        <td><h3 className="protein">Protein:</h3></td>
                        <td><h3 className="protein">{snack.protein}</h3></td>
                    </tr> 
                    <tr>
                        <td><h3 className="fiber">Fiber:</h3></td> 
                        <td><h3 className="fiber">{snack.fiber}</h3></td>
                    </tr>
                    <tr>
                        <td><h3 className="added-sugar">Added Sugar:</h3></td> 
                        <td><h3 className="added-sugar">{snack.added_sugar}</h3></td>
                    </tr>
                </th>
            </table>
            <div className="navigation">
                <div className="back">
                    <Link to={`/snacks`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div className="edit">
                    <Link to={`/snacks/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button className="delete" onClick={deleteSnack}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </article>
    )
}

export default SnackDetails;

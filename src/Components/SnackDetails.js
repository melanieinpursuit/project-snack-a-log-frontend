import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
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
            <div className="snack-details">
                <h1>{snack.name}</h1>
                <br />
                <img className='snack-pic' src={snack.image} alt='snacks' />
                <br />
                {snack.is_healthy ? (
                    <span> <img className='heart-solid' src={heartSolid} alt="healthy" /> </span>
                ) : (<span> <img className='heart-outline' src={heartOutline} alt="not healthy" /></span>)}
                <br />
                <h5>Protein:</h5> <h6>{snack.protein}</h6>
                <br />
                <h5>Fiber:</h5> <h6>{snack.fiber}</h6>
                <br />
                <h5>Added Sugar:</h5> <h6>{snack.added_sugar}</h6>
            </div>
            <div className="navigation">
                <div>
                    <Link to={`/snacks`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/snacks/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={deleteSnack}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </article>
    )
}

export default SnackDetails;

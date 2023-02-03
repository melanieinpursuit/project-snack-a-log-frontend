import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './SnackEditForm.css'
const API = process.env.REACT_APP_API_URL



const SnackEditForm = () => {
    let { id } = useParams();
    let navigate = useNavigate();
  
    const [snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: "",
        protein: "",
        added_sugar: "",
        is_healthy: false
    });
  
    const updateSnack = (updatedSnack) => {
      console.log("IDDDDDD", id);
      axios
        .put(`${API}/snacks/${id}`, updatedSnack)
        .then(
          () => {
            console.log("hello", id);
            navigate(`/snacks/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    };
  
    // const handleCheckboxChange = () => {
    //   setSnack({ ...snack, added_sugar: !snack.added_sugar });
    // };
  
    useEffect(() => {
      axios.get(`${API}/snacks/${id}`)
      .then(
        (response) => setSnack(response.data),
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateSnack(snack);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Snack"
            required
            />
            <label htmlFor="url">URL:</label>
            <input
            id="url"
            type="text"
            pattern="http[s]*://.+"
            value={snack.image}
            placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="fiber">Fiber:</label>
            <input
            id="fiber"
            type="number"
            min='0'
            value={snack.fiber}
            onChange={handleTextChange}
            />
            <label htmlFor="protein">Protein:</label>
            <input
            id="protein"
            type="number"
            min='0'
            value={snack.protein}
            onChange={handleTextChange}
            />
            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
            id="added_sugar"
            type="number"
            min='0'
            value={snack.added_sugar}
            onChange={handleTextChange}
            
            />

            <br />
            <button className="submit" type="submit">Submit</button>
      </form>
            <Link to={`/snacks/${id}`}>
              <button className="back-button">Back</button>
            </Link>
        </div>
    );
};

export default SnackEditForm;
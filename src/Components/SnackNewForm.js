import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL


const SnackNewForm = () => {

    let navigate = useNavigate();

    const [snack, setSnack] = useState({
      name: "",
      image: "",
      fiber: "",
      protein: "",
      added_sugar: "",
      is_healthy: false
    });
  
    const addSnack = (newSnack) => {
      axios
        .post(`${API}/snacks`, newSnack)
        .then(
          () => {
            navigate(`/snacks`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        addSnack(snack);
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
            <label htmlFor="url">Image:</label>
            <input
            id="image"
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
            value={snack.fiber}
            onChange={handleTextChange}
            />
            <label htmlFor="protein">Protein:</label>
            <input
            id="protein"
            type="number"
            value={snack.protein}
            onChange={handleTextChange}
            />
            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
            id="added_sugar"
            type="number"
            onChange={handleTextChange}
            checked={snack.added_sugar}
            />

            <br />
            <input type="submit" />
      </form>
            <Link to={`/snacks/`}>
              <button>Back</button>
            </Link>
            
        </div>
    );
};

export default SnackNewForm;
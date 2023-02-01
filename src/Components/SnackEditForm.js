import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
// import "./Transaction.css"
import axios from "axios";



const SnackEditForm = () => {
    let { id } = useParams();
    let navigate = useNavigate();
  
    const [snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: "",
        protien: "",
        added_sugar: "",
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
      axios.get(`${API}/snacks/${id}`).then(
        (response) => setSnack(response.data),
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateSnack(snack, id);
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
            <label htmlFor="protien">Protien:</label>
            <input
            id="protien"
            type="number"
            value={snack.protien}
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
            
        </div>
    );
};

export default SnackEditForm;
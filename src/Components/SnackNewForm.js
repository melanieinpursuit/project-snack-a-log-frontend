import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SnackNewForm = () => {

    let navigate = useNavigate();

    const [snack, setSnack] = useState({
      name: "",
      image: "",
      fiber: "",
      protien: "",
      added_sugar: "",
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
  
    // const handleCheckboxChange = () => {
    //   setSnack({ ...snack, added_sugar: !snack.added_sugar });
    // };
  
   
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

export default SnackNewForm;
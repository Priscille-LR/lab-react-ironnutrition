import { Divider, Input } from 'antd';
import { useState } from "react";
import { v4 as uuid } from 'uuid';


// Iteration 4
function AddFoodForm({ addFood }) {
    
    //state of each value
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")
    const [servings, setServings] = useState(0)
    

    //handler function
    const handleName = (event) => setName(event.target.value)
    const handleCalories = (event) => setCalories(event.target.value)
    const handleImage = (event) => setImage(event.target.value)
    const handleServings = (event) => setServings(event.target.value)

    //button to submit
    const handleSubmit =(event) => {
        event.preventDefault();
        const newFood = { id : uuid(),  name, image, calories, servings } 
        addFood(newFood)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input name="image" value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input name="calories" value={calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input name="servings" value={servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
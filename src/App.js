import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuid } from 'uuid';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);


  const addFood = (newFood) => {
      const foodListCopy = [...foodList]
      console.log(newFood)
      foodListCopy.push(newFood)
      setFoodList(foodListCopy)
  }

  const handleDelete = (foodName) => {
    const foodListCopy = [...foodList];
    let foodToDelete = foodListCopy.filter((food) => food.name !== foodName);
    setFoodList(foodToDelete);
  }; 

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  if(foodList.length === 0) {
    return (
      <div className="App">
        <h1>No content to show, need to do the groceries</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Empty_fridge.jpg/448px-Empty_fridge.jpg?20140602052324" alt="no food"/>
        <AddFoodForm addFood={addFood} />
      </div>
    )
  }

  return (
    <div className="App">
      <Button onClick={toggleForm}>{showForm ? 'Hide Form' : 'Add New Food'}</Button>

      {showForm && <AddFoodForm addFood={addFood} />} 

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map(({ name, calories, image, servings }) => {
          return (
            <div key={uuid()}>
              <FoodBox
                name={name}
                calories={calories}
                image={image}
                servings={servings}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;

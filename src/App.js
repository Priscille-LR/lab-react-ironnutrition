import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const addFood = (newFood) => setFoodList((foodList) => [...foodList, newFood]);

  const toggleForm = () => setShowForm(!showForm);
  
  const handleSearch = (e) => setSearchInput(e.target.value.toLowerCase());
  
  const handleDelete = (foodName) => {
    const foodListCopy = [...foodList];
    let foodToDelete = foodListCopy.filter((food) => food.name !== foodName);
    setFoodList(foodToDelete);
  };

  if (foodList.length === 0) {
    return (
      <div className="App">
        <h1>No content to show, need to do the groceries</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Empty_fridge.jpg/448px-Empty_fridge.jpg?20140602052324"
          alt="no food"
        />
        <AddFoodForm addFood={addFood} />
      </div>
    );
  }

  return (
    <div className="App">
      <Button onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      {showForm && 
      <Row style={{ width: '100%', justifyContent: 'center'}}>
        <AddFoodForm addFood={addFood} />
      </Row>
      }

      <Row style={{ justifyContent: 'center' }}>
        <SearchBar search={searchInput} handleSearch={handleSearch} />
      </Row>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList
          .filter((food) => food.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map(({ name, calories, image, servings }) => {
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

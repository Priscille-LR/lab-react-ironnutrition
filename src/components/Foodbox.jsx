import React from 'react';
import { Card, Col, Button } from 'antd';


function Foodbox({ name, calories, image, servings, handleDelete }) {


    
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={() => handleDelete(name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default Foodbox;

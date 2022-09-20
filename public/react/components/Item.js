import React from 'react';
import {ItemDetails} from "./ItemDetails"
import apiURL from '../api';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Item = (props,fetchItems) => {
//see wikiverse Page.Js line 16 for reference
  return <>

<div className="d-flex justify-content-center ">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body >
        <Card.Title onClick ={()=> fetchItems (items.id)}>{props.item.title}</Card.Title>
        <Card.Text>
        {props.item.description}
        </Card.Text>
        <Button variant="primary" onClick ={()=> fetchItems (items.id)}>View Item Details</Button>
      </Card.Body>
      </Card>
    </div>
 
  
  


       
  
  </>
} 
	
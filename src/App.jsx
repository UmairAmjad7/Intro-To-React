import Foods from "./Foods";
import Junk from "./Junk";
import ErrorMessage from "./ErrorMessage";
import Drinks from "./Drinks";
import './App.css';
import Container from "./Container";
import AddItem from "./AddItem";
import { useState } from "react";
import DrinDes from "./DrinDes";

function App() {
let [food_items,foodToShow]=useState(["Milk","Meat","Vegetables","Mango","Yougart"]);
let junk_food=["Burger","Pizza","Shawarma","Fries"];
let [drink,setDrinks]=useState(["Milk","Cold Drink","Mint Margarita","Pina Colada"]);



let [DrinkToShow,SetDrinkStat]=useState();

const HandleOnkeyDown=(event)=>{
  if(event.key==='Enter'){
  let newFoodItem=event.target.value;
  let newItems=[...food_items,newFoodItem]
  foodToShow(newItems);
}
}



const HandleDrinksOnKeyDown=(event)=>{
  if(event.key==='Enter'){
  let newDrink=event.target.value;
  let newDrinks=[...drink,newDrink]
  setDrinks(newDrinks);
}
}


let textState= useState();
let textToShow=textState[0];
let SetTextState=textState[1];

 
const HandleOnChange=(event)=>{
  if(event.key==="Enter"){
  console.log(event.target.value);
  SetTextState(event.target.value);
      }
    }
    
  return (<>
 
  <Container>

  <h1>FOOD ITEMS</h1>
   <ul class="list-group">
    <AddItem km={HandleOnkeyDown}></AddItem>
    
{food_items.map((items)=>(
<Foods key={items} food={items}></Foods>

))}
</ul>

<h1>Junk Foods</h1>
<ul class="list-group">
{junk_food.map((junks)=>(
<Junk key={junks} jnk={junks} handleButton={()=>window.alert(`You should not buy ${junks}`)}></Junk>
))}
</ul>

<h1>Drinks</h1>
<DrinDes koko={HandleDrinksOnKeyDown}></DrinDes>
<ul class="list-group">
  {drink.map((item)=>(
    <Drinks key={item} drin={item} handleButton={()=>{window.alert(`${item} bought`)}}></Drinks>
  ))}

</ul>


</Container>
<Container>
  <p>Above mentioned is the list of different food items.</p>
</Container>


</> );  
}

export default App;
 
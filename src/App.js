import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products=[
    {name:'Photoshop', price:'$300'},
    {name:'Video', price:'$20'},
    {name:'PDF Reader', price:'$50'},
    {name:'Scanner', price:'$150'}
  ]

  const nayoks=['Josim','manna','sakib','salman']

 return (
    <div className="App">
      <header className="App-header">
        <h1>
          I am a react person
        </h1>
         
      <Counter></Counter>
      <Users></Users>

    <ul>
      {
        nayoks.map(nayok=><li>{nayok}</li> )
      }
    </ul>

      {
        products.map(pd=> <Product product={pd}></Product>)
      }
        
      </header>
    </div>
  );
}
    
     function Counter(){
       const [count, setCount]=useState(10);
       const increaseHandler = () => {}
      


      return (
        <div>
          <h1>count:{count}</h1>
      
      <button onClick={()=>setCount(count+1)} >Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
      ) }
     

       function Users(){
      const [users,setUsers]=useState([]);

      useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
        
      },[])

         return(
           <div>
           <h1> Server data :{users.length} </h1>
          <ul>
            {
              users.map(user =><li>{user.email}</li>)
            }
          </ul>

           </div>
         )
       }




          function Product(props){

     const ProductStyle = {
    border:'2px solid red',
    margin:"10px",
    backgroundColor:'gray' ,
    height:'400px' ,
    width:'200px' ,
    borderRadius:'10px',
    float:'left'
    
  }
    

  const {name,price}=props.product;
  return (
  <div style={ProductStyle}>
      <h3>{name}</h3> 
      <h1>{price}</h1>
      <button>Buy Now</button>
   </div>

  )
}



export default App;

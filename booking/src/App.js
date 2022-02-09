import React, {useReducer,useState} from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

function App() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form. Thank you for booking with us!')
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  function calcCost(){
    let numHours = formData["hours"];
    let dayOfWeek = new Date(formData["date"]).getDay();
    
    let cost;

    if (dayOfWeek > 4){
      cost = numHours * 150;
    }
    else{
      cost = numHours * 100;
    }
    
    return cost
  }

  return (
    <div className="wrapper">
      {submitting &&
       <div>
       You are submitting the following:
       <ul>
         {Object.entries(formData).map(([name, value]) => (
           <li key={name}><strong>{name}</strong>:{value.toString()}</li>
         ))}
       </ul>
     </div>
     }

      <form onSubmit={handleSubmit}>
        <label> Enter Pickup Date and time:
          <input name="date" type='date' onChange={handleChange}></input>
          <input name="time" type='time' onChange={handleChange} ></input>
        </label>
        <br></br>
        <label> How many hours do you want to book:
          <input name="hours" type="number" min="1" onChange={handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <ul>
      <h4>Cost:</h4>
        <li>Weekday: $100/hours</li>
        <li>Weekend: $150/hours</li>
      <p>Estimate: {calcCost()}</p>  
      </ul>


    </div>
  )
}




export default App;


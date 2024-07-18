import {createStore} from 'redux';
import './App.css';
import apfel from './Components/apfel';


let intialState ={
  apfel:0
};

const apfelReducer = (state = initialState, action)=>
{
  switch(action.type){
    case "add":
      return {apfel: state.apfel +1 }
    case "loscht":
      return {apfel:state.apfel -1 }
    default:
      return state
  }


}

console.log(Store)

function App() {
  return (
    <div className="App">
      <apfel/>
    </div>
  );
}

export default App;

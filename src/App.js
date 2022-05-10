import {API} from "aws-amplify";
import './App.css';
import * as mutations from './graphql/mutations';

async function gqlCreate() {
  console.log("create passed")
  const userData={
    name:"Alu",
    email:"apu@gmail.com"
  }


const userDetails = await API.graphql({query:mutations.createUser,variables:{input:userData}})
console.log(userDetails)
}
function gqlRead() {
  console.log("read passed")
}
function gqlUpdate() {
  console.log("upd passed")
}
function gqlDelete() {
  console.log("del passed")
}
function App() {
  return(
    <div className="App">
      <button onClick={gqlCreate}>Create</button>
      <button onClick={gqlRead}>Read</button>
      <button onClick={gqlUpdate}>Update</button>
      <button onClick={gqlDelete}>Delete</button>
    </div>
  );
}
export default App;

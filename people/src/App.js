import People from "./components/People";
import AddPerson from "./components/AddPerson";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <AddPerson />
      <People />
    </div>
  );
}

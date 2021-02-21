import People from "./components/People"

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <People/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  persons: state.people.persons
});

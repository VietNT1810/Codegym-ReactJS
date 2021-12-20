
const cars = ["MG Hector", "Hyundai Venue"]

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" , color: "red"}}>Tuan Viet</h1>

      <ul>
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>
        })}
      </ul>
    </>
  );
}

export default App;

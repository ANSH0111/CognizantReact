import FlightList from "./FlightList";

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <FlightList canBook={false} />
      <button style={{ marginTop: "10px" }} onClick={onLogin}>Login</button>
    </div>
  );
}
export default GuestPage;
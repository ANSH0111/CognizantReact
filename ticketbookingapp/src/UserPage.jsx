import FlightList from "./FlightList";

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <FlightList canBook={true} />
      <button style={{ marginTop: "10px" }} onClick={onLogout}>Logout</button>
    </div>
  );
}
export default UserPage;
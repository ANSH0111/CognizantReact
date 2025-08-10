import React, { useState } from "react";
import UserPage from "./UserPage";
import GuestPage from "./GuestPage";

// Main App Component
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h1>Ticket Booking App</h1>
      {loggedIn ? (
        <UserPage onLogout={() => setLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
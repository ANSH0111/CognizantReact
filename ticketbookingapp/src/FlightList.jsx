function FlightList({ canBook }) {
    const flights = [
        { id: 1, from: "India", to: "London", time: "10:00 AM", price: "$500" },
        { id: 2, from: "USA", to: "Tokyo", time: "2:00 PM", price: "$800" },
        { id: 3, from: "India", to: "Dubai", time: "6:00 PM", price: "$600" },
    ];

    const handleBook = (flight) => {
        alert(`Ticket booked for flight from ${flight.from} to ${flight.to}!`);
    };

    return (
        <div>
            <h3>Available Flights</h3>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Time</th>
                        <th>Price</th>
                        {canBook && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.from}</td>
                            <td>{flight.to}</td>
                            <td>{flight.time}</td>
                            <td>{flight.price}</td>
                            {canBook && (
                                <td>
                                    <button onClick={() => handleBook(flight)}>Book</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default FlightList;

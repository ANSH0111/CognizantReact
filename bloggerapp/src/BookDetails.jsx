const bookDetails =[
    { title: "Master React", price: 670},
    { title: "Deep dive into Angular 11", price: 800 },
    { title: "Mongo Essentials", price: 450 }
]

const BookDetails = () => {
    return (
        <div className="book-details">
            <h2>Book Details</h2>
            {bookDetails.map((book,index)=>(
                <p key={index}> {book.title} - {book.price} </p>
            ))}
        </div>
    )
};

export default BookDetails;
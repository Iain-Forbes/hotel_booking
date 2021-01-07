const BookingCard = ({booking}) => {

    
return(
    <>
    <p>Name:{booking.name}</p>
    <p>Email:{booking.email}</p>
    <p>Checked In:{booking.checkedIn}</p>
    </>
)
}

export default BookingCard
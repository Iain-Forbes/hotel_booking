import { deleteBooking } from "./BookingService"

const BookingCard = ({booking, delBooking}) => {
    const handelDel = () =>{
        deleteBooking(booking._id)
        .then(() => {
        delBooking(booking._id)
        })
    }

// const checkIn = bookings.fliter(booking => booking.checkedIn ) 
    
return(
    <>
    <p>Name:{booking.name}</p>
    <p>Email:{booking.email}</p>
    <p>Checked In:{booking.checkedIn}</p>
    <button onClick={handelDel}>🗑</button>
    </>
)
}

export default BookingCard
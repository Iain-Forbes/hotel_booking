import BookingCard from "./BookingCard"

const BookingGrid = ({bookings, delBooking}) => {
    const bookinglist = bookings.map((booking) => {
        return <BookingCard booking= {booking} delBooking={delBooking}/>
    });

    return(
        <>
        {bookinglist}
        </>
    )
    
}

export default BookingGrid
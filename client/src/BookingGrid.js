import BookingCard from "./BookingCard"

const BookingGrid = ({bookings}) => {
    const bookinglist = bookings.map((booking) => {
        return <BookingCard booking= {booking}/>
    });

    return(
        <>
        {bookinglist}
        </>
    )
    
}

export default BookingGrid
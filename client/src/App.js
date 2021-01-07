import {useState, useEffect} from "react"
import BookingGrid from "./BookingGrid.js"
import BookingForm "./BookingForm.js"

import './App.css';

function App() {
  const [guestBooking, setGuestBookings] = useState([])
  useEffect(() => {
    getBookings().then((allBookings) =>{
      setGuestBookings(allBookings)
    })
  }, [])

  const addBooking = (booking) => { 
    const temp = guestBooking.map(booking => booking);
    temp.push(booking);
    setGuestBookings(temp); 
  }

  return (
    <BookingGrid bookings={guestBooking}/>
  );
}

export default App;

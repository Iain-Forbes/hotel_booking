const baseURL = 'http://localhost:3000/api/bookings'

export const getBookings = () => {
   return fetch(baseURL)
   .then(result => result.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
   
}
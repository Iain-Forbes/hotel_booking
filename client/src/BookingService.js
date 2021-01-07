const baseURL = 'http://localhost:3000/api/bookings'

export const getBookings = () => {
   return fetch(baseURL)
   .then(result => result.json())
}
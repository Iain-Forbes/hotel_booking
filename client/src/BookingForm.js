import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingFrom = ({ addBooking }) => {
    const [formData, setFormData] = useState ({})
    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData)
        .then(() => {
            addBooking(formData)
        })
    }

    return(
        <>
        <form onSubmit={onSubmit}> 
        <h3>
            Add Booking
        </h3>
        <div>
            <label for="name">Name:</label>
            <input onChange={onChange} type="text" id="name"/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input onChange={onChange} type="text" id="email"/>
        </div>
        <div>
            <label for="checkedIn">Checked In?</label>
            <input onChange={onChange} type="checkbox" id="checkedIn" ></input>
        </div>
        <input type="submit" vaule="save" id="save"/>
        </form>
        </>
    )

}

export default BookingFrom
import axios from "axios";
import { toast } from "react-toastify";

export const addUserData = () => async (dispatch) => {
    try {
        dispatch(addUserStart());
        const response = await axios.post("http://localhost:5000/users/add", {
            name,
            email
        });
        if (response.status === 200) {
            toast.success("User Data successful!")
            console.log("responce data = " + response);
        }
        dispatch(addUserSuccess(response.data));
    } catch (error) {
        toast.error("user not added successfully")
        console.error("responce data error = " + error);
        dispatch(addUserFailure(error.message));
    }
};


// try {
//     dispatch(addUser());
//     const response = await axios.post('http://localhost:5000/users/add', {
//         name,
//         email,
//     });
//     if (response.status === 200) {
//         toast.success("User Data successful!")
//         console.log("responce data = " + response);
//     }
// } catch (error) {
//     toast.error("user not added successfully")
//     console.error("responce data error = " + error);
// }
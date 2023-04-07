import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/slices/UserSlice'
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { addUserData } from '../../apis/api'

const AddUser = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({ name: '', email: '' });

    const handleAddUser = () => {
        setValues({ name: '', email: '' })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data);

    const handleAddUserData = () => {
        e.preventDefault();
        dispatch(addUserData)
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
        
    }


    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <h1 className='font-bold text-xl capitalize'>Add User:</h1>
            <form onSubmit={handleAddUserData}>
                <TextField
                    label='Name'
                    name="name"
                    inputProps={{ type: 'text', placeholder: 'John Doe' }}
                    value={values.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
                <TextField
                    label='Email'
                    name='email'
                    value={values.email}
                    inputProps={{ type: 'email', placeholder: 'John@mail.co' }}
                    onChange={(event) => setValues({ ...values, email: event.target.value })}
                />
                <Button type="submit">Submit</Button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default AddUser
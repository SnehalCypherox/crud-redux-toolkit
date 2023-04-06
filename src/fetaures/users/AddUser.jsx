import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/slices/UserSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({name: '', email: ''});

    const handleAddUser  = () => {
        setValues({name: '', email: ''})
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    const dispatch = useDispatch()


    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <h1 className='font-bold text-xl capitalize'>Add User:</h1>
            <TextField
                label='Name'
                inputProps={{ type: 'text', placeholder: 'John Doe' }}
                value={values.name} 
                onChange={(e) => setValues({...values, name:e.target.value})}
            />
            <TextField
                label='Email'
                value={values.email}
                inputProps={{ type: 'email', placeholder: 'John@mail.co' }}
                onChange={(event) => setValues({...values, email: event.target.value})}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser
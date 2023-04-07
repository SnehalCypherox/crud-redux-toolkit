import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../redux/slices/UserSlice'

const EditUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams();

    const users = useSelector(store => store.users)

    const existingUser = users.filter(user => user.id === params.id)
    const {name, email} = existingUser[0];

    const [values, setValues] = useState({name, email});
    
    const handleEditUser  = () => {
        setValues({name: '', email: ''})  
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }


    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <h1 className='font-bold text-xl capitalize'>Edit User:</h1>
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
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { deleteUsers, removeUser } from "../../redux/slices/UserSlice"

const UserList = () => {

    const users = useSelector(store => store.users)
    // console.log(users);
    // const users = [
    //     {
    //         id: 1,
    //         name: 'John',
    //         email: 'john@example.com',
    //     },
    //     {
    //         id: 2,
    //         name: 'abc',
    //         email: 'abc@example.com',
    //     },
    // ]
    const dispatch = useDispatch()
    const handleDeleteUser = (id) => {
        dispatch(deleteUsers({ id }))
    }
    
    const deleteAllUsers = (payload) => {
        dispatch(removeUser(payload))
    }
    const renderCard = () => users.map((user) => {
        return (
            <div className="shadow-2xl border border-gray-400 px-10 py-5 " key={user.id}>
                <div>
                    <h3 className="font-bold">{user.name}</h3>
                    <span>{user.email}</span>
                </div>
                <div className="mt-3">
                    <Link to={`edit-user/${user.id}`}>
                        <button className="bg-black text-white px-2 py-1 rounded-sm m-1">edit</button>
                    </Link>
                    <button onClick={() => handleDeleteUser(user.id)} className="bg-black text-white px-2 py-1 rounded-sm m-1">delete</button>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="flex justify-evenly">
                <Link to='/add-user'>
                    <Button>Add User</Button>
                </Link>
                <button className='delete-btn bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5' onClick={() => {deleteAllUsers()}}>Delete All User</button>            </div>

            <div className="grid grid-cols-2 gap-5 m-5">
                {users.length ? renderCard() : <p>No User</p>}
            </div>
        </>
    )
}

export default UserList
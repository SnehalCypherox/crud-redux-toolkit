import UserList from "./fetaures/users/UserList"

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-5 ">
      <h1 className="font-bold m-5 text-3xl capitalize text-gray-700 text-center">crud app</h1>
      <UserList />
    </div>
  )
}

export default App
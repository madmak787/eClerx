import React from 'react'
import UserForm from '../components/UserForm'
import UserTable from '../components/UserTable'

const Home = () => {
  return (
    <div>
        <div className="container">
            <UserForm />
            <UserTable />
        </div>
    </div>
  )
}

export default Home
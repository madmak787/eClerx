import React from 'react'

const UserTable = () => {
  return (
    <div>
        <table className="user-table">
          <thead>
            <tr>
              <th colSpan={3} style={{ textAlign: 'left' }}><input type="text" placeholder="Search" /></th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>
                <button>✏️</button>
                <button style={{ backgroundColor: 'red', color: 'white' }}>🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default UserTable
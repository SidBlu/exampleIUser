import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map((item) =>(
                <tr key={item.id}>
                <th>{item.first_name}</th>
                <th>{item.last_name}</th>
                <th>{item.email}</th>
            </tr>
            ))}
            
        </tbody>
    </table>
  )
}
// <ul className='list'>
//       {Users.filter(user => user.first_name.toLocaleLowerCase().includes(query)).map((user) => (
//         <li key={user.id} className='listItem'>{user.first_name}</li>
//       ))}
//       </ul>
export default Table
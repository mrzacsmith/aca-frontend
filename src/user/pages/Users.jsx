import React from 'react'

import UsersList from '../components/UsersList.jsx'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      image: 'https://source.unsplash.com/random/800x600',
      name: 'Luv Brit',
      places: 3,
    },
    {
      id: 'u2',
      image: 'https://source.unsplash.com/random/800x600',
      name: 'Baby Girl',
      places: 1,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users

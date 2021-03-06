import React, { useContext } from 'react'

import UserProductItem from './UserProductItem'
import { AuthContext } from '../appState/AuthProvider'

const UserProducts = () => {
  const { user } = useContext(AuthContext)

  console.log(user)
  return (
    <div style={{ width: '70%', margin: 'auto', marginBottom: '50px' }}>
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr 2fr',
          widht: '100%'
        }}
      >
        <h3 style={{ margin: 'auto' }}>Description</h3>
        <h3 style={{ margin: 'auto' }}>Picture</h3>
        <h3 style={{ margin: 'auto' }}>Price</h3>
        <h3 style={{ margin: 'auto' }}>Actions</h3>
      </div>

      {/* Body */}
      {user &&
        user.products.length > 0 &&
        user.products.map(product => (
          <UserProductItem key={product.id} product={product} />
        ))}
    </div>
  )
}

export default UserProducts

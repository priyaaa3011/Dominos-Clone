import React, { useState } from 'react';

const menuItems = {
  Pizzas: [
    { name: 'Margherita', price: 5.99, image: 'https://i.pinimg.com/474x/52/4b/5c/524b5ccc3b45fb41a5db734dcb8d3218.jpg' },
    { name: 'Pepperoni Feast', price: 7.99, image: 'https://i.pinimg.com/474x/b1/e6/4b/b1e64bdcaa0d18542c5cdae49990608f.jpg' },
    { name: 'Veggie Paradise', price: 6.99, image: 'https://i.pinimg.com/474x/f4/f2/a7/f4f2a7b01333be3c9ea720bf5a6ea080.jpg' },
    { name: 'Chicken Dominator', price: 8.49, image: 'https://i.pinimg.com/474x/aa/b4/54/aab4545224954baa5e4ddd289c1f1bb4.jpg' },
    { name: 'Deluxe Veggie', price: 7.49, image: 'https://i.pinimg.com/736x/d2/77/b8/d277b83b3c31e762476e32b43d28f57d.jpg' },
    { name: 'Farmhouse', price: 6.89, image: 'https://i.pinimg.com/736x/2b/e5/8c/2be58c6ae73b13576cae2859e84d80f5.jpg' },
  ],
  Sides: [
    { name: 'Garlic Breadsticks', price: 3.49, image: 'https://i.pinimg.com/474x/27/26/c9/2726c94c13046983c96fb03f34cc9e46.jpg' },
    { name: 'Chicken Wings (6 pcs)', price: 5.99, image: 'https://i.pinimg.com/474x/64/70/7c/64707cf685f7cec5a51894f7aa5bde94.jpg' },
    { name: 'Cheesy Dip', price: 1.99, image: 'https://i.pinimg.com/474x/c4/c7/9f/c4c79f356d28966b45346f19d7fbbb00.jpg' },
    { name: 'Potato Wedges', price: 3.99, image: 'https://i.pinimg.com/474x/b5/60/3e/b5603ee13f283a4ed950209260d83f9e.jpg' },
    { name: 'Stuffed Garlic Bread', price: 4.49, image: 'https://i.pinimg.com/474x/84/b0/87/84b0876315b97747d218be93f7074abe.jpg' },
  ],
  Desserts: [
    { name: 'Choco Lava Cake', price: 3.99, image: 'https://i.pinimg.com/474x/11/57/11/115711d5fb2c9fdd50dbe13d3d6bd7f8.jpg' },
    { name: 'Brownie Delight', price: 4.49, image: 'https://i.pinimg.com/736x/11/ef/05/11ef05432715a382da392ca14fd22b0a.jpg' },
    { name: 'Ice Cream Cup', price: 2.99, image: 'https://i.pinimg.com/474x/05/da/0c/05da0c1f365f8175fdba6dd58d4e0a83.jpg' },
  ],
  Beverages: [
    { name: 'Coca-Cola (500ml)', price: 1.99, image: 'https://i.pinimg.com/474x/01/06/60/010660aca2dbf78b724f4f374d5fef48.jpg' },
    { name: 'Sprite (500ml)', price: 1.99, image: 'https://i.pinimg.com/474x/b5/e6/94/b5e69469061aed6f4e3fd15abc330efe.jpg' },
    { name: 'Fanta (500ml)', price: 1.99, image: 'https://i.pinimg.com/474x/4c/61/00/4c610077967396622a6ebe85cc4f4a67.jpg' },
    { name: 'Iced Tea', price: 2.29, image: 'https://i.pinimg.com/474x/45/0d/84/450d84c9a67fd79019d9385e0b9ad95d.jpg' },
  ],
};

function Order() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const removeFromCartByName = (itemName) => {
    const index = cart.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      removeFromCart(index);
    }
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} style={styles.categorySection}>
            <h2 style={styles.category}>{category}</h2>
            <ul style={styles.itemList}>
              {items.map((item, index) => (
                <li key={index} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <div style={styles.itemInfo}>
                    <span style={styles.itemName}>{item.name}</span>
                    <span style={styles.price}>${item.price.toFixed(2)}</span>
                    <div style={styles.btnGroup}>
                      <button style={styles.button} onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeFromCartByName(item.name)}
                        disabled={!cart.find((i) => i.name === item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Cart Section */}
        <div style={styles.cart}>
          <h2>🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              <ul style={styles.cartList}>
                {cart.map((item, i) => (
                  <li key={i} style={styles.cartItem}>
                    {item.name} - ${item.price.toFixed(2)}
                    <button style={styles.removeBtn} onClick={() => removeFromCart(i)}>Remove</button>
                  </li>
                ))}
              </ul>
              <h3>Total: ${getTotal()}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    fontSize:'20px',
    fontWeight: 'bold',

  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  categorySection: {
    marginBottom: '40px',
  },
  itemList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
  },

itemName: {
  fontWeight: 'bold',
  fontSize: '30px',
  display: 'block',
},
price: {
  color: '#555',
  marginBottom: '10px',
  display: 'block',
},
btnGroup: {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
},
button: {
  padding: '6px 12px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
},
removeBtn: {
  padding: '6px 12px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
},
cart: {
  marginTop: '40px',
  borderTop: '2px solid #eee',
  paddingTop: '20px',
},
cartList: {
  listStyle: 'none',
  padding: 0,
},
cartItem: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid #ddd',
},
};

export default Order;

  

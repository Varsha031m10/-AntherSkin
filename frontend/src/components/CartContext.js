// src/components/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { items, total } = JSON.parse(savedCart);
      setCartItems(items || []);
      setTotalPrice(total || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({
      items: cartItems,
      total: totalPrice
    }));
  }, [cartItems, totalPrice]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    const numericPrice = parseFloat(product.price.replace('$', ''));
    setTotalPrice(prev => prev + numericPrice);
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    if (item) {
      setTotalPrice(prev => prev - item.price * item.quantity);
      setCartItems(prev => prev.filter(i => i.id !== productId));
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from 'react';  

interface ProductModel {  
  id: number;  
  name: string;  
  price: number;  
}  

interface CartContextType {  
  cart: ProductModel[];  
  addToCart: (product: ProductModel) => void;  
  removeFromCart: (productId: number) => void;  
  clearCart: () => void;  
}  

const CartContext = createContext<CartContextType | undefined>(undefined);  

const CART_STORAGE_KEY = 'cartItems';  

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {  
  const [cart, setCart] = useState<ProductModel[]>(() => {  
    // Load cart from local storage when initializing state  
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);  
    return storedCart ? JSON.parse(storedCart) : [];  
  });  

  const addToCart = (product: ProductModel) => {  
    setCart((prev) => {  
      const isProductInCart = prev.some(item => item.id === product.id);  
      if (!isProductInCart) {  
        const updatedCart = [...prev, product];  
        // Save updated cart to local storage  
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));  
        return updatedCart;  
      }  
      return prev; // Do not add if the product is already in the cart  
    });  
  };  

  const removeFromCart = (productId: number) => {  
    setCart((prev) => {  
      const updatedCart = prev.filter(item => item.id !== productId);  
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));  
      return updatedCart;  
    });  
  };  

  const clearCart = () => {  
    setCart([]);  
    localStorage.removeItem(CART_STORAGE_KEY);  
  };  

  // This effect can be used to update the cart in localStorage if it changes  
  useEffect(() => {  
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));  
  }, [cart]);  

  return (  
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>  
      {children}  
    </CartContext.Provider>  
  );  
};  

export const useCart = () => {  
  const context = useContext(CartContext);  
  if (!context) {  
    throw new Error('useCart must be used within a CartProvider');  
  }  
  return context;  
};
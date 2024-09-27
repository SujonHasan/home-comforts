"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

const saveCartToSessionStorage = (cart) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
};

const getCartFromSessionStorage = () => {
  if (typeof window !== 'undefined') {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};


const saveWishListToSessionStorage = (wishList) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem("wishList", JSON.stringify(wishList));
  }
};


const getWishListFromSessionStorage = () => {
  if (typeof window !== 'undefined') {
    const storedWishList = sessionStorage.getItem("wishList");
    return storedWishList ? JSON.parse(storedWishList) : [];
  }
  return [];
};

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [initialized, setInitialized] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [checkCategory, setCheckCategory] = useState([]);
  const [priceRange, setPriceRange] = useState({min: '', max: ''});
  const [quantity, setQuantity] = useState(1);
  const [invoiceId, setInvoiceId] = useState(100);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    zip: "",
    phone: "",
  });
  const [billing, setBilling] = useState({
    name: "",
    address: "",
    zip: "",
    phone: "",
  });


  useEffect(() => {
    setCart(getCartFromSessionStorage());
    setWishList(getWishListFromSessionStorage());
    setInitialized(true); 
  }, []);

  useEffect(() => {
    if (initialized) { 
      saveCartToSessionStorage(cart);
    }
  }, [cart, initialized]);

  useEffect(() => {
    if (initialized) { 
      saveWishListToSessionStorage(wishList);
    }
  }, [wishList, initialized]);





  const clearCart = () => {
    setCart([]);
  };

  const clearAccountDetails = () =>{
    setProfile({});
    setShipping({
      name: "",
      address: "",
      zip: "",
      phone: "",
    });
    setBilling({})
    localStorage.removeItem("shipping");
    localStorage.removeItem("billing");
    localStorage.removeItem("profile");
    
  }

  const addToWishList = (product) => {
    const isProductInWishList = wishList.some(
      (item) => item._id === product._id
    );

    if (isProductInWishList) {
      const updateWishList = wishList.map((item) =>
        item._id === product._id
          ? { ...item, quantity: product.quantity }
          : item
      );
      setWishList(updateWishList);
    } else {
      setWishList((prevWish) => [...prevWish, product]);
    }
  };

  const addToCart = (product) => {
    console.log(product)
    const isProductInCart = cart.some((item) => item._id === product._id);

    if (isProductInCart) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: product.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const productDeletedCart = (product) => {
    console.log(product);
    setCart(
      cart.filter((deletedProduct) => deletedProduct._id !== product._id)
    );
  };

  const productDeleted = (product) => {
    console.log(product);
    setWishList(
      wishList.filter((deletedProduct) => deletedProduct._id !== product._id)
    );
  };

  const cartCount = cart?.length;
  const wishListCount = wishList?.length;

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        cartCount,
        addToWishList,
        wishListCount,
        wishList,
        searchQuery,
        setSearchQuery,
        profile,
        setProfile,
        shipping,
        setShipping,
        billing,
        setBilling,
        checkCategory,
        setCheckCategory,
        priceRange,
        setPriceRange,
        clearAccountDetails,
        quantity, setQuantity,
        productDeletedCart,
        productDeleted,
        invoiceId,
        setInvoiceId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
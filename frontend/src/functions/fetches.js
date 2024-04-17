import { useContext, useState } from "react";
import { mainContext } from "../context/mainProvider.jsx";
import { decryptToken } from "./decrypt.js";


export const login = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/login", {
    method: "POST",
    body: formData,
  });
  console.log('response', response)

  const { status, token } = await response.json();
  if(status=='failed'){return status}
  localStorage.setItem("token", token);
  return status
};

export const logout = () =>{
  localStorage.removeItem('token')
  location.reload()
}

//!automatischer login klappt erst nach 2. ausführung
export const register = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  fetch(import.meta.env.VITE_BACKEND_URL+"/user/register", {
    method: "POST",
    body: formData,
  });
  const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/login", {
    method: "POST",
    body: formData,
  });

  const { status, token } = await response.json();
  localStorage.setItem("token", token);
  location.reload()
  //! mit env datei austauschen
  //? window.location = import.meta.env.OWN_URL
  window.location = 'http://localhost:5173'
};

export const getUser =async (username) => {
  // decryptToken();
  const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/user/" + username)
  return (await response.json())
};

export const uploadImg = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  fetch(import.meta.env.VITE_BACKEND_URL + "/image/create", {
    method: "POST",
    body: formData,
  });
  window.location.href = import.meta.env.VITE_FRONTEND_URL + "/images";
};

export const getImages = (images) => {
  fetch(import.meta.env.VITE_BACKEND_URL + "/image")
    .then((resp) => resp.json())
    .then((json) => images(json));
};



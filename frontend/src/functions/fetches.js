import { useContext, useState } from "react";
import { mainContext } from "../context/mainProvider.jsx";
import { decryptToken } from "./decrypt.js";

export const login = async (event) => {
  console.log("operation succseed");
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/login", {
    method: "POST",
    body: formData,
  });
  const { status, token } = await response.json();
  localStorage.setItem("token", token);
  location.reload()
};

export const logout = () =>{
  localStorage.removeItem('token')
  location.reload()
}

export const register = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  fetch(import.meta.env.VITE_BACKEND_URL+"/user/register", {
    method: "POST",
    body: formData,
  });
};

export const getUser = (username, setUser) => {
  // const { username, setUser } = useContext(mainContext);
  decryptToken();
  fetch(import.meta.env.VITE_BACKEND_URL + "/user/" + username)
    .then((response) => response.json())
    .then((json) => {
      setUser(json);
    });
};

export const uploadImg = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  console.log(formData)
  fetch(import.meta.env.VITE_BACKEND_URL + "/image/create", {
    method: "POST",
    body: formData,
  });
};

export const getImages = (images) => {
    console.log('images:', images)
  fetch(import.meta.env.VITE_BACKEND_URL + "/image")
    .then((resp) => resp.json())
    .then((json) => images(json));
};





export const login = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/login", {
    method: "POST",
    body: formData,
    credentials:'include'
  });

  const { status, token } = await response.json();
  if(status=='failed'){return status}
  localStorage.setItem("token", token);
  return status
};

export const logout = async() =>{
  localStorage.removeItem('token')
  fetch(import.meta.env.VITE_BACKEND_URL + "/user/logout", {credentials:'include', withCredentials:true})
  location.reload()
}
const userCheck =async (response) =>{
  const { status} = await response.json();
  return status
}
//!muss noch status returnen für redirect abfrage
export const register = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formData2 = formData
  const formData3 = formData
  const checkName = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/checkRepeatName",{
    method: "POST",
    body: formData2,
  })
  const {checkNameStatus} = await checkName.json()
  console.log(checkNameStatus)
  const failStatus = []
  if(checkNameStatus == 'username already exists'){
    console.log('user already exists')
    return checkNameStatus
  }
  const checkEmail = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/checkRepeatEmail",{
    method: "POST",
    body: formData2,
  })
  const {checkMailStatus} = await checkEmail.json()
  if(checkMailStatus == 'email already exists'){
    console.log('mail already exists')
    return checkMailStatus
  }
  const responseRegister = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/register", {
    method: "POST",
    body: formData,
    credentials:'include'
  });
  const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user/login", {
    method: "POST",
    body: formData,
    credentials:'include'
  });

  const { status, token } = await response.json();
  localStorage.setItem("token", token);
  // location.reload()
  //! mit env datei austauschen
  //? window.location = import.meta.env.OWN_URL
  // window.location = 'http://localhost:5173'
};

export const getUser =async (username) => {
  const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/user/" + username, {credentials:'include'})
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



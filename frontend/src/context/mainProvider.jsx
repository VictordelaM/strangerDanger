import React, { createContext, useState } from "react";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [image, setImage] = useState();

  return (
    <>
      <mainContext.Provider
        value={{
          user,
          setUser,
          username,
          setUsername,
          image,
          setImage,
        }}
      >
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainProvider;

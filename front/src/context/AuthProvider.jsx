import React, { createContext,useContext,useState } from 'react'

export const AuthContext=createContext();
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("Users");
      // If nothing or invalid data found, return null
      if (!storedUser || storedUser === "undefined") return null;
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
            </AuthContext.Provider>
    )
    
}
export const useAuth=()=> useContext(AuthContext);

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginWindow from "../../components/LoginWindow/LoginWindow";
import YourProfile from "../../components/YourProfile/YourProfile";

export default function Profile() {
  const [userData, setUserData] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (storedUserData && loggedIn) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (data) => {
    setUserData(data);
    setIsLoggedIn(true);

    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setUserData(null);
    setIsLoggedIn(false);

    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");

    alert("You logged out");
  };

  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <div>
      <Header />
      {userData && isLoggedIn ? (
        <YourProfile userData={userData} onLogOut={handleLogout} />
      ) : (
        <LoginWindow onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

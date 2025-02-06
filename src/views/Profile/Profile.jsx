import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LoginWindow from "../../components/LoginWindow/LoginWindow";
import YourProfile from "../../components/YourProfile/YourProfile";

export default function Profile() {
  const [userData, setUserData] = useState(null); // Состояние для данных пользователя

  const handleLoginSuccess = (data) => {
    setUserData(data); // Сохраняем данные пользователя после успешного логина
  };

  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <div>
      <Header />
      {userData ? (
        <YourProfile userData={userData} /> // Показываем профиль, если данные есть
      ) : (
        <LoginWindow onLoginSuccess={handleLoginSuccess} /> // Показываем форму логина
      )}
    </div>
  );
}

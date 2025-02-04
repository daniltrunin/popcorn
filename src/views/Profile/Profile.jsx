import { useEffect } from "react";
import Header from "../../components/Header/Header";
import LoginWindow from "../../components/LoginWindow/LoginWindow";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <div>
      <Header />
      <LoginWindow />
    </div>
  );
}

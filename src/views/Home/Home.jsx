import Header from "../../components/Header/Header";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home page";
  });
  return (
    <div>
      <Header />
    </div>
  );
}

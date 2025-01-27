import Details from "../../components/Details/Details";
import Header from "../../components/Header/Header";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <div>
      <Header />
      <Details />
    </div>
  );
}

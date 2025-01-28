import Header from "../../components/Header/Header";
import SearchPage from "../../components/SearchPage/SearchPage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Popcorn";
  });
  return (
    <div>
      <Header />
      <SearchPage />
    </div>
  );
}

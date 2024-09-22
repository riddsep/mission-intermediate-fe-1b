import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Continue from "./components/Continue";
import TopRating from "./components/TopRating";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Continue />
      <TopRating />
      <Trending />
    </>
  );
}

export default App;

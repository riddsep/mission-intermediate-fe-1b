import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Continue from "./components/Continue";
import TopRating from "./components/TopRating";
import Trending from "./components/Trending";
import NewRelease from "./components/NewRelease";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Continue />
      <TopRating />
      <Trending />
      <NewRelease />
    </>
  );
}

export default App;

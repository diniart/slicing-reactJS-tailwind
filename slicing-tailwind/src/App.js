import "./App.css";
import logo from "./assets/logo.png";
import mainIlustration from "./assets/hero-ilustration.svg";
import visitTouris from "./assets/visit-touris.svg";
import Button from "./components/Button";

function App() {
  return (
    <div className="px-40">
      <header className="flex justify-between   py-4 ">
        <img src={logo} alt="logo" />
        <div className="flex items-center justify-center gap-9">
          <a href="/" className="font-semibold text-lg text-blue-900">
            Home
          </a>
          <a href="/">About Us</a>
          <a href="/">Service</a>
          <a href="/">Destination</a>
          <a href="/">Contact Us</a>
        </div>
      </header>
      <content className="grid grid-cols-2 ">
        <div className="flex items-center">
          <div>
            {/* <img src={visitTouris} alt="visitTouris" /> */}
            <h1 className="font-bold text-5xl font-heading ">
              Visit the tourist
              <br  />
              <span className="text-[#2C696F]">destination</span> you want
            </h1>
            <p className="mt-11 font-heading text-lg font-normal">
              Explore your vacation to beautify your day. visit cool travel
              destinations around the world
            </p>
           <Button/>
          </div>
        </div>
        <div>
          <img src={mainIlustration} alt="main" />
        </div>
      </content>
    </div>
  );
}

export default App;

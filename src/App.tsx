import mountainImage from "./mountains.jpg";
import { ReactComponent as ReactLogo } from "./airbnb-brands.svg";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${mountainImage}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="App">
      <div className=" text-white " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <div className="w-12">
              <ReactLogo className="fill-white" />
            </div>
            <h2 className="text-xl uppercase font-bold">Monica Mariana Muñoz Torres</h2>
            <h1 className="text-6xl font-bold">
              Universidad Tecnologica de Durango 
            </h1>
            <p className="text-lg">
              Probando Fork de Github
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
              19 de Junio
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

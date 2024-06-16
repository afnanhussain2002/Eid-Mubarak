import { useState } from "react";
import EidMessage from "./eidMassage/EidMessage";
import Footer from "./Footer";


const App = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    setName(name);
    // https://i.ibb.co/vVRGH40/6-TS9-D9-yt-QIhcn-Px-Oee-Hm-transformed.jpg
  };
  return (
    <div className=" bg-cover bg-center bg-[url('https://i.ibb.co/NmcQZ53/Untitled-design-26.png')] lg:bg-[url('https://i.ibb.co/2Wnz18c/R-a43-V4-D7-Rn-J7-RAynj-K7-transformed.jpg')]">
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-40">
    <div>
      {name ? (
        <EidMessage name={name} />
      ) : (
        <form onSubmit={handleName} className="flex gap-1">
          <input
            type="text"
            name="name"
            placeholder="Type Your Name"
            className="input input-bordered input-info w-full max-w-xs border-4"
            required
          />
          <button type="submit" className="btn btn-info">
            Enter
          </button>
        </form>
      )}

    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default App;

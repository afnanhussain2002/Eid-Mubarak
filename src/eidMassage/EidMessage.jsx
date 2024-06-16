const EidMessage = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-5xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-center animate-fadeIn">
        Assamu Alaikum <br />
        <span>{name}</span> <br /> 
        <span className="shadow-lg">Eid Mubarak!</span>
      </p>
      <div className="w-84 shadow-lg p-10 mt-3 border-4 border-blue-400 shadow-blue-500/100 animate-fadeIn lg:w-96">
      
        <p className=" text-4xl font-bold leading-relaxed text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
           Hope You Have a Delightful Day With Loved Ones
        </p>

    
      </div>
    </div>
  );
};

export default EidMessage;

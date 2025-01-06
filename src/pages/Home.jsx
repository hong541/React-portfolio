const Home = () => {
  return (
    <div
      id="home"
      className="flex justify-center flex-row min-h-screen items-center p-2 w-full">
      <div className="w-full flex justify-center">
        <img
          src="/public/image/hong1.png"
          alt=""
          className="rounded-lg shadow-sm max-w-full h-auto "
        />
      </div>
      <div className="w-full mt-6 ml-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hello, I'm Hong</h1>
        <p className="mt-4 text-lg text-gray-600">
          A MERN Stack Developer skilled in building dynamic, user-friendly web
          applications with MongoDB, Express.js, React.js, and Node.js.
          Passionate about clean code and scalable solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;

const MainLayout = () => {
  return (
    <div className="h-screen">
      {/* Topbar layout */}
      <div></div>
      {/* Main content layout */}
      <div className="bg-main h-full">
        <div className="flex flex-col justify-center items-center">
          <img src="" alt="pokemon" />
          <h2 className="text-center text-black">Nome Pokemon</h2>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

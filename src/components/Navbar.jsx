const Navbar = () => {
  return (
    <>
      <nav className="border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
          <div className="pl-2">
            <a href="#">
              <img src={logo} alt="logo" width={150} height={15} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

function Navbar() {
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">PokéVerse Live</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/marketplace" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">
              Marketplace
            </a>
            <a href="/community" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">
              Community
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const Grocery = () => {
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Grocery Store</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Welcome to our online grocery store! We have a wide range of products to
        meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example grocery items */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;

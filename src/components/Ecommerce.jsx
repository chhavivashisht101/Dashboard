import React, { useState } from "react";

export default function Ecommerce() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/09/asusrogzephyrusg14-2048px-2x1-1.jpg",
      name: "ASUS ROG Gaming Laptop",
      category: "Laptop",
      brand: "ASUS",
      price: "$2,199",
      stock: "Out of Stock",
      date: "01 Dec, 2027",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1660803962974",
      name: "AirPods Pro 2nd Gen",
      category: "Accessories",
      brand: "Apple",
      price: "$839",
      stock: "In Stock",
      date: "29 Jun, 2027",
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-hero-49mm-titanium-orange-alpine-loop?wid=940&hei=1112&fmt=png-alpha&.v=1693594195910",
      name: "Apple Watch Ultra",
      category: "Watch",
      brand: "Apple",
      price: "$1,579",
      stock: "Out of Stock",
      date: "13 Mar, 2027",
    },
    {
      id: 4,
      image:
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_images/qc_earbuds_ii_triple_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png",
      name: "Bose QuietComfort Earbuds",
      category: "Audio",
      brand: "Bose",
      price: "$279",
      stock: "In Stock",
      date: "18 Nov, 2027",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "In Stock",
    date: "",
    image: "",
  });

  // Add Product Handler
  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.brand ||
      !newProduct.price ||
      !newProduct.date
    ) {
      alert("Please fill all fields before adding!");
      return;
    }

    const newItem = {
      ...newProduct,
      id: Date.now(),
    };

    setProducts([...products, newItem]);
    setIsModalOpen(false);
    setNewProduct({
      name: "",
      category: "",
      brand: "",
      price: "",
      stock: "In Stock",
      date: "",
      image: "",
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Product List</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-black px-5 py-2 rounded-lg shadow-md"
        >
          + Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-100">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              </th>
              <th className="p-4 text-left">Products</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                </td>

                <td className="p-4 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <span className="font-medium text-gray-900">{product.name}</span>
                </td>

                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.brand}</td>
                <td className="p-4 font-medium">{product.price}</td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>

                <td className="p-4">{product.date}</td>

                <td className="p-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                  ⋮
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Add New Product
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Price (e.g. $499)"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <select
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              >
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Date (e.g. 20 Oct, 2027)"
                value={newProduct.date}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, date: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 rounded-lg bg-blue-600 text-black hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

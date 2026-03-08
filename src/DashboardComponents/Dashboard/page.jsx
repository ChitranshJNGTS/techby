import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaBoxOpen, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white rounded-2xl shadow p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            Welcome, Seller 👋
          </h1>
          <p className="text-gray-600">
            Manage your products and track your orders from here.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Add Product */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Add New Product
              </h2>
              <IoMdAddCircle className="text-3xl text-green-600" />
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Upload your electronics items and start selling instantly.
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
              Add Product
            </button>
          </div>

          {/* My Products */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                My Products
              </h2>
              <FaBoxOpen className="text-2xl text-blue-600" />
            </div>
            <p className="text-gray-500 text-sm mb-4">
              View, edit or remove your uploaded products.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              View Products
            </button>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Verify code
              </h2>
              <FaShoppingCart className="text-2xl text-purple-600" />
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Check new orders and manage delivery status.
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
              View Orders
            </button>
          </div>

        </div>

        {/* Development Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
          <FaInfoCircle className="text-yellow-500 text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-700 mb-1">
              Dashboard Under Development
            </h3>
            <p className="text-sm text-yellow-700 leading-relaxed">
              This is a temporary version of the seller dashboard. We are actively
              working on advanced features like sales analytics, performance insights,
              real-time order tracking, and automated reports.
              <br />
              Thank you for being an early partner with us 🚀
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
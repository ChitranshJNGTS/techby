import React from "react";
import { Truck, CreditCard, RotateCw, Headphones, Shield, Gift, Star, Phone } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-green-500" />,
    title: "Fast & Free Shipping",
    description: "Reliable and quick delivery on all eligible orders.",
  },
  // {
  //   icon: <CreditCard className="w-8 h-8 text-green-500" />,
  //   title: "Secure Payments",
  //   description: "Trusted payment options for a safe checkout experience.",
  // },
  {
    icon: <Headphones className="w-8 h-8 text-green-500" />,
    title: "24/7 Customer Support",
    description: "We’re here to help anytime you need assistance.",
  },
  // {
  //   icon: <RotateCw className="w-8 h-8 text-green-500" />,
  //   title: "Easy Returns",
  //   description: "Hassle-free returns and quick refunds on every purchase.",
  // },
  // {
  //   icon: <Shield className="w-8 h-8 text-green-500" />,
  //   title: "Purchase Protection",
  //   description: "All your orders are protected against damage or loss.",
  // },
  // {
  //   icon: <Gift className="w-8 h-8 text-green-500" />,
  //   title: "Exclusive Offers",
  //   description: "Get special deals and discounts available only for registered users.",
  // },
  {
    icon: <Star className="w-8 h-8 text-green-500" />,
    title: "Premium Quality",
    description: "We guarantee authentic and high-quality products on every order.",
  },
  {
    icon: <Phone className="w-8 h-8 text-green-500" />,
    title: "Easy Contact",
    description: "Reach us through phone, email, or chat for quick assistance.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Why Shop With Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 transition duration-300">
              {feature.icon}
            </div>

            <h4 className="font-semibold text-lg text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-500 text-sm">
        Trusted by hundreds of customers in Indore.
      </p>
    </section>
  );
};

export default FeaturesSection;
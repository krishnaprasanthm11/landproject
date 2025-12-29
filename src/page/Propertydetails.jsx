import React from "react";
import { useParams } from "react-router-dom";
import { propertyData } from "./Properties"; // ✅ named import

const Propertydetails = () => {
  const { id } = useParams();

  const product = propertyData.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Property Not Found</h2>;
  }

  return (
    <div className="container py-4">
      <h1>Property Details</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <h2 className="mt-3">{product.title}</h2>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Location:</strong> {product.location}
      </p>
      <p>{product.description}</p>
    </div>
  );
};

export default Propertydetails;

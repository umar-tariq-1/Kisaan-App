import React from "react";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllProducts = () => {
  /*  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await axios.get("http://localhost:3001/getProducts", {
        withCredentials: true,
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  } */
  return (
    <ResponsiveDrawer Products={1}>
      <div className="container-fluid">
        <ProductCard
          image="327167969"
          rating={3.8}
          name="Cotton"
          city="Lahore"
          description="Best cotton you can find in market"
          price={1200}
          ratingsCount={109}
        />
      </div>
    </ResponsiveDrawer>
  );
};

export default AllProducts;

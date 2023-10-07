import React, { useState } from "react";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CustomRefreshAnimation from "../../../components/CustomRefreshAnimation/CustomRefreshAnimation";
import { arrAVG } from "../../../utils/objectFunctiions/arrAVG";

const AllProducts = () => {
  const [enable, setEnable] = useState(false);

  const [parent] = useAutoAnimate();

  const { isFetching, isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await axios.get("http://localhost:3001/getProducts", {
        withCredentials: true,
      });
    },
    refetchOnWindowFocus: false,
    onSuccess: (data) => {},
    onError: (error) => {},
    onSettled: () => {
      setEnable(false);
    },
    enabled: enable,
  });

  return (
    <ResponsiveDrawer active={{ Products: true }}>
      {/* {isLoading && <CustomRefreshAnimation />} */}
      <div className="container-fluid" ref={parent}>
        {data?.data?.data.map((product) => (
          <ProductCard
            key={product._id}
            city={product.city}
            description={product.description}
            image={product.images[0].name}
            name={product.name}
            price={product.price}
            rating={arrAVG(product.ratings)}
            ratingsCount={product.ratings.length}
            id={product._id}
          />
        ))}
      </div>
      <div
        className="btn btn-primary"
        onClick={() => {
          setEnable(true);
        }}
      >
        Fetch
      </div>
    </ResponsiveDrawer>
  );
};

export default AllProducts;

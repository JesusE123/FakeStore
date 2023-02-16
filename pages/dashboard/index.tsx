import React, { useState, useContext, useEffect } from "react";
import Menu from "@/components/Menu";
import { SearchContext } from "@/context/searchContext";
import Layout from "@/components/Layout";
import Cards from "@/components/Cards";

function Dashboard({ posts }: any) {
  const { data, dispatch } = useContext(SearchContext);

  useEffect(() => {
    dispatch({ type: "SET_DATA", data: posts });
  }, [posts, dispatch]);
  return (
    <div className="container-fluid">
      <Layout>
        <Menu />
        <Cards posts={data?.data || []} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Dashboard;

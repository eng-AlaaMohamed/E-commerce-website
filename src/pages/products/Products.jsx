import ProductList from "./ProductList";
import "./products.css";
import { useEffect, useState } from "react";
import ProductSidebar from "./ProductSidebar";
import Pagination from "./Pagination";
import { products } from "../../data/products";

const Products = () => {

  const [sortItem, setSortItem] = useState("select");
  const [filterItem, setFilterItem] = useState("all");
  const [currentPage, setCurrentPage] = useState(4);

  // Filter Product
  const filteredProduct = products.filter((p) =>
    filterItem === "laptop"
      ? p.isLaptop === true
      : filterItem === "mobile"
      ? p.isLaptop === false
      : p
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // Pagnination
  const PRODUCT_PER_PAGE = 6;
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = sortedProductList.slice(startIndex, finishIndex);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <section className="products">
        <ProductSidebar
          setSortItem={setSortItem}
          sortItem={sortItem}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          setCurrentPage={setCurrentPage}
        />
        <ProductList products={orderedProducts} />
      </section>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;

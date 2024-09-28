import Slider from "../../components/slider/Slider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeaderBanner from "../../components/header-banner/HeaderBanner";
import { products } from "../../data/products";
import ScrollToTop from "../../components/scrollTop/ScrollToTop";
import { useEffect } from "react";

const Home = () => {

  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderBanner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجدید من اللابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجدید من الجوالات" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب المارک" />
      <Brands />
      <ScrollToTop />
    </>
  );
};

export default Home;

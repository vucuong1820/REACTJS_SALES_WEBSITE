import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/component/product-item";
const Home = () => {
  const [latestProducts , setLatestProducts] = React.useState([]);
  const [featuredProducts , setFeaturedProducts] = React.useState([]);
  React.useEffect(()=>{
    //get Latest Product
    getProducts({
      params:{limit:6}
    }).then((res)=>{setLatestProducts(res.data.data.docs)})
    //get featured Product
    getProducts({
      params:{
        limit:6,
        "filter[is_featured]":true,
      }
    }).then((res)=>{setFeaturedProducts(res.data.data.docs)})
  })
  return (
    <>
      {/*	Feature Product	*/}
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          {
            featuredProducts.map((product)=>{
              return (
                <ProductItem item={product}/>
              )
            })
          }
        </div> 
      </div>
      {/*	End Feature Product	*/}
      {/*	Latest Product	*/}
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          {
            latestProducts.map((product)=>{
              return(
                <ProductItem item={product}/>
              )
            })
          }         
        </div>
      </div>
      {/*	End Latest Product	*/}
    </>
  );
};
export default Home;

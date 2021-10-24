import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router, Switch } from "react-router";
import { Route } from "react-router";
//import Layout
import Footer from "./shared/component/Layout/Footer";
import Header from "./shared/component/Layout/Header";
import Menu from "./shared/component/Layout/Menu";
import Sidebar from "./shared/component/Layout/Sidebar";
import Slider from "./shared/component/Layout/Slider";
//import Pages
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
    <BrowserRouter>
      {/*	Header	*/}
      <Header />
      {/*	End Header	*/}
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          
          <Menu />
          
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              {/*	Slider	*/}
              <Slider />
              {/*	End Slider	*/}
              
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/category-:id" component={Category}/>
                  <Route path="/cart" component={Cart}/>
                  <Route path="/product-details-:id" component={ProductDetails}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/success" component={Success}/>
                  <Route path="/404" component={NotFound}/>
                </Switch>
              
            </div>
            {/* Sidebar */}
            <Sidebar />
            {/* End Sidebar */}
          </div>
        </div>
      </div>
      {/*	End Body	*/}
      {/* Footer */}
      <Footer />

      {/*	End Footer	*/}
      </BrowserRouter>
    </>
  );
};

export default App;

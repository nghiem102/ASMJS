import Navigo from "navigo";
import toastr from "toastr";
import "toastr/build/toastr.min.css"
import addProduct from "./admin/add";
import Category from "./admin/category";
import Dashboard from "./admin/Dashboard";
import Cart from "./pages/cart";
import Detail from "./pages/Detail";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import productCategory from "./pages/productCategory";
import renderSearch from "./pages/renderSearch";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true } )

const print = async (content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id)
  if(content.afterRender) content.afterRender(id)
}

router.on('/dashboard',  () => {
}, {
  before(done, match) {
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).permission;
        if(userId == 1){
            done();
        } else {
            toastr.error("Bạn không phải quản trị viên")
            document.location.href="/"
        }
      } else{
        toastr.error("Bạn không phải quản trị viên")
        document.location.href="/"
      }
    
  },
});

router.on({
  "/": () => {
    print(HomePage)
  },
  "/product": () => {
    print(Product)
  },
  "/cart": () => {
    print(Cart)
  },
  "/signin": () => {
    print(Signin)
  },
  "/signup": () => {
    print(Signup)
  },
  "/admin/add": () => {
    print(addProduct)
  },
  "/detail/:id": ( {data} ) => {
    print(Detail, data.id)
    // console.log(data.id);
  },
  "/dashboard": () => {
    print(Dashboard)
  },
  "/category": () => {
    print(Category)
  },
  "/productCategory/:id": ( { data} ) => {
    print(productCategory,data.id)
  },
  "/productSearch/:id": ({data}) => {
    print(renderSearch, data.id)
    console.log(data)
  }
});

router.resolve();
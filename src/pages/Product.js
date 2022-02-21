import { getAll } from "../api/products"
import Footer from "../components/footer"
import Header from "../components/header"

const Product = {
    async render() {
        const { data } = await getAll()
        return /* html */ `
            ${Header.render()}
            
            <main class="content">
            <div class="grid wide row">
                <div class="content__category col l-3 m-0 c-0">
                    
                    
                    <div class="category-item end">
                        <h4 class="category-item-title">
                            Thương hiệu
                        </h4>
                        <ul>
                            <li class="category-item-link"><a href="">Nike</a></li>
                            <li class="category-item-link"><a href="">Jordan</a></li>
                            <li class="category-item-link"><a href="">Adiddas</a></li>
                            <li class="category-item-link"><a href="">MLB</a></li>
                        </ul>    
                    </div>
                </div>
                <!-- end category -->
                <div class="content__main col l-9 m-12 c-12">
                    <div class="conten-product row">
                        <h2 class="conten__product-title l-12 m-12 c-12">Tất cả sản phẩm</h2>

                        ${data.map(item => /* html */ `
                        <a href="/#/detail/${item.id}" class="content__product-item l-4 col m-6 c-12">
                            <div class="product-item-img">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="product-item-text">
                                <p class="product-item-name">${item.name}</p>
                                <p class="product-item-price">${item.price}</p>
                            </div>
                        </a>
                        `).join("")}
                        
                    </div>
                </div>
                <!-- end conten-product -->
            </div>
        </main>

            ${Footer.render()}
        `
    }
}
export default Product
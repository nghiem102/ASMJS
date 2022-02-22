import { getByCategory } from "../api/categorys"
import Footer from "../components/footer"
import Header from "../components/header"
import sidebarProduct from "../components/sidebarProduct"

const productCategory = {
    async render(id) {
        const { data } = await getByCategory(id)
        console.log(data)
        return /* html */ `
            ${Header.render()}
            
            <main class="content">
            <div class="grid wide row">
                <div class="content__category col l-3 m-0 c-0">
                    
                    
                    <div class="category-item end">
                        <h4 class="category-item-title">
                            Thương hiệu
                        </h4>
                        ${await sidebarProduct.render()}
                    </div>
                </div>
                <!-- end category -->
                <div class="content__main col l-9 m-12 c-12">
                    <div class="conten-product row">
                        <h2 class="conten__product-title l-12 m-12 c-12">${data.name}</h2>

                        ${data.products.map(item => /* html */ `
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
    },

    afterRender() {
        Header.afterRender()
    }
}
export default productCategory
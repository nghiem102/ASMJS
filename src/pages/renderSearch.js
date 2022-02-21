import { getSearch } from "../api/products"
import Footer from "../components/footer"
import Header from "../components/header"

const renderSearch = {
    async render(id) {
        const {data} = await getSearch(id)
        console.log(data)
        return /* html */ `
        ${Header.render()}
        <div class="content__product">
                <div class="product grid wide">
                    <div class="product-title">
                        <h3>Sản phẩm cần tìm</h3>
                    </div>
                    <div class="product-list row">
                    ${data.map(item => /*html*/`
                        <a href="/#/detail/${item.id}" class="product-item col l-3">
                            <div class="product-item-img">
                                <img src="${item.img}" alt="" width="300px" height="300px">
                            </div>
                            <div class="product-item-text">
                                <p class="product-item-name">${item.name}</p>
                                <p class="product-item-price">${item.price}</p>
                            </div>
                        </a>
                    `).join("")}
                        
                    </div>
                </div>
            </div>
        ${Footer.render()}
            `
    }
}

export default renderSearch
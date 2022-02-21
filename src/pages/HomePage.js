import Footer from "../components/footer"
import Header from "../components/header"
import { getAll } from "../api/products"
import { reRender } from "../utils/reRender";

const HomePage = {
    async render() {
        const {data } = await getAll();
        return /* html */ `
            ${Header.render()}

            <main class="content">
            <div class="content__banner">
                <div class="banner-item grid wide row">
                    <div class="banner-item-text l-5">
                        <h1 class="main-item-title">Puma Running SX</h1>
                        <p class="main-item-info">Đôi giày đã di chuyển những ngọn núi cho đến vĩnh cửu và vẫn làm như vậy với một chút liên lạc nhanh chóng của chủ nghĩa hiện đại</p>
                        <p class="main-item-price">3.200.000 đ</p>
                        <button class="main-item-btn">Thêm vào giỏ hàng</button>
                    </div>
                    <div class="banner-item-img l-7">
                        <img class="main-img" src="./assets/css/img/banner1.png" alt="" width="568px" height="380px">
                        <div class="banner-item-select">
                            <img onclick="one()" src="./assets/css/img/banner1.png" alt="" class="select" width="64px" height="64px">
                            <img onclick="two()" src="./assets/css/img/baner2.png" alt="" class="select" width="64px" height="64px">
                            <img onclick="three()" src="./assets/css/img/baner3.png" alt="" class="select" width="64px" height="64px">
                            <img onclick="four()" src="./assets/css/img/banner4.png" alt="" class="select" width="64px" height="64px">
                        </div>
                    </div>
                </div>
            </div>
            <!-- end banner -->
            <div class="content__product">
                <div class="product grid wide">
                    <div class="product-title">
                        <h3>Sản phẩm mới nhất</h3>
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
                    <a class="product-next" href="./product.html">
                        <i class='bx bx-right-arrow-alt'></i>
                        <p>Xem tất cả </i></p>
                    </a>
                </div>
            </div>
        </main>

            ${Footer.render()}
        `
    },
    afterRender() {
        Header.afterRender()
    }
}

export default HomePage
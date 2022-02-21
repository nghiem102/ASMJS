import { getSearch } from "../api/products"
import { reRender } from "../utils/reRender"
import boxAccount from "./boxAccount"

const Header = {
    render() {
        return /* html */ `
        <header class="header">
        <div class="grid wide">
            <div class="header__logo">
                <a href="/" class="header__logo-link">
                    <img class="header__logo-img" src="./assets/css/img/logo.jpg" alt="">
                </a>
            </div>
            <nav class="header__nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="product" class="nav__link active">Sản phẩm</a></li>
                    <li class="nav__item"><a href="" class="nav__link">Thương hiệu <i class='bx bxs-chevron-down'></i></a></li>
                    <li class="nav__item"><a href="" class="nav__link">Khuyến mại</a></li>
                    <li class="nav__item"><a href="news" class="nav__link">Tin tức</a></li>
                </ul>
            </nav>
            <div class="header__icon">
                <form action="" class="search-box">
                    <input type="text" class="search-form" required placeholder="Nhập từ khóa">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                </form>
                <div>
                    <a class="icon icon-cart" href="cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
                <div id="account">
                    <a class="icon icon-user" href="signin"><i class="far fa-user" ></i></i></a>
                    <div id="boxAccount">${boxAccount.render()}</div>
                    
                    
                </div>
            </div>
            <label for="mobile-input" class="header__replace">
                <i class="fas fa-bars header__replace-icon"></i>
            </label>

            <input type="checkbox" name="" hidden class="nav__input" id="mobile-input">

            <label for="mobile-input" class="nav__overlay"></label>
            <nav class="nav__mobile">
                <label for="mobile-input">
                    <i class="fas fa-times nav__mobile-close"></i>
                </label>
                <ul class="nav__mobile-list">
                    <li class="nav__mobile-item">
                        <a href="./index.html" class="nav__mobile-link"><i class="fas fa-home"></i>Trang chủ</a>
                    </li>
                    <li class="nav__mobile-item">
                        <a href="./product.html" class="nav__mobile-link"><i class="fas fa-mug-hot"></i>Sản phẩm</a>
                    </li>
                    <li class="nav__mobile-item">
                        <a href="" class="nav__mobile-link"><i class="fas fa-user-tag"></i>Khuyến mãi</a>
                    </li>
                    <li class="nav__mobile-item">
                        <a href="./news.html" class="nav__mobile-link"><i class="far fa-newspaper"></i>Tin tức</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
        `
    },

    afterRender() {
        boxAccount.afterRender()

        document.querySelector(".search-box").addEventListener('submit', async (e) => {
            e.preventDefault()
            const searchValue = document.querySelector('.search-form').value
            console.log(searchValue)
            window.location.href = "/#/productSearch/"+`${searchValue}`
        }) 
    }
}
export default Header
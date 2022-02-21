import Footer from "../components/footer"
import Header from "../components/header"
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css"
import { reRender } from "../utils/reRender";

const Cart = {
    render() {
        let cart = []
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        return /* html */ `
            ${Header.render()}

            <main class="content">
                <div class="grid wide">
                    <h5 class="title_cart">Giỏ hàng của bạn</h5>
                    <div class="content__item">
                        ${cart.map(item => /* html */ `
                            <div class="box-content_cart row">
                                <div class="content__item-main l-8 m-12 c-12" style="display: flex;">
                                    <div class="cart_image">
                                        <img src="${item.img}" alt="">
                                    </div>
                                    <div class="cart_info">
                                        <div class="cart_name">
                                            <p>${item.name}</p>
                                        </div>
                                        <div class="cart_price">
                                            <p>${item.price}</p>
                                        </div>
                                        <div class="cart_name">
                                           <p> Size: ${item.sizeValue}</p>
                                        </div>
                                        <div class="cart_name">
                                           <p> Tổng tiền: ${item.price * Number(item.quantity)}</p>
                                        </div>
                                    </div>
                                    <div class="quantity">
                                        <div class="minus">
                                            <button data-id="${item.id}" class="btn btn-decrease"><i class="fas fa-minus"></i></button>
                                        </div>
                                        <div class="cart_quantity">
                                            ${item.quantity}
                                        </div>
                                        <div class="plus">
                                            <button data-id="${item.id}" class="btn btn-increase"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="content__active l-4 m-12 c-12" style="display: flex;">
                                    <div class="button_order">
                                        <button>Đặt hàng</button>
                                    </div>
                                    <div class="trash">

                                        <p data-id="${item.id}" class="btn btn-remove"><i class="fas fa-trash-alt"></i></p>
                                    </div>
                                </div>
                            </div>
                        `)}
                            
                            
                    </div>
                </div>
            </main>

            ${Footer.render()}
        `
        }
        else{
            return /* html */ `
            ${Header.render()}

            <main class="content" style="padding: 50px 0 30px 0">
                <div  class="grid wide"><h1>Giỏ hàng trống</h1></div>    
            </main>
            

            ${Footer.render()}
            `
        }
    },
    
    afterRender() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                const id = btn.dataset.id
                if(btn.classList.contains('btn-increase')){
                    increaseQuantity(id, () => {
                        reRender(Cart,'#app')
                    })
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQuantity(id, () => {
                        reRender(Cart,'#app')
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(Cart,'#app')
                    });
                }
            })
        })
    }
}

    


export default Cart
import toastr from "toastr";
import "toastr/build/toastr.min.css"
import { get } from "../api/products"
import Footer from "../components/footer"
import Header from "../components/header"
import { addToCart } from "../utils/cart";

const Detail = {
    async render(id) {
        const {data} = await get(id);
        return /* html */ `
            ${Header.render()}

            <main class="content">
                <div class="detail grid wide row"  style="padding-bottom: 90px">


                                <div class="detail__main l-8 m-12 c-12">
                                <div class="main-text">
                                    <p class="text-name">${data.name}</p>
                                    <p class="text-price">${data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                </div>
                                <div class="main-img">
                                    <img src="${data.img}" alt="">
                                </div>
                            </div>
                        <div class="detail__content l-4 m-12 c-12">
                            <div class="content-info">
                                <h5 class="content-title">Chi tiết sản phẩm</h5>
                                <p class="info-text">${data.desc}</p>

                            </div>
                            <div class="content-choose">
                                <h5 class="choose-title">Chọn size</h5>
                                <div class="choose-btn">
                                ${data.size.map((item) => `
                                    <button class="add-size">${item}</button>
                                
                                `).join("")}
                                </div>
                            </div>
                            <div class="content-add">
                                <div class="quantity">
                                    <div class="number">
                                        <input type="number" min="1" id="quantityValue" placeholder="1">
                                    </div>
                                </div>
                                <div class="add">
                                    <button id="btn-add">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div> 

                </div>
                <!-- end detail -->
                
            </main>

            ${Footer.render()}
        `
    },

    afterRender(id) {
        let sizeValue = ""
        const addSixe = document.querySelectorAll('.add-size')
        const btnAdd = document.querySelector("#btn-add")
        const quantityValue = document.querySelector("#quantityValue")
        addSixe.forEach(add => {
            add.addEventListener('click', () => {
                if(sizeValue == ""){
                    sizeValue = add.textContent
                    add.style.backgroundColor = "red"
                    add.style.color = "white"
                }
                else if(sizeValue == add.textContent){
                    sizeValue = ""
                    add.style.backgroundColor = "white"
                    add.style.color = "black"

                }
            })
        })
        btnAdd.addEventListener('click', async function() {
            const { data } = await get(id)
            addToCart({...data, sizeValue: sizeValue ,quantity: quantityValue.value ? quantityValue.value : 1})
            toastr.success('Sản phẩm đã thêm vào giỏ hàng')
        })

        

    }
}
export default Detail
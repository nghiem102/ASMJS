import axios from "axios";
import { add } from "../api/products";
import $ from "jquery";
import validate from "jquery-validation"
import { getAll } from "../api/categorys";

const addProduct = {
    async render(){
        const {data} = await getAll();
        // console.log(cate);
        return /*html*/`
            <form id="formAddPost">
                <input type="text" id="title-post" class="border border-black" placeholder="Title" name="title-post" /><br />
                <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                <img src="" id="img-preview"/>
                <input type="text" id="price" class="border border-black" placeholder="Price" name="price" /><br />
                <select id="cate">
                ${data.map(item => /*html*/ `
                    <option value="${item.id}">${item.name}</option>
                
                `)}
                </select>
                <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
                <button>Tạo bài viết</button>
            </form>
        `
    },
    afterRender(){
        const formAddPost = $('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "e3ugolti";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dpv7d14ll/image/upload";
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector('#img-preview')

        let imgLink = "";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                "title-post": {
                    required: "Bắt buộc phải nhập trường này!",
                    minlength: "Nhập ít nhất 5 ký tự"
                }
            },
            submitHandler: function() {
                async function addPost(){
                    const file = imgPost.files[0];
                    if(file){
                        // lấy giá trị của file và gán vào object formData
                        const formData = new FormData();
                        formData.append('file', file);
                        formData.append('upload_preset', CLOUDINARY_PRESET_KEY);
        
                        // call API cloudinary để đẩy ảnh lên
                        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }
                        })
                        imgLink = data.url;
                    }
                    // call api thêm bài viết
                    add({
                        name: document.querySelector('#title-post').value,
                        img: imgLink ? imgLink : "",
                        price: document.querySelector("#price").value,
                        desc: document.querySelector('#desc-post').value,
                        categoryProductId: document.querySelector("#cate").value,
                        size: [
                            "38",
                            "39",
                            "40",
                            "41",
                            "42"
                          ]
                    });
                }
                addPost();
            }
        });
    }
}

export default addProduct
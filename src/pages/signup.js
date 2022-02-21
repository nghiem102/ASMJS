import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { signup } from "../api/user"
import Footer from "../components/footer"
import Header from "../components/header"

const Signup = {
    render() {
        return /* html */ `
            ${Header.render()}

            <main class="content">
                <div class="box_info">
                    <h3>Đăng kí tài khoản</h3>
                    <p class="text_register">Đăng nhập <a href="/signin">tại đây</a></p>
                    <form action="" class="form_info" id="formSignup">
                        <div class="box_email">
                            <h6>Tên đăng nhập *</h6>
                            <input type="text" class="form_password" name="" id="username">
                        </div>
                        <div class="box_email">
                            <h6>Email *</h6>
                            <input type="email" class="form_email" name="" id="email">
                        </div>
                        <div class="box_password">
                            <h6>Mật khẩu *</h6>
                            <input type="password" class="form_password" name="" id="password">
                        </div>
                            <input type="hidden" name="" id="permission" value="2">
                        <div class="box_button">
                            <button>Đăng kí</button>
                        </div>
                        <!-- Đăng nhập bằng cách khác -->
                        <div class="box_other">
                            <p>Hoặc đăng nhập bằng</p>
                            <div class="other_login">
                                <a href=""><i class='bx bxl-google'></i></a>
                                <a href=""><i class='bx bxl-facebook'></i></a>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            ${Footer.render()}
        `
    },
    afterRender() {
        const formSignup = document.querySelector('#formSignup')
        formSignup.addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                    permission: Number(document.querySelector("#permission").value)
                });
                toastr.success("Đăng ký thành công, tới trang đăng nhập");
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },1000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                document.querySelector('#formSignup').reset()
            }
           

        })


    }
}
export default Signup
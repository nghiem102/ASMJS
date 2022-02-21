import Footer from "../components/footer"
import Header from "../components/header"
import { signin } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return /* html */ `
            ${Header.render()}

            <main class="content">
                <div class="box_info">
                    <h3>Khách hàng đăng nhập</h3>
                    <p class="text_register">Nếu bạn chưa có tài khoản, xin vui lòng tạo tài khoản <a href="/signup">tại đây</a></p>
                    <form action="" class="form_info" id="formSignin">
                        <div class="box_email">
                            <h6>Email *</h6>
                            <input type="email" class="form_email" name="" id="email">
                        </div>
                        <div class="box_password">
                            <h6>Mật khẩu *</h6>
                            <input type="password" class="form_password" name="" id="password">
                        </div>
                        <div class="box_button">
                            <button>Đăng nhập</button>
                        </div>
                        <div class="box-forgot_password" style="margin-top: 10px;">
                            <a href="">Quên mật khẩu?</a>
                        </div>
                        <div class="box_register">
                            <a href="register.html">Đăng ký</a>
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
    afterRender(){
        document.querySelector('#formSignin').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                localStorage.setItem('user', JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công, tới trang chủ")
                setTimeout(function(){
                    if(data.user.permission === 1){
                        document.location.href="/#/dashboard"
                    } else {
                        document.location.href="/#/"
                    }
                },1000)
                
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.error(error.response.data)
                $('#formSignin').reset()
            }
            
        })
    }
}
export default Signin
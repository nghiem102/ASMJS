const Footer = {
    render() {
        return `
        <footer class="footer">
        <div class="grid wide">
            <div class="footer__logo">
                <img src="./assets/css/img/logo.jpg" alt="" class="footer__logo-img">
            </div>
            <div class="footer__contact row">
                <div class="contact contact-info l-3 m-6 c-12">
                    <h5>Thông tin liên hệ</h5>
                    <a href=""><i class='bx bxs-phone-call'></i>0339362491</a>
                    <br>
                    <a href=""><i class='bx bx-mail-send' ></i>ledinhnghiem102@gmail.com</a>
                    <br>
                    <a href=""><i class='bx bxl-facebook-square' ></i>Facebook</a>
                    <br>
                    <a href=""><i class='bx bxl-instagram-alt' ></i>Instagram</a> 
                </div>
                <div class="contact contact-cagetory l-3 m-6 c-12">
                    <h5>Danh mục</h5>
                    <a href="">Sản phẩm mới</a>
                    <br>
                    <a href="">Sản phẩm 2 hand</a>
                    <br>
                    <a href="">Thương hiệu</a>
                </div>
                <!-- Chính sách -->
                <div class="contact contact-policy l-3 m-6 c-12">
                    <h5>Chính sách</h5>
                    <a href="">Chính sách vận chuyển</a>
                    <br>
                    <a href="">Chính sách bảo hành</a>
                    <br>
                    <a href="">Chính sách bảo mật</a>
                    <br>
                    <a href="">Chính sách thanh toán</a>
                </div>
                <!-- Hỗ trợ -->
                <div class="contact contact-support l-3 m-6 c-12">
                    <h5>Hỗ trợ</h5>
                    <a href="">Hỗ trợ chọn size</a>
                    <br>
                    <a href="">Hỗ trợ đổi trả</a>
                    <br>
                    <a href="">Câu hỏi thường gặp</a>
                    <br>
                    <a href="">Liên hệ</a>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}
export default Footer
const sidebarDashboard = {
    render() {
        return /* html */ `
        <div class="sidebar">
            <div class="sidebar-logo">
                <a href="/"><img src="./assets/css/img/logo.jpg" alt="Comapny logo"></a>
                
                <div class="sidebar-close" id="sidebar-close">
                    <i class='bx bx-left-arrow-alt'></i>
                </div>
            </div>
            <div class="sidebar-user">
                <div class="sidebar-user-info">
                    <img src="./assets/css/img/user-img.jpg" alt="User picture" class="profile-image">
                    <div class="sidebar-user-name">
                        Dinh Nghiem
                    </div>
                </div>
                <button class="btn btn-outline">
                    <i class='bx bx-log-out bx-flip-horizontal'></i>
                </button>
            </div>
            <!-- SIDEBAR MENU -->
            <ul class="sidebar-menu">
                <li>
                    <a href="" class="active">
                        <i class='bx bx-home'></i>
                        <span>dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class='bx bx-shopping-bag'></i>
                        <span>thêm sản phẩm</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class='bx bx-chart'></i>
                        <span>danh mục sản phẩm</span>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        <i class='bx bx-mail-send'></i>
                        <span>mail</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-chat'></i>
                        <span>chat</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-calendar'></i>
                        <span>calendar</span>
                    </a>
                </li>
            </ul>
            <!-- END SIDEBAR MENU -->
        </div>
        `
    }
}

export default sidebarDashboard
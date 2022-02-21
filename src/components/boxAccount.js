import { reRender } from "../utils/reRender";

const boxAccount = {
    render() {
        return /* html */`
        ${localStorage.getItem('user') ? /* html */ `<ul class="box-account">
            <li class="box-account-item">
                <a class="account" href="">
                    <p class="account-name">Hello</p>
                    <p class="account-name" id="userName"></p>
                </a>
            </li>
            <li class="box-account-item">
                <a class="btn-logout" id="logout">Đăng xuất</a>
            </li>
        </ul>` : ""}
        `
    },
    
    afterRender() {
        const userName = document.querySelector("#userName")
        const logout = document.querySelector("#logout")
        if(userName){
            userName.innerHTML = JSON.parse(localStorage.getItem('user')).username;
        }
        if(logout){
            logout.addEventListener('click', function(){
                const confirm = window.confirm("Bạn có muốn đăng xuất?")
                if(confirm){ 
                    localStorage.removeItem('user');
                    reRender(boxAccount,'#boxAccount')
                }
            });
        }

    }
}

export default boxAccount
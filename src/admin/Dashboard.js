
import { getAll, remove } from "../api/products"
import { reRender } from "../utils/reRender"
import sidebarDashboard from "./sidebarDashboard"


const Dashboard = {
    async render() {
        const { data } = await getAll()
        return /*html */ `
            ${sidebarDashboard.render()}

            <div class="main">
                <div class="main-header">
                    <div class="mobile-toggle" id="mobile-toggle">
                        <i class='bx bx-menu-alt-right'></i>
                    </div>
                    <div class="main-title">
                        dashboard
                    </div>
                </div>
                <div class="main-content">
                    
                        <div class="col-12">
                            <!-- ORDERS TABLE -->
                            <div class="box">
                                <div class="box-header">
                                    Danh sách sản phẩm
                                </div>
                                <div class="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Sản phẩm</th>
                                                <th>Ảnh</th>
                                                <th>Giá</th>
                                                <th></th>
                                                
                                            </tr>
                                        </thead>
                                        
                                        ${data.map((item,index) => /* html */`
                                            <tbody>
                                                <tr>
                                                    <td>${index+1}</td>
                                                    <td>
                                                        ${item.name}
                                                    </td>
                                                    <td><img src="${item.img}" width="80px"></td>
                                                    <td>
                                                        ${item.price}
                                                    </td>
                                                    <td>
                                                        <button id="update">Sửa</button>
                                                        <button id="delete" data-id="${item.id}">Xóa</button>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        `).join("")}
                                            
                                    </table>
                                </div>
                            </div>
                            <!-- END ORDERS TABLE -->
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    afterRender() {
        const btns = document.querySelectorAll("#delete")
        btns.forEach(btn => {
            const id = btn.dataset.id
            btn.addEventListener('click', async () =>{
                const confirm = window.confirm("Bạn có chắc chắn xóa?")
                if(confirm) {
                    remove(id).then(() => {
                        reRender(Dashboard, "#app")
                    })
                }
            })
        })
    }
}

export default Dashboard
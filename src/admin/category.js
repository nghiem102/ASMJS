import { getAll } from "../api/categorys"
import sidebarDashboard from "./sidebarDashboard"


const Category = {
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
                                    Danh mục sản phẩm
                                </div>
                                <div class="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Danh mục</th>
                                                <th><button>Thêm</button></th>
                                                
                                            </tr>
                                        </thead>
                                        
                                        ${data.map((item,index) => /* html */`
                                            <tbody>
                                                <tr>
                                                    <td>${index+1}</td>
                                                    <td>
                                                        ${item.name}
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
    }
}

export default Category
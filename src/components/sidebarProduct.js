import { getAll } from "../api/categorys"

const sidebarProduct = {
    async render() {
        const {data} = await getAll()
        return /* html */ `
            
        <ul>
        ${data.map(item => /* html */ `
            <li class="category-item-link">
                <a href="/#/productCategory/${item.id}">${item.name}</a>
            </li>
            `).join("")}
            
        </ul>    
        `

    }
}

export default sidebarProduct
import { useParams } from "react-router-dom"

const Category = () => {
    const { category } = useParams();

    let page;
    switch (category) {
        case 'shop-by-category':
            page = <h1>Shop-by-category</h1>
            break;
        case 'gifting':
            page = <h1>Gifting</h1>
            break;
        case 'shop-by-festival':
            page = <h1>Shop-by-festival</h1>
            break;
        case 'health-friendly':
            page = <h1>Health-friendly</h1>
            break;
        case 'media':
            page = <h1>Media</h1>
            break;
        case 'shop-all':
            page = <h1>Shop-all</h1>
            break;
        default:
            page = <h1>category not found</h1>
            break;
    }

    return page
} 

export default Category;
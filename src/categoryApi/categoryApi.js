
import { v4 as uuid } from 'uuid';
import gift1 from '../assets/images/gift1.jpeg';
import gift2 from '../assets/images/gift2.jpeg';

const categoryApi = [
    {
        category: "shop by category",
        path: "/shop-by-category",
        product: []
    },
    {
        category: "gifting",
        path: "/gifting",
        product: [
            {
                id: 1,
             objectId: uuid(),
                name: "gifting",
                price: "$18.00",
              image: gift1,
                description: "This is description of product"
            },
            {
                id: 2,
                name: "gifting",
                price: "$18.00",
                image: gift2,
                description: "This is description of product"
            }
        ]
    },
    {
        category: "shop by festival",
        path: "/shop-by-festival",
        product: []
    },
    {
        category: "health friendly",
        path: "/health-friendly",
        product: []
    },
    {
        category: "media",
        path: "/media",
        product: []
    },
    {
        category: "shop all",
        path: "/shop-all",
        product: []
    },
]
export default categoryApi;
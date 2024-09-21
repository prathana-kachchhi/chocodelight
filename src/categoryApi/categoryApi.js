

import gifting1 from '../assets/images/gifting1.webp';
import gifting2 from '../assets/images/gifting2.webp';
import gifting3 from '../assets/images/gifting3.webp';
import gifting4 from '../assets/images/gifting4.jpg';
import gifting5 from '../assets/images/gifting5.webp';
import gifting6 from '../assets/images/gifting6.webp';
import gifting7 from '../assets/images/gifting7.webp';
import gifting8 from '../assets/images/gifting8.webp';
import gifting9 from '../assets/images/gifting9.webp';
import gifting10 from '../assets/images/gifting10.webp';
import gifting11 from '../assets/images/gifting11.webp';
import gifting12 from '../assets/images/gifting12.webp';
import gifting13 from '../assets/images/gifting13.avif';
import gifting14 from '../assets/images/gifting14.avif';
import gifting15 from '../assets/images/gifting15.avif';
import gifting16 from '../assets/images/gifting16.webp';
import gifting17 from '../assets/images/gifting17.webp';
import gifitng18 from '../assets/images/gifting18.webp';
import gifting19 from '../assets/images/gifting19.jpeg';
import gifting20 from '../assets/images/gifting20.webp';
import gifting21 from '../assets/images/gifting21.webp';
import gifting22 from '../assets/images/gifting22.webp';
import gifting23 from '../assets/images/gifting23.webp';
import gifting24 from '../assets/images/gifting24.webp';
import gifting25 from '../assets/images/gifting25.webp';
import gifting26 from '../assets/images/gifting26.webp';
import gifting27 from '../assets/images/gifting27.jpg';


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
                id: 1001,
                name: "THE ARTISANAL HAMPER",
                giftImg: [gifting1],
                rating: "41 ratings",
                reviews: "60 reviews",
                price: "995.00",
                discountprice: "1250.00",
                offer: "12% off",
                description: "Experience the spirit of Diwali with The Artisanal Hamper, crafted with natural products. Delight in a 4pc Couverture Chocolate Box, a Stir-It-Up Hot Chocolate stick, wholesome Millet Cookies, True Cocoa Mix for cozy evenings a Hazelnut Spread and a True Bar for pure enjoyment.",
            },
            {
                id: 1002,
                name: "ALLURE HAMPER",
                giftImg: [gifting2],
                rating: "62 ratings",
                reviews: "14 reviews",
                price: "975.00",
                description: "Indulge in the ultimate festive experience with the Allure Hamper, showcasing a 4pc Baklava assortment, a 6pc Luxe treat box, Center Fill Cookies, and 4pc Assorted Choco-Truffles. Complete your celebrations with two radiant Diyas, illuminating the heart of joy this festive season with CHOCODELIGHT."
            },
            {
                id: 1003,
                name: "BOUNTIFUL BOX",
                giftImg: [gifting3],
                rating: "8 ratings",
                reviews: "1 reviews",
                price: "2,445.00",
                description: "Celebrate Diwali with our Bountiful Box hamper, overflowing with an exquisite assortment of premium Dry Fruits and irresistible choco treats. Indulge in the perfect blend of traditional elegance and sweet delights, making every moment of this festival of lights truly memorable."
            },
            {
                id: 1004,
                name: "Premium Couverture Chocolate Hamper",
                giftImg: [gifting4],
                rating: "147 ratings",
                reviews: "20 reviews",
                price: "1,445.00",
                discountprice: "1575.00",
                offer: "6% off",
                description: "Loaded with cocoa butter and a delectable sheen, Classic Smooth Milk, Pink Kiss Himalayan Pink Salt and Nutty delight Roasted Almond couverture chocolates are crafted for an irresistible indulgence. Paired with Peri Peri Almond and Thai Chilli Cashew, the hamper is truly a heavenly intervention."
            },
            {
                id: 1005,
                name: "HARMONY HAMPER",
                giftImg: [gifting5],
                rating: "37 ratings",
                reviews: "7 reviews",
                price: "1,950.00",
                description: "Embrace the spirit of celebration with our exquisite keepsake Harmony Hamper, curated with Center Fill Cookies, Hazelnut Spread, 6pc Luxe treat box, a True Classics Bar, and 4pc Baklava assortment."
            },
            {
                id: 1006,
                name: "Pochette Purse",
                giftImg: [gifting6],
                rating: "41 ratings",
                reviews: "8 reviews",
                price: "1,850.00",
                description: "The easygoing Pochette Purse includes Center Fill Cookies and 4 pc Assorted Choco-Truffles, adding a touch of fun and radiance to your festivities. Do ask if you would like to fill it with contents of your choice."
            },
            {
                id: 1007,
                name: "HAMPER OF SERENITY",
                giftImg: [gifting7],
                rating: "11 ratings",
                reviews: "2 reviews",
                price: "1,250.00",
                discountprice: "2,450.00",
                offer: "8% off",
                description: "Our Hamper of Serenity is the perfect blend of elegance, making it an ideal gift for Diwali. Including Choco Wafer Bites, 9pc Couverture Chocolate box, a True Bar, 15pc Nougat Bar box, SMOOR Cookies, Tea Tin, a Stir-It-Up Hot Chocolate stick, 4pc Assorted Choco-Truffles and Dry Fruit. This hamper is one that will light up anyone’s day with our beautifully crafted Diyas."
            },
            {
                id: 1008,
                name: "Irresistible Choco Nutty Gift Box with Assorted Mukhwas",
                giftImg: [gifting8],
                rating: "8 ratings",
                reviews: "11 reviews",
                price: "2,939.00",
                description: "Win the hearts of your close ones by sending this Joyful Selection of Pink Roses with Chocolate Gift Hamper and mesmerize them by your sweet gesture. This fantastic Gift is a perfect choice to give your recipients as it is comprised of a Bunch of gorgeous Ten Pink Color Roses, 4 pcs of Ferrero Rocher Chocolates, 1 pc of 5 Star, 1 Kit Kat, 1 Cadbury Crackle and 1 Cadbury Temptation."
            },
            {
                id: 1009,
                name: "Artistry Large",
                giftImg: [gifting9],
                rating: "3 ratings",
                reviews: "9 reviews",
                price: "1,575.00",
                discountprice: "2,100.00",
                offer: "9% off",
                description: "Enjoy our Artistry Large Hamper featuring Almond Snaps, Choco Coated Hazelnuts, 4pc box of Couverture, Chocolate Barks, 4pc Baklava, Hazelnut Spread, Indian Cookies and Tea Tin. Illuminate this festive season with the gift of SMOOR."
            },
            {
                id: 1010,
                name: "Joyful Selection of Pink Roses with Chocolate Gift Hamper",
                giftImg: [gifting10],
                rating: "37 ratings",
                reviews: "7 reviews",
                price: "1,950.00",
                description: "Win the hearts of your close ones by sending this Joyful Selection of Pink Roses with Chocolate Gift Hamper and mesmerize them by your sweet gesture. This fantastic Gift is a perfect choice to give your recipients as it is comprised of a Bunch of gorgeous Ten Pink Color Roses, 4 pcs of Ferrero Rocher Chocolates, 1 pc of 5 Star, 1 Kit Kat, 1 Cadbury Crackle and 1 Cadbury Temptation."
            },
            {
                id: 1011,
                name: "TRANQUIL HAMPER",
                giftImg: [gifting11],
                rating: "3 ratings",
                reviews: "9 reviews",
                price: "1,800.00",
                discountprice: "2,475.00",
                offer: "7% off",
                description: "Our Tranquil selection is the ideal gift this Diwali featuring a delicious touch of elegance Including a 9pc Couverture Chocolate Box, SMOOR Cookies, 4pc Assorted Choco Truffles, 4pc Baklava assortment, Chocolate Barks, Coated Crispies, Dry Fruit and 2 diyas. Gift SMOOR and bring light to their day, embracing the serene essence of jasmine!"
            },
            {
                id: 1012,
                name: "HARMONY HAMPER",
                giftImg: [gifting12],
                rating: "37 ratings",
                reviews: "7 reviews",
                price: "2,950.00",
                discountprice: "4,950.00",
                offer: "12% off",
                description: "Our Tranquil selection is the ideal gift this Diwali featuring a delicious touch of elegance Including a 9pc Couverture Chocolate Box, SMOOR Cookies, 4pc Assorted Choco Truffles, 4pc Baklava assortment!"
            },
            {
                id: 1013,
                name: "Gratifying Chocolate Hamper",
                giftImg: [gifting13],
                rating: "4.8 ratings",
                reviews: "16 reviews",
                price: "2,395.00",
                discountprice: "2,795.00",
                offer: "9% off",
                description: "A wholesome birthday treat for your choco-lover dear ones. Get your hands on this truly delightful birthday hamper comprising an expressive birthday card along with Ferrero Rocher, Temptation chocolate bars, Dairy Milk chocolates and jar cakes. Time to grab this heavenly treat for your loved ones."
            },
            {
                id: 1014,
                name: "Exotic Chocolate Hamper",
                giftImg: [gifting14],
                rating: "4.8 ratings",
                reviews: "16 reviews",
                price: "2,150.00",
                description: "Chocolates are loved by all specially when they come packed in a beautiful hamper. This chocolate hamper is a real treat for your tastebuds with different kinds of chocolates including Dark Chocolate Pralines, Milk Rochers , DarkMendiant and MilkChocolate Puffs . Get your hamper today!"
            },
            {
                id: 1015,
                name: "Aromatic Choco Hamper",
                giftImg: [gifting15],
                rating: "5 ratings",
                reviews: "35 reviews",
                price: "1,280.00",
                description: "Are you looking for a hamper that wins your loved one's hearts? Well, here it is! This aromatic choco hamper consists of three dairy-milk silk chocolates and four KitKat chocolates along with sweet-scented flowers. Make every occasion worth cherishing with this unique hamper of happiness. Order today!"
            },
            {
                id: 1016,
                name: "Chocolate Hampers Gifts",
                giftImg: [gifting16],
                rating: "7.3 ratings",
                reviews: "15 reviews",
                price: "1,780.00",
                description: "Enjoy our Artistry Large Hamper featuring Almond Snaps, Choco Coated Hazelnuts, 4pc box of Couverture, Chocolate Barks, 4pc Baklava, Hazelnut Spread, Indian Cookies and Tea Tin. Illuminate this festive season with the gift of SMOOR."
            },
            {
                id: 1017,
                name: "The Regal Hamper",
                giftImg: [gifting17],
                rating: "9 ratings",
                reviews: "28 reviews",
                price: "3,280.00",
                description: "The epitome of opulence, our Regal Chocolate Hamper is an aesthetic, smart and sleek box packed with SMOOR’s most popular goodies, guaranteed to charm the most discerning chocolate lovers. This magnificent gift hamper includes 16pc Couverture Chocolates Box, a True Classics Bar, a 4pc Assorted ChocoTruffles box, a 15pc Baklava Box, Choco Coated Nuts, Dry Fruit, a Stir-It-Up Hot Chocolate stick, Chocolate Barks, Hazelnut Spread, SMOOR Cookies, Dragees, and 16pc Assorted Choco Truffles. Order now to surprise your family or send it to your favorite person."
            },
            {
                id: 1018,
                name: "Cane Delight Large",
                giftImg: [gifitng18],
                rating: "4 ratings",
                reviews: "11 reviews",
                price: "5,950.00",
                description: "Indulge in the luxurious Cane Delight. A testament to your thoughtfulness. Experience 16pc Couverture Chocolates, Chocolate Barks, Dried Coffee, Choco Coated Nuts, Dragees, Dry Fruit, a True Bar, Nougat Bites, a 4pc Baklava assortment, and the glow of stunning Diyas. Wrapped in festive fabric, this offering speaks not just of celebration, but also of sustainability."
            },
            {
                id: 1019,
                name: "Hamper – Chocolate Extravaganza",
                giftImg: [gifting19],
                rating: "11 ratings",
                reviews: "22 reviews",
                price: "4,699.00",
                description: "The most delicious hamper full of chocolates. Perfect for any occasion, this hamper of pre-selected premium chocolates makes ideal gifts with flowers, whether you’re celebrating a special day or just bringing the joys of the season with you."
            },
            {
                id: 1020,
                name: "Smoor Aura Chocolate Hamper",
                giftImg: [gifting20],
                rating: "7.3 ratings",
                reviews: "15 reviews",
                price: "4,200.00",
                description: "Experience the SMOOR Aura Hamper, a symphony of flavors designed to elevate your festive experience. This hamper includes Indian Cookies, Dragees, Dry Fruit, a 4pc Baklava assortment, Chocolate Barks, Dried Coffee, Stir-It-Up Hot Chocolate sticks, a 9pc Couverture Chocolate box, True Classics Bar, and Choco Coated Nuts. Alongside these delights, enjoy the festive ambiance created by two Diyas."
            },
            {
                id: 1021,
                name: "Sugar Free Dark Chocolate Gift hampers 6 Bars",
                giftImg: [gifting21],
                rating: "5 ratings",
                reviews: "45 reviews",
                price: "1,829.00",
                description: "A chocolate bar that makes you healthier. The zero sugar dark chocolate bar is made entirely with zero-calorie stevia and is completely natural and plant-based. Rich in antioxidants and driven by pure dark chocolate goodness, this sugar & gluten free dessert will not just satisfy your cravings but also recharge your body."
            },
            {
                id: 1022,
                name: "LO FOODS Assorted Mini Keto Snacks Gift Hamper Chocolate",
                giftImg: [gifting22],
                rating: "7 ratings",
                reviews: "5 reviews",
                price: "1,200.00",
                description: "Buy best Assorted Mini Keto Snacks Gift Hamper Chocolate online from LO FOODS at the lowest price on Mirchi.com. This Assorted Mini Keto Snacks Gift Hamper Chocolate is 100% Natural. Your Assorted Mini Keto Snacks Gift Hamper Chocolate will be shipped fresh to your doorstep directly from the place of origin, LO FOODS's store at Bangalore."
            },
            {
                id: 1023,
                name: "Exquisite Chocolates N Assortments Hamper by Bangalore Online Florists",
                giftImg: [gifting23],
                rating: "9 ratings",
                reviews: "27 reviews",
                price: "5,495.00",
                description: "Surprise Dad with our Classic Chocolates N Assortments Hamper, a delightful assortment of gourmet treats sure to please his palate. Let him indulge in the rich and velvety Tin of Hot Chocolate Classic (180g), perfect for cozy moments of relaxation. Spoil him with the sweet and tangy goodness of our Bottle of Blueberry Dragees (60g), a burst of flavor in every bite. Treat him to the wholesome goodness of our Oats Raisins Cookie Tin (4 pcs), a delightful blend of oats and raisins in every crunchy bite. Satisfy his cravings with our Bottle of Almond Cranberry Granola (150g), packed with nutritious goodness and irresistible flavor."
            },
            {
                id: 1024,
                name: "Exquisite Chocolates N Assortments Hamper by Bangalore Online Florists",
                giftImg: [gifting24],
                rating: "9 ratings",
                reviews: "27 reviews",
                price: "5,495.00",
                description: "Surprise Dad with our Classic Chocolates N Assortments Hamper, a delightful assortment of gourmet treats sure to please his palate. Let him indulge in the rich and velvety Tin of Hot Chocolate Classic (180g), perfect for cozy moments of relaxation. Spoil him with the sweet and tangy goodness of our Bottle of Blueberry Dragees (60g), a burst of flavor in every bite. Treat him to the wholesome goodness of our Oats Raisins Cookie Tin (4 pcs), a delightful blend of oats and raisins in every crunchy bite. Satisfy his cravings with our Bottle of Almond Cranberry Granola (150g), packed with nutritious goodness and irresistible flavor."
            },
            {
                id: 1025,
                name: "Deluxe Nutella N Gourmet Treats Gift Hamper",
                giftImg: [gifting25],
                rating: "6 ratings",
                reviews: "15 reviews",
                price: "2,475.00",
                description: "Elevate your gifting experience with our Premium Nutella N Chocolate Lovers Set. This thoughtfully curated gift hamper is a true treat for the senses, featuring a delightful assortment of irresistible goodies. From the rich and creamy Nutella spread to the decadent dark chocolate cookies, each item promises a moment of pure bliss with every bite. The 4700bc popcorn adds a satisfying crunch, while the aromatic Country Bean Coffee offers a smooth and flavorful pick-me-up. Indulge in the luxurious taste of Ferrero Rocher chocolates and jot down your sweetest thoughts in the charming chocolate-shaped notepad included in this bundle."
            },
            {
                id: 1026,
                name: "Chocolate Gift Hamper",
                giftImg: [gifting26],
                rating: "6 ratings",
                reviews: "15 reviews",
                price: "3,475.00",
                description: "Give the gift of sweetness with our Chocolate Gift Hamper. Perfect for any chocolate lover, this hamper is packed with four different kinds of delicious rocky roads and a delectable Mandarin, Chilli & Shiraz Chocolate Sauce."
            },
            {
                id: 1027,
                name: "A Whole Lotta Chocca Gift Hamper",
                giftImg: [gifting27],
                rating: "9 ratings",
                reviews: "18 reviews",
                price: "1,475.00",
                description: "A gift, choc-full of chocolate treats, great for any chocoholic in your life. A fluffy bakery made chocolate sponge cake with a heavenly chocolate buttercream filling. Then they can indulge in a box of the finest cocoa dusted chocolate truffles, a box of chocolate mint crèmes, Belgian chocolate sticks, chocolate coated bubbly honeycomb chunks, chocolate hazelnuts, sugared almonds and white chocolate pralines. A mug of hot chocolate with mini marshmallows is great for dipping the Italian chocolate chip biscotti into."
            },
          

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
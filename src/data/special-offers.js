import s1 from "../images/products/special-offers/s1.jpg"
import s2 from "../images/products/special-offers/s2.jpg"
import s3 from "../images/products/special-offers/s3.jpg"
import s4 from "../images/products/special-offers/s4.jpg"
import s5 from "../images/products/special-offers/s5.jpg"
import s6 from "../images/products/special-offers/s6.jpg"
import s7 from "../images/products/special-offers/s7.jpg"
import s8 from "../images/products/special-offers/s8.jpg"

export const specialOffers = [
    {
        id: 100,
        title: "بیونر دی جی سماعه رأس",
        firstImage: s1,
        secondImage: s2,
        images: [
            s1,
            s2,
            s3,
            s4
        ],
        price: 50,
        discount: 30,
        rating:4.1,
        reviews: "4,521",
    },
    {
        id: 101,
        title: "هوکو سماعه الأذن",
        firstImage: s3,
        secondImage: s4,
        images: [
            s3,
            s4,
            s1,
            s2
        ],
        price: 40,
        discount: 20,
        rating:4.1,
        reviews: "1,870",
    },
    {
        id: 102,
        title: "سامسونج تابلیت",
        firstImage: s5,
        secondImage: s6,
        images: [
            s5,
            s6,
        ],
        price: 200,
        discount: 40,
        rating:4.5,
        reviews: "584",
    },
    {
        id: 103,
        title: "سامسونج هاتف جالاسکی",
        firstImage: s7,
        secondImage: s8,
        images: [
            s7,
            s8,
        ],
        price: 550,
        discount: 20,
        rating:4.8,
        reviews: "8,170",
    },
]
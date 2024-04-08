import React from 'react';

const HomeIndianProducts = () => {

    const indianProducts = [
        {
            imgs: [
                "https://chaldn.com/_mpimage/parachute-coconut-oil-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D120823&q=best&v=1",
                "https://tripleagrocers.co.uk/cdn/shop/files/Parachute-Coconut-Oil-500ml_be4448ce-6e4b-45a0-a11e-0bc9dde670c4.png?v=1688765402&width=500"
            ],
            title: "Parachute Coconut Oil",
            cpmpany: "Marico India Ltd."
        },
        {
            imgs: [
                "https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=600,quality=75,format=auto/in-resources/8845e144-8902-4204-b80f-9dc7dc2f4bcb/Images/ProductImages/Source/2400019.jpg",
                ""
            ],
            title: "Rupchanda Soyaben Oil",
            cpmpany: "BOEL, Adani Wilmar"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/rupchanda-chinigura-premium-aromatic-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48092&q=best&v=1"
            ],
            title: "RUPCHANDA CHINIGURA RICE",
            cpmpany: "BOEL, Adani Wilmar"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/rupchanda-miniket-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133082&q=best&v=1&m=400&webp=1"
            ],
            title: "RUPCHANDA MINICATE RICE",
            cpmpany: "BOEL, Adani Wilmar"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/rupchanda-premium-nazirshail-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133083&q=best&v=1&m=400&webp=1"
            ],
            title: "Rupchanda Nazirshail Rice",
            cpmpany: "BOEL, Adani Wilmar"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/surf-excel-washing-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128343&q=best&v=1&m=400&webp=1"
            ],
            title: "Surf Excel Washing Powder",
            cpmpany: "Unilever"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/rin-advanced-detergent-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130491&q=best&v=1"
            ],
            title: "Rin Detergent Powder",
            cpmpany: "Unilever"
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/parachute-advansed-onion-enriched-coconut-hair-growth-oil-200-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116167&q=best&v=1&m=400&webp=1"
            ],
            title: "Parachute Onion Coconut Oil",
            cpmpany: "Marico India Ltd."
        },
        {
            imgs: [
                "https://chaldn.com/_mpimage/kurkure-american-style-cream-onion-chips-37-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128908&q=best&v=1",
                "https://chaldn.com/_mpimage/kurkure-masala-munch-chips-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128913&q=best&v=1"
            ],
            title: "Kurkure Chips",
            cpmpany: "PepsiCo India"
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },
        {
            imgs: [
                ""
            ],
            title: "",
            cpmpany: ""
        },

    ]

    return (
        <div className='home-indian-products'>
            <div className="container mb-4">
                <h3 className='mt-5 mb-3'>Indian Products</h3>
                <div className="row">
                    {
                        indianProducts.map((product) =>
                            <div className="col-sm-2 mb-3">
                                <div class="card" >
                                    <img src={product.imgs[0]} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeIndianProducts;
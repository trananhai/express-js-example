const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

const brands = [
    {
        id: 1,
        name: "Citizen",
        description: "Citizen is a brand that is owned by Japanese company Fuji Heavy Industries. It is a Japanese brand of automobiles and motorcycles. It is the second largest Japanese brand after Honda.",
        image: "https://www.citizen.co.jp/wp-content/uploads/2019/01/Citizen-Logo-1.png",
        country: "Japan"
    },
    {
        id: 2,
        name: "Longiness",
        description: "Longiness is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.longiness.co.jp/wp-content/uploads/2019/01/Longiness-Logo-1.png",
        country: "Swiss"
    },
    {
        id: 3,
        name: "Honda",
        description: "Honda is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.honda.co.jp/wp-content/uploads/2019/01/Honda-Logo-1.png",
        country: "Japan"
    },
    {
        id: 4,
        name: "Suzuki",
        description: "Suzuki is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Suzuki-Logo-1.png",
        country: "Japan"
    },
    {
        id: 5,
        name: "Kawasaki",
        description: "Kawasaki is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.kawasaki.co.jp/wp-content/uploads/2019/01/Kawasaki-Logo-1.png",
        country: "Japan"
    },
    {
        id: 6,
        name: "Yamaha",
        description: "Yamaha is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.yamaha.co.jp/wp-content/uploads/2019/01/Yamaha-Logo-1.png",
        country: "Japan"
    },
    {
        id: 7,
        name: "Pepsi",
        description: "Pepsi is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Pepsi-Logo-1.png",
        country: "USA"
    },
    {
        id: 8,
        name: "CocaCola",
        description: "CocaCola is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Suzuki-Logo-1.png",
        country: "England"
    },
    {
        id: 9,
        name: "Iphone",
        description: "Iphone is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Suzuki-Logo-1.png",
        country: "USA"
    },
    {
        id: 10,
        name: "Giày Thượng Đình",
        description: "Giày Thượng Đình is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Suzuki-Logo-1.png",
        country: "Việt Nam"
    },
    {
        id: 11,
        name: "Lexus",
        description: "Iphone is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.suzuki.co.jp/wp-content/uploads/2019/01/Suzuki-Logo-1.png",
        country: "Campuchia"
    },
]

// api/brands?country=Japan&limit=1
app.get('/api/brands', (req, res) => {
    // Request Queries
    const countryQuery = req.query.country;
    if (countryQuery) {
        const filteredBrands = brands.filter(brand => brand.country === countryQuery);
        return res.json({
            data: filteredBrands,
            count: filteredBrands.length
        });
    }
    return res.json({
        data: brands,
        count: brands.length
    });
})

// Handle limit and country
// Handle offset
// Handle sort
// Handle search
// Handle description
// Handle name

app.listen(port, () => {
    console.log(port)
})
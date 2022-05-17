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
]

// api/brands?country=Japan
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

// api/brands/:id


app.listen(port, () => {
    console.log(port)
})
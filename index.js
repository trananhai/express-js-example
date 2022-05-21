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
        id: 3,
        name: "Honda",
        description: "Honda is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.honda.co.jp/wp-content/uploads/2019/01/Honda-Logo-1.png",
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
        id: 6,
        name: "Yamaha",
        description: "Yamaha is a Japanese brand of automobiles and motorcycles. It is the largest Japanese brand after Honda.",
        image: "https://www.yamaha.co.jp/wp-content/uploads/2019/01/Yamaha-Logo-1.png",
        country: "Japan"
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

// Handle limit and country

// api/brands?country=Japan&limit=1

app.get('/api/brands', (req, res) => {
    // Request Queries
    const countryQuery = req.query.country;
    const limitQuery = req.query.limit;
    if (countryQuery) {
        const filteredBrands = brands.filter(brand => brand.country === countryQuery);
        if(limitQuery) {
            const countryLimit = filteredBrands.slice(0, limitQuery);
            return res.json({
                data: countryLimit,
                count: countryLimit.length
            })
        } else {
            return res.json({
                data: filteredBrands,
                count: filteredBrands.length
            });
        }
    }
    if(limitQuery) {
        const limit = brands.slice(0, limitQuery);
        return res.json({
            data: limit,
            count: limit.length
        })
    }

    return res.json({
        data: brands,
        count: brands.length
    });
})
 

// Handle offset

// Handle sort

app.get('/api/brandsSort', (req, res) => {
    const sort = req.query.sort;
    if(sort=='desc') {
        const arrDesc = JSON.parse(JSON.stringify(brands));
        arrDesc.sort((a, b) => {
            return a.id - b.id;
        });
        return res.json({
            data: arrDesc,
            count: arrDesc.length
        })
    } 
    if(sort=='asc') {
        const arrAsc = brands.slice(0);
        arrAsc.sort((a, b) => {
            return b.id - a.id;
        });
        return res.json({
            data: arrAsc,
            count: arrAsc.length
        })
    } 
    if(sort=='name') {
        const arrByName = brands.slice(0);
        arrByName.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return res.json({
            data: arrByName,
            count: arrByName.length
        })
    } 
    return res.json({
        data: brands,
        count: brands.length
    })
})


// Handle search
// Handle description
// Handle name

app.get('/api/name', (req, res) => {
    const nameQuery = req.query.name;
    if(nameQuery) {
        const filteredName = brands.filter(brand => brand.name === nameQuery);
        return res.json({
            data: filteredName,
            count: filteredName.length
        })
    }
    return res.json({
        data: brands,
        count: brands.length
    })
})

app.listen(port, () => {
    console.log(port)
})
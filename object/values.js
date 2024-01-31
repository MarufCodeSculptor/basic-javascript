console.log('values is working');




const computerInfo = {
    brand: 'ExampleBrand',
    model: 'AwesomePC123',
    opeocessor: 'Intel Core i7-9700K',
    RratingSystem: 'Windows 10',
    prAM: '16GB DDR4',
    storage: {
        type: 'SSD',
        capacity: '512GB',
    },
    graphicsCard: 'NVIDIA GeForce RTX 2070',
    display: {
        type: 'IPS LCD',
        size: '24 inches',
        resolution: '1920x1080',
    },
    peripherals: ['Keyboard', 'Mouse', 'Webcam'],
    isLaptop: false,
    purchaseDate: new Date('2023-01-15'),
};

const objectsValues = Object.values(computerInfo)
console.log(objectsValues);

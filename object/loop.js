console.log('-------Loop is working')


const iPhoneInfo = {
    model: 'iPhone 13 Pro',
    color: 'Graphite',
    storageCapacity: '256GB',
    operatingSystem: 'iOS 15',
    display: {
        type: 'Super Retina XDR',
        size: '6.1 inches',
        resolution: '2532x1170 pixels',
    },
    camera: {
        main: 'Triple 12 MP, f/1.8, f/1.5, f/2.8',
        front: '12 MP, f/2.2',
    },
    processor: 'A15 Bionic chip with Neural Engine',
    faceID: true,
    biometricAuthentication: 'Face ID',
    battery: {
        capacity: 'Built-in rechargeable lithium-ion',
        wirelessCharging: true,
    },
    connectivity: ['5G', 'Wi-Fi 6', 'Bluetooth 5.0'],
    ports: ['Lightning'],
    releaseDate: new Date('2021-09-14'),
};

for (const prop in iPhoneInfo) {
    let key = prop;
    
    console.log(iPhoneInfo[key]);
}

// console.log(iPhoneInfo);

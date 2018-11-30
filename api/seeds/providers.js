const Provider = require('../models/Provider')

// create some providers
const providers = [
    {
        name: 'Appletree Natural Foods',
        address: 'test',
        certification: '',
        products: ['Dairy', 'Bulk', 'Packaged', 'Processed', 'Frozen', 'Beverages', 'Baked Goods'],
        tours: false,
        pos: true,
        about: 'test',
        email: 'test',
        phone: '416-504-9677',
        website: 'test',
        socialMedia: [
            {
                instagram: '@blah',
            }
        ]
    },
    {
        name: 'Appletree Natural Foods',
        address: 'test',
        certification: '',
        products: ['Dairy', 'Bulk', 'Packaged', 'Processed', 'Frozen', 'Beverages', 'Baked Goods'],
        tours: false,
        pos: true,
        about: 'test',
        email: 'test',
        phone: '416-504-9677',
        website: 'test',
        socialMedia: [
            {
                instagram: '@blah',
            }
        ]
    }
]

// providers.map(provider => {
//     var newProvider = new Provider(provider)
// })

// use the Providers model to insert/save
// for (source of sources) {
//     var newProvider = new Provider(source);
//     providers.push(newProvider)
// }

// const providers = sources.map(source => {
//     var newProvider = new Provider(source)
//     providers.push(newProvider)
// })

// export
module.exports = providers
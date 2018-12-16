const Provider = require('../models/Provider')

// create some providers
const providers = [
    {
        properties: {
            name: 'Chez Nous Farms',
            certification: ['Canada Organic', 'USDA Organic'],
            products: ['Produce', 'Eggs'],
            tours: true,
            pos: true,
            about: 'Our beautiful 3 acres is located behind our property and accessed by following a wood chip path through the yard. So many have asked so where do you grow Chez Nous? They are really surprised when they see! In the store, we have placed an aerial view of the property from before we purchased to show our growing area. Also check out our blog and read all about everything that goes on here! Better yet keep an eye out for farm tours available or an open house this season.',
            email: 'cheznousfarms@cogeco.ca',
            phone: '905-382-1556',
            website: 'http://www.cheznousfarms.com/',
            socialMedia: [
                {
                    instagram: 'https://www.instagram.com/ChezNousFarms/',
                    facebook: 'https://www.facebook.com/chez.farms',
                    twitter: 'https://twitter.com/cheznousfarms'
                }
            ],
            category: 'Farm',
            geometry: {
                coordinates: [
                    41.628591,
                    -86.659448
                ]
            }
        }
    },
    {
        properties: {
            name: 'Chick-a-Biddy Acres CSA',
            products: ['Produce', 'Eggs', 'Chicken', 'Turkey', 'Pigs'],
            tours: true,
            pos: true,
            about: 'Sherry and Adina purchased the farm in 2003, giving the vegetable garden a permanent place to call home. Previously we had run the business on land owned by friends and supporters. The first was chef Michael Stadtlander’s Eigensinn Farm, where Chick-a-biddy got its start in 2000 with 12 CSA members, as well as supplying Michael’s world famous farm restaurant. Chick-a-biddy Acres is now 19 years old and continues to grow and blossom. We constructed 3 greenhouses and a custom designed root cellar, which has allowed us to grow and sell vegetables all year long. Our garden area has expanded to 5 acres, producing a an incredible assortment of delicious veggies. Our present day membership is 50 households and we have added free-range chicken and turkey, pastured pork, and eggs to our vegetable offerings. As well, we offer our members naturally raised black angus beef, maple syrup and honey from neighbouring farms.',
            email: 'farm@chickabiddyacres.com',
            phone: '705-696-3506',
            website: "http://www.chickabiddyacres.com/",
            socialMedia: [
                {
                    facebook: 'https://www.facebook.com/chickabiddyacres',
                }
            ],
            category: 'Farm',
            geometry: {
                coordinates: [
                    44.300720,
                    -78.031532
                ]
            }
        }
    },
    {
        properties: {
            name: 'Everdale Organic Farm and Environmental Learning Centre',
            products: ['Produce'],
            tours: true,
            pos: true,
            about: 'Everdale’s mission is to be a farm-based organization that provides hands-on, solution-based food and farming education to build and engage healthy local communities. To accomplish this we deliver a wide range of hands-on learning programs on food and farming to people of all ages and backgrounds.  The three main pillars of our work are: production farm, farmer training, and school programs.',
            email: 'info@everdale.org',
            phone: '519-855-4859',
            website: 'http://www.everdale.org/',
            socialMedia: [
                {
                    instagram: 'https://www.instagram.com/everdalefarm/',
                    facebook: 'https://www.instagram.com/everdalefarm/'
                }
            ],
            category: 'Farm',
            geometry: {
                coordinates: [
                    43.773155,
                    -80.147238
                ]
            }
        }
    },
    {
        properties: {
            name: 'Ignatius Jesuit Centre',
            products: ['Produce'],
            tours: true,
            pos: true,
            about: 'We are dedicated to providing programs that foster an ecological way of life, for the healing of the world, nurture a deeper spirituality in people, leading to inner freedom, promote the production of local sustainable food, and provide a welcoming space for individual and communal discernment, and education.',
            email: 'reception@ignatiusguelph.ca',
            phone: '519-824-1250',
            website: 'https://ignatiusguelph.ca/',
            socialMedia: [
                {
                    facebook: 'https://www.facebook.com/pages/Ignatius-Jesuit-Centre-of-Guelph/128690503931539',
                    twitter: 'https://twitter.com/ignatiusguelph',
                    instagram: 'https://www.instagram.com/ignatiusguelph/'
                }
            ],
            category: 'Farm',
            geometry: {
                coordinates: [
                    43.571059,
                    -80.280553
                ]
            }
        }
    }
]

// export
module.exports = providers
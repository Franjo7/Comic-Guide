import bcrypt from 'bcryptjs';

const data = {
    
    users: [
        {
          name: 'Franjo',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products: [
        {
            
            name: 'Watchmen (Alan Moore)',
            category: 'Books',
            image: '/images/p1.jpg',
            price:25.49,
            countInStock: 10,
            rating:4.8,
            numReviews:40,
            description: 'quality product',
        },
        {
            
            name: 'V for Vendetta (Alan Moore & David Lloyd)',
            category: 'Books',
            image: '/images/p2.jpg',
            price:22.35,
            countInStock: 19,
            rating:4.7,
            numReviews:34,
            description: "high quality product",
        },
        {
            
            name: 'The Walking Dead (Robert Kirkman)',
            category: 'Books',
            image: '/images/p3.jpg',
            price:17.49,
            countInStock: 25,
            rating:4.7,
            numReviews:50,
            description: "high quality product",
        },
        {
            
            name: 'The Sandman (Neil Gaiman & others)',
            category: 'Books',
            image: '/images/p4.jpg',
            price:20.00,
            countInStock: 7,
            rating:4.6,
            numReviews:32,
            description: "high quality product",
        },
        {
            
            name: 'Maus (Art Spiegelman)',
            category: 'Books',
            image: '/images/p5.jpg',
            price:24.95,
            countInStock: 22,
            rating:4.8,
            numReviews:35,
            description: 'high quality product',
        },
        {
           
            name: 'Transmetropolitan (Warren Ellis)',
            category: 'Books',
            image: '/images/p6.jpg',
            price:16.65,
            countInStock: 14,
            rating:4.3,
            numReviews:45,
            description: 'high quality product',
        },
        {
            
            name: 'Fables (Bill Willingham)',
            category: 'Books',
            image: '/images/p7.jpg',
            price:17.75,
            countInStock: 12,
            rating:4.3,
            numReviews:40,
            description: 'high quality product',
        },
        {
           
            name: 'Preacher (Garth Ennis, Steve Dillon)',
            category: 'Books',
            image: '/images/p8.jpg',
            price:20,
            countInStock: 4,
            rating:4.4,
            numReviews:33,
            description: 'high quality product',
        },
        {
            
            name: 'Y: The Last Man (Brian K. Vaughan)',
            category: 'Books',
            image: '/images/p9.jpg',
            price:21.45,
            countInStock: 15,
            rating:4.5,
            numReviews:43,
            description: 'high quality product',
        },
        {
            
            name: 'Blankets (Craig Thompson)',
            category: 'Books',
            image: '/images/p10.jpg',
            price:24.45,
            countInStock: 19,
            rating:4.5,
            numReviews:34,
            description: 'high quality product',
        },
        {
           
            name: 'Saga (Brian Vaughan & Fiona Staples)',
            category: 'Books',
            image: '/images/p11.jpg',
            price:29.95,
            countInStock: 22,
            rating:4.2,
            numReviews:37,
            description: 'high quality product',
        },
        {
           
            name: 'Marvels (Alex Ross and Kurt Busiek)',
            category: 'Books',
            image: '/images/p12.jpg',
            price:25.45,
            countInStock: 27,
            rating:4.1,
            numReviews:29,
            description: 'high quality product',
        },
        {
            
            name: 'Scott Pilgrim (Bryan Lee O’Malley)',
            category: 'Books',
            image: '/images/p13.jpg',
            price:26,
            countInStock: 11,
            rating:3.9,
            numReviews:26,
            description: 'high quality product',
        },
        {
            
            name: 'Sin City (Frank Miller)',
            category: 'Books',
            image: '/images/p14.jpg',
            price:17,
            countInStock: 15,
            rating:4.0,
            numReviews:30,
            description: 'high quality product',
        },
        {
            
            name: 'All-Star Superman (Grant Morrison)',
            category: 'Books',
            image: '/images/p15.jpg',
            price:22.75,
            countInStock: 16,
            rating:4.0,
            numReviews:40,
            description: 'high quality product',
        },
        {
            
            name: 'Kingdom Come (Mark Waid, Alex Ross)',
            category: 'Books',
            image: '/images/p16.jpg',
            price:24.85,
            countInStock: 20,
            rating:3.7,
            numReviews:41,
            description: 'high quality product',
        },
        {
            
            name: 'Superman: Red Son (Mark Millar)',
            category: 'Books',
            image: '/images/p17.jpg',
            price:29.95,
            countInStock: 8,
            rating:3.5,
            numReviews:28,
            description: 'high quality product',
        },
        {
            
            name: 'Persepolis (Marjane Satrapi)',
            category: 'Books',
            image: '/images/p18.jpeg',
            price:27.45,
            countInStock: 10,
            rating:3.9,
            numReviews:39,
            description: 'high quality product',
        },
    ]
}
export default data;
export const Products = [
    {
        id: 1,
        name: "SDFM Limited Edition",
        price: 199.99,
        discountedPrice: 149.99,
        description: `The SDFM Premium Hoodie combines urban style with ultimate comfort. Made with premium cotton blend fabric,
                            it features a modern fit, adjustable drawstring hood, and spacious kangaroo pocket. Perfect for casual
                            wear or training sessions, this hoodie offers both style and functionality.
                       `,
        images: ["https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
            "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg"],
        sizeAvailable: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 2,
        name: "SDFM Urban Camo",
        price: 179.99,
        discountedPrice: 149.99,

        description: `The SDFM Urban Camo Hoodie features a bold camouflage pattern with a modern twist. Made with soft, breathable fabric,
                            it offers a relaxed fit, ribbed cuffs, and a front pouch pocket. Ideal for streetwear enthusiasts looking for a statement piece.`,
        images: ["https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
            "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg"],
        sizeAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 3,
        name: "SDFM Tech Fleece",
        price: 219.99,
        discountedPrice: 149.99,
        description: `The SDFM Tech Fleece Hoodie combines high-performance technology with sleek design. Featuring lightweight fleece construction,
                            it offers superior warmth, moisture-wicking properties, and a streamlined fit. Perfect for athletes and techwear enthusiasts.`,
        images: ["https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
            "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg"],
        sizeAvailable: ['S', 'M', 'L'],
    },
    {
        id: 4,
        name: "SDFM Retro Logo",
        price: 169.99,
        discountedPrice: 149.99,
        description: `The SDFM Retro Logo Hoodie pays homage to classic streetwear style. Made with soft cotton blend fabric,
                            it features a vintage-inspired logo print, adjustable drawstring hood, and front kangaroo pocket. A timeless addition to any wardrobe.`,
        images: ["https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
            "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg"],
        sizeAvailable: ['S', 'M', 'L'],
    }
];

export type Product = typeof Products[number];
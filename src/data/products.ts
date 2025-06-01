type Product = {
    brand: string; //check product-list
    name: string;
    price: number;
    description: string;
    image: string;
}

//{brand: "", name: "", price: 900, description: ""}

export const products: Product[] = [
    {brand: "Montory", name: "3770", price: 399, description: "Great videocard", image: "/data/1.png"},
    {brand: "Montory", name: "3770 Pro", price: 499, description: "Great videocard with more memory", image: "/data/1.png"},
    {brand: "Montory", name: "3750", price: 270, description: "Great videocard with even more memory", image: "/data/2.png"},
    {brand: "Kenzai", name: "MX 2025", price: 259, description: "Great videocard for budget gamers", image: "/data/2.png"},
    {brand: "Kenzai", name: "NS 2025", price: 599   , description: "Great videocard for budget gamers with more memory", image: "/data/5.png"},  
    {brand: "Kenzai", name: "RS 2025 ", price: 899, description: "Great videocard for budget gamers with even more memory", image: "/data/5.png"},
    {brand: "Kenzai", name: "Aizetsu", price: 1799, description: "4k", image: "/data/aizetsu.png"},
]


//npm run generate:db 
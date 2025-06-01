type Product = {
    brand: "Montory"; //check product-list
    name: string;
    price: number;
    description: string;
    image?: string;
}

//{brand: "", name: "", price: 900, description: ""}

export const products: Product[] = [
    {brand: "Montory", name: "3770", price: 399, description: "Great videocard", image: "./public/images/Montory3770.png"},
    {brand: "Montory", name: "3770 Pro", price: 499, description: "Great videocard with more memory"},
]
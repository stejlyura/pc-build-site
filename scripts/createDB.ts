type Product = {
    brand: string;
    name: string;
    price: number;
    description: string;
}

//{brand: "", name: "", price: 900, description: ""}

const products: Product[] = [
    {brand: "", name: "", price: 900, description: ""}
]




import { writeFileSync } from 'fs';
import { join } from 'path';

const outputPath = join(__dirname, '../public/data/products.json');
writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');
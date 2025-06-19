import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// импорт с относительным путём
import { products } from '../src/data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputPath = join(__dirname, '../../public/data/products.json');
writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');

console.log('✅ База успешно создана!');

import mongoose from "mongoose"

type Product = {
    id: number;
    brand: string;
    name: string;
    type: "GPU" | "CPU" | "RAM" | "SSD" | "HDD" | "PSU" | "CASE" | "COOLER" | "motherboard";
    socket?: string | "J100"| "ML2";
    price: number;
    description: string;
    image: string; 
}



//{brand: "", name: "", price: 900, description: ""}

/* export const products: Product[] = [
    {id: 1, brand: "Montory", name: "3770", type: "GPU", price: 399, description: "Great videocard", image: "/data/1.png"},
    {id: 2, brand: "Montory", name: "3770 Pro", type: "GPU", price: 499, description: "Great videocard with more memory", image: "/data/1.png"},
    {id: 3, brand: "Montory", name: "3750", type: "GPU", price: 270, description: "Great videocard with even more memory", image: "/data/2.png"},
    {id: 4, brand: "Kenzai", name: "MX 2025", type: "GPU", price: 259, description: "Great videocard for budget gamers", image: "/data/2.png"},
    {id: 5, brand: "Kenzai", name: "NS 2025", type: "GPU", price: 599   , description: "Great videocard for budget gamers with more memory", image: "/data/4.png"},  
    {id: 6, brand: "Kenzai", name: "RS 2025 ", type: "GPU", price: 899, description: "Great videocard for budget gamers with even more memory", image: "/data/5.png"},
    {id: 7, brand: "Kenzai", name: "Aizetsu", type: "GPU", price: 1799, description: "4k", image: "/data/aizetsu.png"},
    {id: 8, brand: "Jintek", name: "RedTiger 7X", type: "CPU", socket:"J100", price: 270, description: "Оптимальный выбор для геймеров с ограниченным бюджетом", image: "/data/12.png"},
    {id: 9, brand: "Jintek", name: "JadeCore 9P", type: "CPU", socket:"J100", price: 310, description: "Универсальный процессор для тех, кто хочет и поиграть, и поработать", image: "/data/13.png"},
    {id: 10, brand: "Jintek", name: "StormFox X10", type: "CPU", socket:"J100", price: 359, description: "Максимум в своём классе. Для стримеров, монтажёров и хардкорных геймеров", image: "/data/11.png"},
    {id: 11, brand: "Zernar", name: "Helios G47", type: "CPU", socket:"ML2", price: 429, description: "Геймерский флагман с архитектурой Z-Stream, адаптированной под высокочастотные игры, стриминг и конкурентный киберспорт", image: "/data/14.png"},
    {id: 12, brand: "Zernar", name: "Neuron C61-AI", type: "CPU", socket:"ML2", price: 629, description: "Гражданский ИИ-процессор нового поколения, созданный на базе архитектуры NeuralCore", image: "/data/15.png"},
    {id: 13, brand: "Jintek", name: "Nova M360", type: "motherboard", socket:"J100", price: 199, description: "Материнская плата для процессоров J100 с поддержкой PCIe 4.0 и DDR4", image: "/data/Jm.png"},
    {id: 14, brand: "Zernar", name: "Sentinel Z790-P", type: "motherboard", socket: "ML2", price: 299, description: "Материнская плата для процессоров ML2 с поддержкой PCIe 5.0 и DDR5", image: "/data/Zm.png"},
    {id: 15, brand: "Kenzai", name: "Pulse 8GB ", type: "RAM", price: 89, description: "Оперативная память DDR4 с частотой 3200 МГц", image: "/data/ram.png"},
] */


//npm run generate:db 

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["GPU", "CPU", "RAM", "SSD", "HDD", "PSU", "CASE", "COOLER", "motherboard"],
    required: true
  },
  socket: {
    type: String,
    enum: ["J100", "ML2"],
    required: false
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

export const Product = mongoose.model('Product', productSchema);


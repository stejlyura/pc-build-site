type Product = {
    brand: string; //check product-list
    name: string;
    socket?: string | "J100"| "ML2";
    price: number;
    description: string;
    image: string;
}
type NewProduct = {
    brand: string;
    name: string;
    type: "GPU" | "CPU" | "RAM" | "SSD" | "HDD" | "PSU" | "CASE" | "COOLER";
    socket?: string | "J100"| "ML2";
    price: number;
    description: string;
    image: string; 
}


//{brand: "", name: "", price: 900, description: ""}

export const products: NewProduct[] = [
    {brand: "Montory", name: "3770", type: "GPU", price: 399, description: "Great videocard", image: "/data/1.png"},
    {brand: "Montory", name: "3770 Pro", type: "GPU", price: 499, description: "Great videocard with more memory", image: "/data/1.png"},
    {brand: "Montory", name: "3750", type: "GPU", price: 270, description: "Great videocard with even more memory", image: "/data/2.png"},
    {brand: "Kenzai", name: "MX 2025", type: "GPU", price: 259, description: "Great videocard for budget gamers", image: "/data/2.png"},
    {brand: "Kenzai", name: "NS 2025", type: "GPU", price: 599   , description: "Great videocard for budget gamers with more memory", image: "/data/5.png"},  
    {brand: "Kenzai", name: "RS 2025 ", type: "GPU", price: 899, description: "Great videocard for budget gamers with even more memory", image: "/data/5.png"},
    {brand: "Kenzai", name: "Aizetsu", type: "GPU", price: 1799, description: "4k", image: "/data/aizetsu.png"},
    {brand: "Jintek", name: "RedTiger 7X", type: "CPU", socket:"J100", price: 270, description: "Оптимальный выбор для геймеров с ограниченным бюджетом", image: "/data/12.png"},
    {brand: "Jintek", name: "JadeCore 9P", type: "CPU", socket:"J100", price: 310, description: "Универсальный процессор для тех, кто хочет и поиграть, и поработать", image: "/data/13.png"},
    {brand: "Jintek", name: "StormFox X10", type: "CPU", socket:"J100", price: 359, description: "Максимум в своём классе. Для стримеров, монтажёров и хардкорных геймеров", image: "/data/11.png"},
    {brand: "Zernar", name: "Helios G47", type: "CPU", socket:"ML2", price: 429, description: "Геймерский флагман с архитектурой Z-Stream, адаптированной под высокочастотные игры, стриминг и конкурентный киберспорт", image: "/data/14.png"},
    {brand: "Zernar", name: "Neuron C61-AI", type: "CPU", socket:"ML2", price: 629, description: "Гражданский ИИ-процессор нового поколения, созданный на базе архитектуры NeuralCore", image: "/data/15.png"},
]


//npm run generate:db 
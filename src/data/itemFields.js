// src/data/itemFields.js

export const itemFields = {
  "used-mobile": {
    label: "Used Mobile",
    fields: [
      {
        name: "brand",
        label: "Brand",
        type: "select",
        options: [
          "Apple",
          "Samsung",
          "OnePlus",
          "Xiaomi",
          "Oppo",
          "Vivo",
          "Realme",
          "Google",
          "Motorola",
          "Nokia",
          "Sony",
        ],
      },
      {
        name: "model",
        label: "Model",
        type: "select",
        dependsOn: "brand",
        options: {
          Apple: ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 12 Mini"],
          Samsung: ["Galaxy S22", "Galaxy S23", "Galaxy A73", "Galaxy Note 20"],
          OnePlus: ["OnePlus 9", "OnePlus 10T", "OnePlus Nord 2"],
          Xiaomi: ["Redmi Note 11", "Mi 12 Pro", "Redmi 10"],
          Oppo: ["Oppo Reno 8", "Oppo F21"],
          Vivo: ["Vivo V25", "Vivo Y22"],
          Realme: ["Realme GT 2", "Realme Narzo 50"],
          Google: ["Pixel 6", "Pixel 7"],
          Motorola: ["Moto G Power", "Edge 40"],
          Nokia: ["Nokia G50", "Nokia 5.4"],
          Sony: ["Xperia 1 IV", "Xperia 10 IV"],
        },
      },
      {
        name: "storage",
        label: "Storage",
        type: "select",
        options: ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"],
      },
      {
        name: "ram",
        label: "RAM",
        type: "select",
        options: ["2GB", "4GB", "6GB", "8GB", "12GB", "16GB"],
      },
      {
        name: "year",
        label: "Purchase Year",
        type: "number",
        placeholder: "e.g., 2022",
      },
      {
        name: "condition",
        label: "Condition",
        type: "select",
        options: ["Like New", "Refurbished", "Good", "Fair"],
      },
      {
        name: "color",
        label: "Color",
        type: "text",
      },
      {
        name: "network",
        label: "Network",
        type: "select",
        options: ["4G", "5G", "3G", "Unlocked"],
      },
    ],
  },

  "used-laptop": {
    label: "Used Laptop",
    fields: [
      {
        name: "brand",
        label: "Brand",
        type: "select",
        options: ["Dell", "HP", "Apple", "Lenovo", "Asus", "Acer", "MSI"],
      },
      {
        name: "model",
        label: "Model",
        type: "select",
        dependsOn: "brand",
        options: {
          Dell: ["Inspiron 15", "XPS 13", "Latitude 7420"],
          HP: ["Pavilion 15", "Omen 16", "EliteBook 850"],
          Apple: ["MacBook Air M1", "MacBook Pro 16", "MacBook Air M2"],
          Lenovo: ["ThinkPad X1", "IdeaPad 5", "Yoga 9i"],
          Asus: ["ROG Zephyrus", "ZenBook 14", "VivoBook S15"],
          Acer: ["Aspire 5", "Predator Helios 300", "Swift 3"],
          MSI: ["Stealth 15M", "GE76 Raider"],
        },
      },
      {
        name: "ram",
        label: "RAM",
        type: "select",
        options: ["4GB", "8GB", "16GB", "32GB", "64GB"],
      },
      {
        name: "storage",
        label: "Storage",
        type: "select",
        options: ["256GB", "512GB", "1TB", "2TB", "4TB"],
      },
      {
        name: "processor",
        label: "Processor",
        type: "text",
        placeholder: "e.g., Intel i7, AMD Ryzen 5",
      },
      {
        name: "gpu",
        label: "GPU",
        type: "text",
        placeholder: "Optional: e.g., NVIDIA GTX 1650",
      },
      {
        name: "screenSize",
        label: "Screen Size",
        type: "select",
        options: ["13 inch", "14 inch", "15 inch", "16 inch", "17 inch"],
      },
      {
        name: "year",
        label: "Purchase Year",
        type: "number",
        placeholder: "e.g., 2021",
      },
      {
        name: "condition",
        label: "Condition",
        type: "select",
        options: ["Like New", "Refurbished", "Good", "Fair"],
      },
    ],
  },

  "gaming-console": {
    label: "Gaming Console",
    fields: [
      {
        name: "brand",
        label: "Brand",
        type: "select",
        options: ["Sony", "Microsoft", "Nintendo"],
      },
      {
        name: "model",
        label: "Model",
        type: "select",
        options: [
          "PlayStation 4",
          "PlayStation 5",
          "Xbox One",
          "Xbox Series X",
          "Nintendo Switch",
        ],
      },
      {
        name: "storage",
        label: "Storage",
        type: "select",
        options: ["500GB", "1TB", "2TB", "4TB"],
      },
      {
        name: "year",
        label: "Purchase Year",
        type: "number",
        placeholder: "e.g., 2022",
      },
      {
        name: "condition",
        label: "Condition",
        type: "select",
        options: ["Like New", "Refurbished", "Good", "Fair"],
      },
      {
        name: "color",
        label: "Color",
        type: "text",
      },
    ],
  },

  "gaming-cd": {
    label: "Gaming CD",
    fields: [
      {
        name: "platform",
        label: "Platform",
        type: "select",
        options: ["PS4", "PS5", "Xbox", "PC", "Nintendo Switch"],
      },
      {
        name: "gameTitle",
        label: "Game Title",
        type: "text",
      },
      {
        name: "edition",
        label: "Edition",
        type: "select",
        options: ["Standard", "Deluxe", "Collector's", "Game of the Year"],
      },
      {
        name: "year",
        label: "Release Year",
        type: "number",
        placeholder: "e.g., 2023",
      },
      {
        name: "condition",
        label: "Condition",
        type: "select",
        options: ["Like New", "Used", "Sealed"],
      },
    ],
  },
};
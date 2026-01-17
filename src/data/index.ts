import { v4 as uuid } from "uuid";
import type { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Chocolate Milkshake",
    description:
      "Milk, Vanilla Ice Cream Chocolate, Emulsifier, Vanilla Flavour, VegetablenGums, Colour...",
    imageURL: "https://api.mahersdev.com/images/Chocolate%20Milkshake.png",
    price: "10",
    addFlavors: [],
    category: {
      name: "Cold Drinks",
      imageURL: "https://api.mahersdev.com/images/Chocolate%20Milkshake.png",
    },
  },
  {
    id: uuid(),
    title: "Festive White Choc & Spice",
    description:
      "MILK (69%), Vanilla Ice Cream (23.7%) [Fresh whole MILK, Liquid Sugar, Fresh cream (MILK), MILK solids non fat, Maltodextrin from maize, Emulsifi er (471), Vanilla Flavour ,VegetablenGums (412, 407), Colour (160(b))], Sauce",
    imageURL:
      "https://api.mahersdev.com/images/Festive%20White%20Choc%20&%20Spice.png",
    price: "15",
    addFlavors: [],
    category: {
      name: "Cold Drinks",
      imageURL: "https://api.mahersdev.com/images/Chocolate%20Milkshake.png",
    },
  },
  {
    id: uuid(),
    title: "Ham, Cheese & Tomato Muffin",
    description:
      "Scone Mix (40.2%) WHEAT Flour (vitamins Thiamin, Folate), Sugar, Raising Agents, 541, 500,341,Vegetable Oils, Palm, Canola, MILK Solids, Salt, Emulsifier 481.],MILK (17.7%), Tomato (12.1%), Ham (12.1%) [Pork (70%), Water, Cure",
    imageURL:
      "https://api.mahersdev.com/images/Ham,%20Cheese%20&%20Tomato%20Muffin.png",
    price: "20",
    addFlavors: [],
    category: {
      name: "cakes",
      imageURL:
        "https://api.mahersdev.com/images/Ham,%20Cheese%20&%20Tomato%20Muffin.png",
    },
  },
  {
    id: uuid(),
    title: "Churro Muffin",
    description:
      "Muffin (37.6%) [WHEAT Flour(WHEAT Flour, Vitamins(Thiamin, Folate)), Sugar, SOY Flour, EGG Powder, MILK Solids, Raising Agents(500, 341, 450), WHEAT Bran, WHEAT Germ, Humectant(420), Flavour, Emulsifier(481)",
    imageURL: "https://api.mahersdev.com/images/New-Churro-Muffin.png",
    price: "25",
    addFlavors: [],
    category: {
      name: "cakes",
      imageURL:
        "https://api.mahersdev.com/images/Ham,%20Cheese%20&%20Tomato%20Muffin.png",
    },
  },
  {
    id: uuid(),
    title: "Lemon Raspberry Loaf",
    description:
      "Loaf Mix (57%) [Sugar, WHEAT Flour, EGG Powder, MILK Solids, Brown Sugar, WHEAT Starch, Raising Agents 500, 450, 341, Flavour, SULPHITES], Raspberries (17.9%) [RASPBERRIES], Water (17.1%), ICING SUGAR (12.6%) [Sugar.",
    imageURL:
      "https://muffinbreak.com.au/wp-content/uploads/2024/08/LEMON-RASPBERRY-LOAF-angled-01.png",
    price: "25",
    addFlavors: [],
    category: {
      name: "cakes",
      imageURL:
        "https://api.mahersdev.com/images/Ham,%20Cheese%20&%20Tomato%20Muffin.png",
    },
  },
  {
    id: uuid(),
    title: "Classic Waffle",
    description: "Large Piece Waffle Served With Butter And Maple Syrup",
    imageURL:
      "https://www.waffly.sa/web/image/product.product/11942/image_1024/Classic%20Waffle?unique=163307e",
    price: "30",
    addFlavors: [],
    category: {
      name: "waffles",
      imageURL:
        "https://www.waffly.sa/web/image/product.product/11942/image_1024/Classic%20Waffle?unique=163307e",
    },
  },
  {
    id: uuid(),
    title: "Double Fruit Waffle",
    description: "Large Piece Waffle Served With seasonal fruits And Chocolate",
    imageURL:
      "https://www.waffly.sa/web/image/product.product/11943/image_1024/Double%20Fruit%20Waffle?unique=163307e",
    price: "40",
    addFlavors: [],
    category: {
      name: "waffles",
      imageURL:
        "https://www.waffly.sa/web/image/product.product/11942/image_1024/Classic%20Waffle?unique=163307e",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const addFlavors: string[] = [];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Cold Drinks",
    imageURL: "https://api.mahersdev.com/images/Chocolate%20Milkshake.png",
  },
  {
    id: uuid(),
    name: "cakes",
    imageURL:
      "https://api.mahersdev.com/images/Ham,%20Cheese%20&%20Tomato%20Muffin.png",
  },
  {
    id: uuid(),
    name: "waffles",
    imageURL:
      "https://www.waffly.sa/web/image/product.product/11942/image_1024/Classic%20Waffle?unique=163307e",
  },
];

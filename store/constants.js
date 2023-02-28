import Shoe from "../public/shoe.avif";
import Clothe from "../public/Clothe.avif";
import Bags from "../public/Bags.avif";
import Watch2 from "../public/Watch2.avif";
import Samsung from "../public/samsung2.png";
import SmartWatch from "../public/SmartWatch.png";
import gown1 from "../public/gown1.png";
import alexia from "../public/alexia.png";

export const categoryItems = [
  { id: 1, name: "Clothes", image: Clothe },
  { id: 2, name: "Bags", image: Bags },
  { id: 3, name: "Shoes", image: Shoe },
  { id: 4, name: "Wrist Watch", image: Watch2 },
];

export const discountItems = [
  {
    id: 1,
    name: "Loud Speaker",
    image: alexia,
    price: 5000,
    description: "Amazing stero speaker for top quality bass sound",
  },
  {
    id: 2,
    name: "Bags",
    image: Bags,
    price: 3000,
    description: "Black leather bad with weather resistant and tough skin",
  },
];

export const Viewsettings = {
  heroSection: {
    typewiter: true,
    position: "right",
    stripBackground: true,
    textStrings: [
      "Hello World from here and overboard from life",
      // "Shopping just Got Easy With User Commerce",
      // "A user FriendLy Design",
    ],
  },
};

export const featuredPoduct = [
  {
    name: "Beautiiful red gown",
    price: "5,000",
    discount: "4,000",
    image: gown1,
    tagline: "high visibility",
  },
  {
    name: "Samsung S8 Cannon xmax extra pro hd",
    price: "4,000",
    discount: null,
    image: Samsung,
    tagline: "Pop Hoodie",
  },
  {
    name: "Oraimo Smart Watch",
    price: "11,000",
    discount: "4,000",
    image: SmartWatch,
    tagline: "smart watch",
  },
  {
    name: "Beautiiful red gown",
    price: "5,000",
    discount: "4,000",
    image: alexia,
    tagline: "high visibility",
  },
];

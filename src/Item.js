class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.image = process.env.PUBLIC_URL + `product-images/${this.name}.png`;
  }
}

const products = [
  ["EQT SUPPORT DRAGON BALL Z", 150],
  ["NEW BALANCE 997", 200],
  ["NEW BALANCE 247", 120],
  ["NEW BALANCE 420", 120],
  ["NEW BALANCE 530", 99],
  ["NMD_R2 UNITED ARROWS", 130],
  ["PHARREL WILLIAMS SOLAR HU GLIDE", 170],
  ["ULTRA BOOST PRIDE", 140],
  ["ULTRA BOOST SILVER", 130],
  ["YEEZY BOOST 700 V2", 280],
  ["YEEZY BOOST V2", 220],
  ["ZX 2K BOOST", 130],
  ["ZX 2K FLUX", 120],
];

const items = products.map((product) => {
  return new Item(product[0], product[1]);
});

export default items;

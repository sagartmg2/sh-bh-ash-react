let cartItems = [
  {
    _id: "64549d085e021d67be48e82a",
    name: "PC",
    price: 10000,
    count: 2,
    image:
      "http://res.cloudinary.com/dtv8dtpkm/image/upload/v1683266823/lbrkqamcqdsz4lgl6was.jpg",
    quantity: 1,
  },
  {
    _id: "64c78ccd40d427c8a7594710",
    name: "Gold PS5",
    price: 130000,
    count: 1,
    image:
      "http://res.cloudinary.com/dtv8dtpkm/image/upload/v1690799309/cq1a7peytefmxzgdukqf.jpg",
    quantity: 1,
  },
];

cartItems = cartItems.map((el) => {
  if (el._id == "64549d085e021d67be48e82a") {
    return { ...el, quantity: el.quantity + 1 };
  }
  return el;
});

console.log(cartItems);
// console.log(cartItems.find(el =>el._id == "64549d085e021d67be48ea" ))

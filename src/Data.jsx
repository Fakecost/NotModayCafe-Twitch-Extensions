const CDN = "https://sunny.bixmy.party/cdn/images/Customer/";

export const availableSkins = [
  {
    id: "axolotl",
    name: "Axolotl1",
    file: "Character_Customer_Axolotl1_Idle-export.png",
  },
  {
    id: "beagle",
    name: "Beagle1",
    file: "Character_Customer_Beagle1_Idle-export.png",
  },
  {
    id: "bear",
    name: "Bear1",
    file: "Character_Customer_Bear1_Idle-export.png",
  },
  {
    id: "bird",
    name: "Bird1",
    file: "Character_Customer_Bird1_Idle-export.png",
  },
  {
    id: "capybara",
    name: "Capybara1",
    file: "Character_Customer_Capybara1_Idle-export.png",
  },
  {
    id: "cat",
    name: "Cat1",
    file: "Character_Customer_Cat1_Idle-export.png",
  },
  {
    id: "elephant",
    name: "Elephant1",
    file: "Character_Customer_Elephant1_Idle-export.png",
  },
  {
    id: "frog",
    name: "Frog1",
    file: "Character_Customer_Frog1_Idle-export.png",
  },
  {
    id: "giraffe",
    name: "Giraffe1",
    file: "Character_Customer_Giraffe1_Idle-export.png",
  },
  {
    id: "hippo1",
    name: "Hippo1",
    file: "Character_Customer_Hippo1_Idle-export.png",
  },
  {
    id: "hippo2",
    name: "Hippo2",
    file: "Character_Customer_Hippo2_Idle-export.png",
  },
  {
    id: "hyena",
    name: "Hyena1",
    file: "Character_Customer_Hyena1_Idle-export.png",
  },
  {
    id: "owl",
    name: "Owl1",
    file: "Character_Customer_Owl1_Idle-export.png",
  },
  {
    id: "panda",
    name: "Panda1",
    file: "Character_Customer_Panda1_Idle-export.png",
  },
  {
    id: "rabbit",
    name: "Rabbit1",
    file: "Character_Customer_Rabbit1_Idle-export.png",
  },
  {
    id: "raccoon",
    name: "Raccoon1",
    file: "Character_Customer_Raccoon1_Idle-export.png",
  },
  {
    id: "rhino",
    name: "Rhino1",
    file: "Character_Customer_Rhino1_Idle-export.png",
  },
  {
    id: "shark",
    name: "Shark1",
    file: "Character_Customer_Shark1_Idle-export.png",
  },
  {
    id: "sheep",
    name: "Sheep1",
    file: "Character_Customer_Sheep1_Idle-export.png",
  },
  {
    id: "tiger",
    name: "Tiger1",
    file: "Character_Customer_Tiger1_Idle-export.png",
  },
  {
    id: "wolf",
    name: "Wolf1",
    file: "Character_Customer_Wolf1_Idle-export.png",
  },
  {
    id: "zebra",
    name: "Zebra1",
    file: "Character_Customer_Zebra1_Idle-export.png",
  },
];

export const availableFoods = [
  // Foods
  ...[...Array(200)].map((_, i) => ({
    id: `food-${i + 1}`,
    name: `Food ${i + 1}`,
    file: `PNG-Foods/Food-${i + 1}.png`,
  })),

  // Drinks
  ...[...Array(200)].map((_, i) => ({
    id: `drink-${i + 1}`,
    name: `Drink ${i + 1}`,
    file: `PNG-Drinks/Drink-${i + 1}.png`,
  })),

  // Desserts
  ...[...Array(200)].map((_, i) => ({
    id: `dessert-${i + 1}`,
    name: `Dessert ${i + 1}`,
    file: `PNG-Desserts/Dessert-${i + 1}.png`,
  })),
];

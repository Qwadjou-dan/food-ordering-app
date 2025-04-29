// Mock food images (placeholders)
const foodImages = {
  //breakfast
  "Tom Brown with Toast & Boiled eggs":
    "/images/localCuisine/tomBrown-toast-boiledEgg.jpeg",
  "Wheat Porridge with Toast & Boiled eggs":
    "/images/localCuisine/wheat-toast-boiledEgg.jpeg",
  "Milo with Egg sandwich": "/images/localCuisine/milo-eggSandwich.jpeg",
  "HAUSA KOOKO": "/images/delicious/breakfast/hausa-koko.jpg",
  "Quaker Oat With Toast & Boiled eggs":
    "/images/localCuisine/quakerOat-toast-boiledEgg.jpeg",
  "White Porridge With Bread": "/images/localCuisine/whitePorridge-bread.jpg",
  "Wheat Bran Porridge With Toast & Egg":
    "/images/localCuisine/wheatBranPorridge.jpeg",
  "Milo With Toast & boiled eggs": "/images/localCuisine/milo-eggSandwich.jpeg",
  "MILO, LIPTON": "/images/delicious/breakfast/milo-lipton.jpg",
  ACCOMPANIMENT: "/images/delicious/breakfast/accompaniment.jpeg",
  OATS: "/images/delicious/breakfast/oatmeal.jpg",
  EKWEGBEMI: "/images/delicious/breakfast/ekwegbemi.jpg",
  "MBORI KOKO": "/images/delicious/breakfast/white-porridge.jpg",
  "RICE PORRIDGE": "/images/delicious/breakfast/rice-puddings.webp",
  "TOM BROWN": "/images/delicious/breakfast/tombrown.jpg",
  SEMOLINA: "/images/delicious/breakfast/semolina.jpg",

  //lunch - local cuisine
  "BANKU WITH TILAPIA": "/images/localCuisine/grilledTilapia-banku.jpeg",
  "FUFU WITH MEAT AND SMOKED FISH LIGHT SOUP": "/api/placeholder/300/200",
  "Assorted Chicken Fried Rice Mix":
    "/images/localCuisine/assortedChicken-friedRice.jpeg",
  "Grilled Fish Hot Pepper/Okro stew with Banku":
    "/images/localCuisine/grilledFish-hotPepper-banku.webp",
  "Pasta Vegetable Salad": "/images/localCuisine/pasta-vegSalad.jpg",
  "Okro Stew With Banku": "/images/localCuisine/okroStew-banku.jpg",
  "Red Red with Plain Rice & Boiled Eggs":
    "/images/localCuisine/redRed-rice.webp",
  "Potato Salad": "/images/localCuisine/potatoSalad.webp",
  "Grilled Chicken With Jollof":
    "/images/localCuisine/grilledChicken-jollof.jpg",
  "Light/Groundnut Soup With Fufu/kokonte":
    "/images/localCuisine/groundnutSoup-kokonte.jpeg",
  "Chicken Sauce Braised Rice":
    "/images/localCuisine/chickenSauce-braisedRice.jpg",
  "Grilled Fish or Meat & Boiled Egg with Waakye":
    "/images/localCuisine/waakye.jpg",
  "Grilled Chicken With Potatoes":
    "/images/localCuisine/grilledChicked-potatoes.jpeg",
  "Egg Stew With Braised Rice": "/api/placeholder/300/200",
  "MIXED FRUIT SALAD": "/images/localCuisine/mixedFruitSalad.jpeg",
  "Light Soup With Fufu": "/images/localCuisine/lightSoup-fufu.jpg",
  "Palava Sauce With Yam": "/images/localCuisine/palavaSauce-yam.jpg",
  "Fish With Hot Pepper & Banku":
    "/images/localCuisine/fish-hotPepper-banku.jpg",
  "Green salad with baked potatoes":
    "./images/localCuisine/greenSalad-bakedPotatoes.avif",
  "Okro stew With Banku": "/images/localCuisine/okroStew-banku.jpg",
  "Assorted Jollof Rice": "/images/localCuisine/assortedJollof.jpg",
  "Garden Eggs Stew with Plantain":
    "/images/localCuisine/gardenEggsStew-plantain.jpg",
  "Light/Groundnut/Palm Nut Soup With Rice Balls/Fufu":
    "/images/localCuisine/groundnutSoup-fufu.webp",
  "BBQ Chicken Wings With Jollof":
    "/images/localCuisine/bbqChickenWings-jollof.jpeg",
  "Chicken Salad": "/images/localCuisine/chickenSalad.jpg",

  //lunch - delicious
  "ACHEKE WITH TILAPIA": "images/delicious/lunch/acheke-tilapia.jpg",
  "VERMICELLI RICE WITH CHICKEN STEW":
    "images/delicious/lunch/vermicelliRice.jpg",
  "FUFU WITH MEAT AND SMOKED FISH LIGHT SOUP":
    "images/delicious/lunch/fufu-goatSmokedFish.jpg",
  "PLAIN RICE WITH LIGHT SOUP": "images/delicious/lunch/riceSoup.avif",
  "PLAIN RICE WTH GRILLED CHICKEN STEW":
    "images/delicious/lunch/rice-grilledChicken.jpg",
  "JOLLOF WITH CHICKEN (COLESLAW)":
    "images/delicious/lunch/jollof-chicken-coleslaw.webp",
  "AMPESI WITH KOTOMIRE STEW": "images/delicious/lunch/ampesi-kontomire.webp",
  "BANKU WITH OKRO STEW": "images/delicious/lunch/banku-okroStew.jpg",
  WAAKYE: "/images/localCuisine/waakye.jpg",
  "KENKEY WITH FRIED FISH": "images/delicious/lunch/kenkey-fish.jpg",
  "PLAIN RICE WITH FISH STEW": "images/delicious/lunch/rice-fishStew.jpg",
  "FUFU WITH CHICKEN GROUNDNUT SOUP":
    "/images/localCuisine/groundnutSoup-fufu.webp",
  "PLAIN RICE WITH GROUNDNUT SOUP / STEW":
    "images/delicious/lunch/riceSoup.avif",
  "GARI FOTO": "images/delicious/lunch/gari-fotor.webp",
  "TUO ZAAFI (TZ)": "images/delicious/lunch/tuoZaafi.jpg",
  "JOLLOF WITH FISH (TOSSED VEGGIE)":
    "images/delicious/lunch/jollof-fish-tossedVeggies.jpg",
  MPOTOMPOTO: "images/delicious/lunch/mpotompoto.jpg",
  "CURRY RICE WITH MEAT VEGGIE STEW":
    "images/delicious/lunch/curryRice-meatStew.jpg",
  "OMOTUO, KOKONTE, PLAIN RICE WITH PALMNUT SOUP(COWFEET AND SMOKED FISH)":
    "images/delicious/lunch/kokonte.jpeg",

  //supper - local cuisine
  "Egg Stew With Braised Rice":
    "/images/localCuisine/supper/eggStew-braisedRice.webp",
  "Light/Groundnut Soup With Fufu":
    "/images/localCuisine/groundnutSoup-fufu.webp",
  "Grilled Chicken With Fried Rice":
    "/images/localCuisine/grilledChicken-friedRice.png",
  "Grilled Chicken Wings with Jollof rice":
    "/images/localCuisine/grilledChickenWings-jollof.jpeg",
  "Hot Pepper Sardine with Ga Kenkey":
    "/images/localCuisine/supper/hotPepper-sardine-kenkey.jpg",
  "Assorted Spaghetti": "/images/localCuisine/assortedSpag.jpg",
  "Chicken Gravy With Curried Rice":
    "/images/localCuisine/supper/chickenGravy-curriedRice.jpg",
  "Egg Stew With Yam": "/images/localCuisine/eggStew-yam.jpg",
  "Grilled chicken with Fried Rice":
    "/images/localCuisine/grilledChicken-friedRice.png",
  "Spaghetti Bolognese": "/images/localCuisine/spagBolognese.jpg",
  "Grilled chicken with Curry Rice":
    "/images/localCuisine/supper/grilledChicken-curryRice.jpg",

  //dessert - local cuisine
  "MIXED FRUIT SALAD": "/images/localCuisine/dessert/mixedFruitSalad.jpg",
  "FAN ICE": "/images/localCuisine/dessert/fanIce.jpeg",
  PINEAPPLE: "/images/localCuisine/dessert/pineappleCubes.webp",
  YOGURT: "/images/localCuisine/dessert/fanYogo.jpg",
  "MELON CUBES": "/images/localCuisine/dessert/melonCubes.jpg",
  "PINEAPPLE PIE": "/images/localCuisine/dessert/pineapplePie.webp",

  // Default image for food items without specific images
  default: "/api/placeholder/300/200",
};

export default foodImages;

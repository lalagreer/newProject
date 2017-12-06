import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}
const IMAGES = [ 
  {"id":1, "category": "food", "caption": "Strawberry Jello Parfait", "url": "assets/images/food/DSC_1995.jpg"},
  {"id":2, "category": "food", "caption": "Vegan Raspberry Cupcake", "url": "assets/images/food/DSC_2185.JPG"},
  {"id":3, "category": "food", "caption": "Vietnamese Summer Roll", "url": "assets/images/food/DSC_2211.JPG"},
  {"id":4, "category": "food", "caption": "Kung Pao Tofu", "url": "assets/images/food/DSC_2594.JPG"},
  {"id":5, "category": "food", "caption": "Japanese Salad", "url": "assets/images/food/DSC_2726.JPG"},
  {"id":6, "category": "food", "caption": "California Roll", "url": "assets/images/food/DSC_2754.JPG"},
  {"id":7, "category": "food", "caption": "Blueberry Cheesecake", "url": "assets/images/food/DSC_4595.JPG"},
  {"id":8, "category": "food", "caption": "Passion Fruit Charlotte", "url": "assets/images/food/DSC_4826.JPG"},
  {"id":9, "category": "food", "caption": "Grilled Pear Salad", "url": "assets/images/food/DSC_4990.JPG"},
  {"id":10, "category": "food", "caption": "French Macarons", "url": "assets/images/food/DSC_5082.JPG"},
  {"id":11, "category": "food", "caption": "Christening Cake", "url": "assets/images/food/DSC_5809.JPG"},
  {"id":12, "category": "food", "caption": "Layered Mixed Berries Pastry", "url": "assets/images/food/DSC_7443.JPG"},
  {"id":13, "category": "food", "caption": "Combination", "url": "assets/images/food/DSC_7482.JPG"},
  {"id":14, "category": "food", "caption": "Salad", "url": "assets/images/food/DSC_7511.JPG"},
  {"id":15, "category": "food", "caption": "Burger", "url": "assets/images/food/DSC_7525.JPG"},
  {"id":16, "category": "food", "caption": "Waldorf Salad", "url": "assets/images/food/DSC_1160.JPG"},
  {"id":17, "category": "food", "caption": "Shrimp Bites", "url": "assets/images/food/DSC_1856.JPG"},
  {"id":18, "category": "food", "caption": "Pork Ribs", "url": "assets/images/food/DSC_1964.JPG"},
  {"id":19, "category": "food", "caption": "California Maki", "url": "assets/images/food/DSC_2548.JPG"},
  {"id":20, "category": "food", "caption": "Rainbow Cake", "url": "assets/images/food/DSC_2615.JPG"},
  {"id":21, "category": "food", "caption": "Minion Cake", "url": "assets/images/food/DSC_2655.JPG"},
  {"id":22, "category": "food", "caption": "Strawberry Cake", "url": "assets/images/food/DSC_2792.JPG"},
  {"id":23, "category": "food", "caption": "Mango Strawberry Cake", "url": "assets/images/food/DSC_2807.jpg"},
  {"id":24, "category": "food", "caption": "Christmas Cookies", "url": "assets/images/food/DSC_2918.JPG"},
  {"id":25, "category": "food", "caption": "Hello Kitty Cake", "url": "assets/images/food/DSC_3035.JPG"},
  {"id":26, "category": "food", "caption": "Cheesecake Bites", "url": "assets/images/food/DSC_3066.JPG"},
  {"id":27, "category": "food", "caption": "Egg Benedict over Bagel", "url": "assets/images/food/DSC_3102.JPG"},
  {"id":28, "category": "food", "caption": "Shrimp Bites", "url": "assets/images/food/DSC_3131.JPG"},
  {"id":29, "category": "food", "caption": "Hors D'oeuvres", "url": "assets/images/food/DSC_3699.JPG"},
  {"id":30, "category": "food", "caption": "Grilled Pork Steak with Pineapple Salsa", "url": "assets/images/food/DSC_3730.JPG"},
  {"id":31, "category": "food", "caption": "Grilled Polenta and Pineapple with Vanilla Ice cream", "url": "assets/images/food/DSC_3748.JPG"},
  {"id":32, "category": "food", "caption": "Ninjago Cake", "url": "assets/images/food/DSC_4481.jpg"},
  {"id":33, "category": "food", "caption": "Pan Seared Salmon", "url": "assets/images/food/DSC_4555.JPG"},
  {"id":34, "category": "food", "caption": "Deviled Egg", "url": "assets/images/food/DSC_4568.JPG"},
  {"id":35, "category": "food", "caption": "Fruit Tartlets", "url": "assets/images/food/DSC_4777.JPG"},
  {"id":36, "category": "food", "caption": "Passion Fruit Charlotte", "url": "assets/images/food/DSC_4809.JPG"},
  {"id":37, "category": "food", "caption": "Rainbow Cupcake", "url": "assets/images/food/DSC_4953.JPG"},
  {"id":38, "category": "food", "caption": "Vegetables", "url": "assets/images/food/DSC_4968.JPG"},
  {"id":39, "category": "food", "caption": "Hopia", "url": "assets/images/food/DSC_4977.JPG"},
  {"id":40, "category": "food", "caption": "Grilled Pork", "url": "assets/images/food/DSC_5052.JPG"},
  {"id":41, "category": "food", "caption": "Chicken Tonkatsu", "url": "assets/images/food/DSC_6066.JPG"},
  {"id":42, "category": "food", "caption": "Transformer ", "url": "assets/images/food/DSC_6658.JPG"},
  {"id":43, "category": "food", "caption": "Bell Pepper", "url": "assets/images/food/DSC_7170.JPG"},
  {"id":44, "category": "food", "caption": "Baby Back Ribs", "url": "assets/images/food/DSC_7188.JPG"},
  {"id":45, "category": "food", "caption": "Peach Cobbler", "url": "assets/images/food/DSC_7219.JPG"},
  {"id":46, "category": "food", "caption": "Lemon", "url": "assets/images/food/DSC_7246.jpg"},
  {"id":47, "category": "food", "caption": "Lemon Meringue Tart", "url": "assets/images/food/DSC_7290.JPG"},
  {"id":48, "category": "food", "caption": "Pasta Salad", "url": "assets/images/food/DSC_7426.JPG"},
  {"id":49, "category": "food", "caption": "Ramen", "url": "assets/images/food/DSC_7434.JPG"},
  {"id":50, "category": "food", "caption": "Kiwi Slice", "url": "assets/images/food/DSC_7460.JPG"},
  {"id":51, "category": "food", "caption": "Ganny Smith Apple", "url": "assets/images/food/DSC_7503.JPG"},
  {"id":52, "category": "food", "caption": "Jello Parfait", "url": "assets/images/food/Jello_Parfait.jpg"},
  
  {"id":53, "category": "people", "caption": "Model", "url": "assets/images/people/DSC07680.jpg"},
  {"id":54, "category": "people", "caption": "Learning how to surf", "url": "assets/images/people/DSC_1284.jpg"},
  {"id":55, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC_2831.jpg"},
  {"id":56, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC_2865.jpg"},
  {"id":57, "category": "people", "caption": "Wedding", "url": "assets/images/people/DSC_3838.jpg"},
  {"id":58, "category": "people", "caption": "Kids Playing", "url": "assets/images/people/DSC_4763.jpg"},
  {"id":59, "category": "people", "caption": "Model", "url": "assets/images/people/DSC_6323.jpg"},
  {"id":60, "category": "people", "caption": "Baseball", "url": "assets/images/people/DSC_6738.jpg"},
  {"id":61, "category": "people", "caption": "Baseball", "url": "assets/images/people/DSC_6757.jpg"},
  {"id":62, "category": "people", "caption": "Baseball", "url": "assets/images/people/DSC_6853.jpg"},
  {"id":63, "category": "people", "caption": "Bestfriend's Wedding", "url": "assets/images/people/DSC_7628.jpg"},
  {"id":64, "category": "people", "caption": "Wedding", "url": "assets/images/people/DSC_7799.jpg"},
  {"id":65, "category": "people", "caption": "Tattoo", "url": "assets/images/people/DSC_8870.jpg"},
  {"id":66, "category": "people", "caption": "Innocence", "url": "assets/images/people/DSC00291.jpg"},
  {"id":67, "category": "people", "caption": "Tourist", "url": "assets/images/people/DSC02752.jpg"},
  {"id":68, "category": "people", "caption": "Fisherman", "url": "assets/images/people/DSC02763.jpg"},
  {"id":69, "category": "people", "caption": "Fisherman", "url": "assets/images/people/DSC02766.jpg"},
  // {"id":70, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC03257.jpg"},
  {"id":71, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC03445.jpg"},
  {"id":72, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC03479.jpg"},
  {"id":73, "category": "people", "caption": "Aliwan Fiesta", "url": "assets/images/people/DSC03257.jpg"},
  {"id":74, "category": "people", "caption": "Studio Shot", "url": "assets/images/people/DSC04549.jpg"},
  {"id":75, "category": "people", "caption": "Studio Shot", "url": "assets/images/people/DSC04573.jpg"},
  {"id":76, "category": "people", "caption": "Studio Shot", "url": "assets/images/people/DSC04672.jpg"},
  {"id":77, "category": "people", "caption": "Studio Shot", "url": "assets/images/people/DSC07598.jpg"},
 
  {"id":78, "category": "travel", "caption": "River", "url": "assets/images/travel/P1010374.jpg"},
  {"id":79, "category": "travel", "caption": " ", "url": "assets/images/travel/DSC_2096.jpg"},
  {"id":80, "category": "travel", "caption": "Hot Air Balloon", "url": "assets/images/travel/DSC_0325.jpg"},
  {"id":81, "category": "travel", "caption": "Sunset at the Bay", "url": "assets/images/travel/DSC_3263.jpg"},
  {"id":82, "category": "travel", "caption": "Manila Bay Sunset", "url": "assets/images/travel/DSC_3368.jpg"},
  {"id":83, "category": "travel", "caption": "Corn Field, Nueva Vizcaya", "url": "assets/images/travel/DSC_3849.jpg"},
  {"id":84, "category": "travel", "caption": "Taal Basilica", "url": "assets/images/travel/DSC_4995.jpg"},
  {"id":85, "category": "travel", "caption": "Fresh Roses at Baguio Public Market", "url": "assets/images/travel/DSC_5705.jpg"},
  {"id":86, "category": "travel", "caption": "American Cemetery, Taguig City, Philippines", "url": "assets/images/travel/DSC_8191.jpg"},
  {"id":87, "category": "travel", "caption": "American Cemetery, Taguig City, Philippines", "url": "assets/images/travel/DSC_8192.jpg"},
  {"id":88, "category": "travel", "caption": "Washington Monument", "url": "assets/images/travel/DSC_8835.jpg"},
  {"id":89, "category": "travel", "caption": "Siam Reap, Cambodia", "url": "assets/images/travel/DSC03147.jpg"},
  {"id":90, "category": "travel", "caption": "Siam Reap, Cambodia", "url": "assets/images/travel/DSC03346.jpg"},
  {"id":91, "category": "travel", "caption": "Siam Reap, Cambodia", "url": "assets/images/travel/DSC03374.jpg"},
  {"id":92, "category": "travel", "caption": "Siam Reap, Cambodia", "url": "assets/images/travel/DSC03436.jpg"},
  {"id":93, "category": "travel", "caption": "Siam Reap, Cambodia", "url": "assets/images/travel/DSC03438.jpg"},
  {"id":94, "category": "travel", "caption": "Kite", "url": "assets/images/travel/DSC03522.jpg"},
  {"id":95, "category": "travel", "caption": "International PyroMusical Competition, Manila", "url": "assets/images/travel/DSC03856.gif"},
  {"id":96, "category": "travel", "caption": "International PyroMusical Competition, Manila", "url": "assets/images/travel/DSC03880.gif"},
  {"id":97, "category": "travel", "caption": "International PyroMusical Competition, Manila", "url": "assets/images/travel/DSC03905.gif"},
  {"id":98, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08701.JPG"},
  {"id":99, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08711.jpg"},
  {"id":100, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08718.JPG"},
  {"id":101, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08755.jpg"},
  {"id":102, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08859.jpg"},
  {"id":103, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08902.jpg"},
  {"id":104, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC08929.JPG"},
  {"id":105, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC09097.jpg"},
  {"id":106, "category": "travel", "caption": "Palawan", "url": "assets/images/travel/DSC09112.jpg"},
  {"id":107, "category": "travel", "caption": "Calaruega Church", "url": "assets/images/travel/DSC09428.jpg"},
  {"id":108, "category": "travel", "caption": "", "url": "assets/images/travel/DSC09815.JPG"},
  {"id":109, "category": "travel", "caption": "Oriental Mindoro", "url": "assets/images/travel/P1010380.jpg"},
  
 
]

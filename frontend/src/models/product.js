//product constructor
export class Product {
   constructor(data = {}) {
      this.id = data.id || "";
      this.productCode = data.productCode || "";
      this.img = data.img || "";
      this.productName = data.productName || "";
      this.price = data.price || 0;
      this.discount = data.discount || 0;
      this.savedMoney = this.calcSavedMoney();
      this.discountPrice = this.calcDiscountPrice() || 0;
      this.brand = data.brand || "";
      this.waterConsumption = data.waterConsumption || "";
      this.energyEfficiencyClass = data.energyEfficiencyClass || "";
      this.type = data.type || "";
      this.spinSpeed = data.spinSpeed || "";
      this.loadCapacity = data.loadCapacity || "";
      this.noiseLevelCentrifugation = data.noiseLevelCentrifugation || "";
      this.noiseLevelWashing = data.noiseLevelWashing || "";
      this.typeControl = data.typeControl || "";
      this.numberOfPrograms = data.numberOfPrograms || "";
      this.weightInPackage = data.weightInPackage || "";
      this.depth = data.depth || "";
      this.weight = data.weight || "";
      this.color = data.color || "";
      this.countryOfAssembly = data.countryOfAssembly || "";
      this.guarantee = data.guarantee || "";
      this.stock = data.stock ?? true;
   }
   calcSavedMoney(){
      if (this.discount > 0) {
         return Math.floor(this.price * this.discount / 100);
       } else {
         return 0;
       }
   }

   calcDiscountPrice(){
      if (this.discount > 0) {
         return Math.floor(this.price - (this.price * this.discount / 100));
       } else {
         return 0;
       } 
   }
}
//product constructor
export class Product {
   constructor(data = {}) {
      this.id = data.id;
      this.productCode= data.productCode;
      this.img= data.img;
      this.productName= data.productName;
      this.price= data.price;
      this.discount= data.discount;
      this.savedMoney=  data.savedMoney;
      this.discountPrice= data.discountPrice;
      this.brand= data.brand;
      this.waterConsumption= data.waterConsumption;
      this.energyEfficiencyClass= data.energyEfficiencyClass;
      this.type= data.type;
      this.spinSpeed= data.spinSpeed;
      this.loadCapacity= data.loadCapacity;
      this.noiseLevelCentrifugation= data.noiseLevelCentrifugation;
      this.noiseLevelWashing= data.noiseLevelWashing;
      this.typeControl= data.typeControl;
      this.numberOfPrograms= data.numberOfPrograms;
      this.weightInPackage= data.weightInPackage;
      this.depth= data.depth;
      this.weight= data.weight;
      this.color= data.color;
      this.countryOfAssembly= data.countryOfAssembly;
      this.guarantee= data.guarantee;
      this.stock= data.stock
   }
}
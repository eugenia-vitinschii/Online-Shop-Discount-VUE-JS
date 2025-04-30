//product constructor ts

export interface ProductData{
   id?: string;
   productCode?: string;
   img?: string;
   productName?: string;
   price?: number;
   discount?: number;
   savedMoney?: number;
   discountPrice?: number;
   brand?: string;
   waterConsumption?: string;
   energyEfficiencyClass?: string;
   type?: string;
   spinSpeed?: string;
   loadCapacity?: string;
   noiseLevelCentrifugation?: string;
   noiseLevelWashing?: string;
   typeControl?: string;
   numberOfPrograms?: string;
   weightInPackage?: string;
   depth?: string;
   weight?: string;
   color?: string;
   countryOfAssembly?: string;
   guarantee?: string;
   stock?: boolean;

}

export class Prodcut {
   id: string;
   productCode: string;
   img : string;
   productName : string;
   price: number;
   discount: number;
   savedMoney: number;
   discountPrice: number;
   brand: string;
   waterConsumption: string;
   energyEfficiencyClass: string;
   type: string;
   spinSpeed: string;
   loadCapacity : string;
   noiseLevelCentrifugation: string;
   noiseLevelWashing: string;
   typeControl: string;
   numberOfPrograms : string;
   weightInPackage: string;
   depth: string;
   weight: string;
   color: string;
   countryOfAssembly : string;
   guarantee: string;
   stock : boolean;

   constructor( data: ProductData = {}){
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
      private  calcSavedMoney(): number {
         return this.discount > 0 ? Math.floor(this.price * this.discount /100):0 ;
      }
   
      private calcDiscountPrice(): number{
         return this.discount > 0? Math.floor(this.price - (this.price * this.discount /100)) : this.price
      }
}

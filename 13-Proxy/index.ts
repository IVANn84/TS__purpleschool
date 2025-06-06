import { RequestBuilder } from './builder/index';
interface IProductAPI {
     getProductDetails(id: number): Promise<Response | undefined>;
}

class ProductAPI implements IProductAPI {
     async getProductDetails(id: number): Promise<Response | undefined> {
          return await new RequestBuilder()
               .setTypeRequest('GET')
               .setUrl('https://dummyjson.com/product')
               .setId(id)
               .exec();
     }
}

class ProductProxyAPI implements IProductAPI {
     constructor(private api: IProductAPI, private productId: number) {}

     async getProductDetails(id: number): Promise<Response | undefined> {
          if (this.productId < 10) {
               console.log('Done!');
               return await this.api.getProductDetails(id);
          }

          console.log('Попытка отклонена!');
          return undefined;
     }
}

const result2 = new ProductProxyAPI(new ProductAPI(), 11);
console.log(result2.getProductDetails(13));

//Вроде работает , но постоянно выводится обьект REsponse .как можно убрать этот вывод?

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

type RequestHeaders = Record<string, string>;
export class RequestBuilder {
     constructor(
          private method: HttpMethod = 'GET',
          private header: RequestHeaders = {},
          private body: any = null,
          private url: string = '',
          private id: number = 1
     ) {}

     setTypeRequest(method: HttpMethod) {
          this.method = method;
          return this;
     }

     setHeaderRequest(key: string, value: string): this {
          this.header[key] = value;
          return this;
     }

     setUrl(url: string): this {
          this.url = url;
          return this;
     }

     setBodu(bodu: any): this {
          this.body = bodu.toString();
          return this;
     }

     setId(id: number): this {
          this.id = id;
          return this;
     }

     async exec(): Promise<Response> {
          if (!this.url) {
               throw new Error('the url is not set!');
          }
          const options = {
               method: this.method,
               headers: this.header,
               body: this.body,
          };

          return await fetch(`${this.url}/${this.id.toString()}`, options);
     }
}

const resp = new RequestBuilder();

resp.setTypeRequest('GET')
     .setUrl('https://dummyjson.com/product')
     .setId(12)
     .exec()
     .then((data) => console.log(data));

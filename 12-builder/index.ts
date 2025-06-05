type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

type RequestHeaders = Record<string, string>;
class RequestBuilder {
     constructor(
          private method: HttpMethod = 'GET',
          private header: RequestHeaders = {},
          private body: any = null,
          private url: string = ''
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

     exec() {
          if (!this.url) {
               throw new Error('the url is not set!');
          }
          const options = {
               method: this.method,
               headers: this.header,
               body: this.body,
          };

          fetch(this.url, options);
     }
}

const res = new RequestBuilder();

console.log(
     res
          .setTypeRequest('DELETE')
          .setUrl('./fsefse/sefsef')
          .setHeaderRequest('sefsefsef', 'drgdr')
          .setBodu('./fsefse/sefsef')
);

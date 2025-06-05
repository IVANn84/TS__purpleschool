var RequestBuilder = /** @class */ (function () {
    function RequestBuilder(method, header, body, url) {
        if (method === void 0) { method = 'GET'; }
        if (header === void 0) { header = {}; }
        if (body === void 0) { body = null; }
        if (url === void 0) { url = ''; }
        this.method = method;
        this.header = header;
        this.body = body;
        this.url = url;
    }
    RequestBuilder.prototype.setTypeRequest = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder.prototype.setHeaderRequest = function (key, value) {
        this.header[key] = value;
        return this;
    };
    RequestBuilder.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.setBodu = function (bodu) {
        this.body = bodu.toString();
        return this;
    };
    RequestBuilder.prototype.exec = function () {
        if (!this.url) {
            throw new Error('Url do not done!');
        }
        var options = {
            method: this.method,
            headers: this.header,
            body: this.body
        };
        return fetch(this.url, options);
    };
    return RequestBuilder;
}());
var res = new RequestBuilder();
console.log(res.setTypeRequest('DELETE').setHeaderRequest('sefsefsef', 34));
console.log(res
    .setTypeRequest('DELETE')
    .setUrl('./fsefse/sefsef')
    .setHeaderRequest('sefsefsef', 34)
    .setBodu('./fsefse/sefsef'));

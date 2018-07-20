import superagent from 'superagent';

class HttpRequest {

  get(url, headers) {
    let accept = 'application/json';

    if (headers) {
      accept =  headers;
    }

    return superagent
    .get(url)
    .set('Accept', accept);
  }

  post(url, payload) {
    return superagent
    .post(url)
    .send(payload)
    .set('Accept', 'application/json');
  }

}

export default HttpRequest;
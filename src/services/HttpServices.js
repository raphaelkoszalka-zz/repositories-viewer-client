import superagent from 'superagent';

class HttpRequest {

  get(url) {
    return superagent
    .get(url)
    .set('Accept', 'application/json');
  }

  post(url, payload) {
    return superagent
    .post(url)
    .send(payload)
    .set('Accept', 'application/json');
  }

}

export default HttpRequest;
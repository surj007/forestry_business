import navigationService from '../service/navigationService';

export default async (config) => {
  const baseUrl = 'http://192.168.43.251';
  const timeout = 10000;
  let headers = Object.assign({'Content-Type': 'application/json'}, config.headers);
  let query = '';
  let body = null;

  if (config.params) {
    let paramsArray = [];

    Object.keys(config.params).forEach(key => paramsArray.push(`${key}=${config.params[key]}`));

    query += `?${paramsArray.join('&')}`;
  }
  if (config.data) {
    body = JSON.stringify(config.data);
  }

  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('timeout');
    }, timeout);
  });

  function promiseRace (fetchPromise) {
    return Promise.race([timerPromise, fetchPromise]).catch((e) => {
      console.warn(`${config.url} err: ${e}`);
      global.$toast.show('网络错误，请重试');
    });
  };

  if (!config.url.includes('/auth/login')) {
    try {
      let cookie = await global.$storage.load({
        key: 'cookie',
        syncInBackground: false
      });

      headers = Object.assign(headers, {Cookie: cookie});
  
      const fetchPromise = fetch(`${baseUrl}${config.url}${query}`, {
        method: config.method,
        headers,
        body,
        cache: 'no-cache'
      }).then((res) => {
        console.log(`${config.url} headers: ${res}`);
        return res.json();
      }).then((resJson) => {
        if (resJson.code === 4) {
          console.warn(`${config.url}: res is 4`);
          global.$toast.show('已超时，请重新登陆');
          navigationService.navigate('Login');
        }
        else if (resJson.code != 0) {
          console.warn(`${config.url} res not 0: ${resJson}`);
          global.$toast.show(resJson.message);
        }
        else {
          console.log(`${config.url} success res: ${resJson}`);
          return resJson;
        }
      });
    
      return promiseRace(fetchPromise);
    }
    catch (e) {
      console.warn(`${config.url}: ${e.message}`);
      global.$toast.show('已超时，请重新登陆');
      navigationService.navigate('Login');
    }
  }
  else {
    const fetchPromise = fetch(`${baseUrl}${config.url}${query}`, {
      method: config.method,
      headers,
      body,
      cache: 'no-cache'
    }).then(async (res) => {
      console.log(`${config.url} headers: ${res}`);
      await global.$storage.save({
        key: 'cookie',
        data: res.headers.map['set-cookie'].split(";")[0]
      });
      return res.json();
    }).then((resJson) => {
      if (resJson.code != 0) {
        console.warn(`${config.url} res not 0: ${resJson}`);
        global.$toast.show(resJson.message);
      }
      else {
        console.log(`${config.url} success res: ${resJson}`);
        return resJson;
      }
    });
  
    return promiseRace(fetchPromise);
  }
};
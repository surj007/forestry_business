import { ToastAndroid } from 'react-native';

import navigationService from '../service/navigationService';

export default (config) => {
  let baseUrl = 'http://192.168.0.106';
  let timeout = 5000;
  let body = null;
  let headers = Object.assign({'Content-Type': 'application/json'}, config.headers);

  if(config.params) {
    let paramsArray = [];
    Object.keys(config.params).forEach(key => paramsArray.push(key + '=' + config.params[key]));
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } 
    else {
      url += '&' + paramsArray.join('&')
    }
  }
  else {
    body = JSON.stringify(config.data);
  }

  if(!config.url.includes('/auth/login')) {
    global.$storage.load({
      key: 'cookie',
      syncInBackground: false
    }).then((data) => {
      headers = Object.assign(headers, {'Cookie': data});

      const fetchPromise = new Promise((resolve, reject) => {
        fetch(baseUrl + config.url, {
          method: config.method,
          headers,
          body,
          cache: 'no-cache'
        }).then((res) => {
          console.log('headers: ', res);
          return res.json();
        }).then((resJson) => {
          if(resJson.code == 4) {
            console.warn('res not 0: ', resJson);
            ToastAndroid.show('已超时，请重新登陆', ToastAndroid.LONG);
            global.$storage.remove({key: 'cookie'});
            navigationService.navigate('Login');
          }
          else if(resJson.code != 0) {
            console.warn('res not 0: ', resJson);
            ToastAndroid.show(resJson.message, ToastAndroid.LONG);
          }
          else {
            console.log('res: ', resJson);
          }
          resolve(resJson);
        }).catch((e) => {
          reject(e);
        });
      });
    
      const timerPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('timeout');
        }, timeout);
      });
    
      return new Promise((resolve) => {
        Promise.race([timerPromise, fetchPromise]).then((res) => {
          resolve(res);
        }).catch((e) => {
          console.warn('err: ', e);
          ToastAndroid.show('网络错误，请重试', ToastAndroid.LONG);
        })
      });
    }).catch((e) => {
      console.warn('cookie not found: ', e.message);
      global.$storage.remove({key: 'cookie'});
      ToastAndroid.show('已超时，请重新登陆', ToastAndroid.LONG);
      navigationService.navigate('Login');
    });
  }
  else {
    const fetchPromise = new Promise((resolve, reject) => {
      fetch(baseUrl + config.url, {
        method: config.method,
        headers,
        body,
        cache: 'no-cache'
      }).then((res) => {
        console.log('headers: ', res);
        global.$storage.save({
          key: 'cookie',
          data: res.headers.map['set-cookie'].split(";")[0],
          expires: 24 * 59 * 60 * 1000
        });
        return res.json();
      }).then((resJson) => {
        if(resJson.code != 0) {
          console.warn('res not 0: ', resJson);
          ToastAndroid.show(resJson.message, ToastAndroid.LONG);
        }
        else {
          console.log('res: ', resJson);
        }
        resolve(resJson);
      }).catch((e) => {
        reject(e);
      });
    });
  
    const timerPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('timeout');
      }, timeout);
    });
  
    return new Promise((resolve) => {
      Promise.race([timerPromise, fetchPromise]).then((res) => {
        resolve(res);
      }).catch((e) => {
        console.warn('err: ', e);
        ToastAndroid.show('网络错误，请重试', ToastAndroid.LONG);
      })
    });
  }
};
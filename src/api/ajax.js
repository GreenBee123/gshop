/**
 * AJAX请求函数模块
 * url 请求路径
 * 请求参数，以对象的形式传递，默认为空
 * type 请求方式，默认为GET
 * 
 * 返回值：promise对象（异步返回的数据是：response.data）
 */
import axios from 'axios'
export default function ajax(url, data={}, type='GET'){
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    // 如果是GET请求，就将data的数据拼接到URL中
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求，直接发送一个对象
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

/*
  const response = await ajax()
  const result = response.data

  const resule = await ajax()
 */

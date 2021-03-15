// 发起ajax请求
/*
 1、封装功能函数
    1、功能点明确
    2、函数内部应该保留固定的代码
    3、将动态的数据抽取成形参，由使用者根据自身的情况动态的传入实参
    4、一个良好的功能函数应该设置形参的默认值(ES6的形参默认值)
 2、封装功能组件
    1、功能点明确
    2、函数内部应该保留静态的代码
    3、将动态的数据抽取成props参数，由使用者根据自身的情况动态的传入props数据
    4、一个良好的组件应该设置组件的必要性以及数据类型
*/ 
import config from './config'
export default (url,data={},method="GET") => {
    return new Promise((resolve,reject)=>{
      //1、new Promise 初始化 promise实例的状态为pending
      wx.request({
        url : config.host + url,
        data,
        method,
        success:(res)=>{
          //修改promise的成功状态为resolve
          resolve(res.data);
        },
        fail:(err)=>{
          //修改promise的失败状态为reject
          reject(err)
        }
      })
    })
}
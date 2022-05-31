import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router';
import fly from 'flyio'

//响应拦截器
axios.interceptors.response.use(success=>{
    console.log(success)
    //业务逻辑错误
if(success.status && success.status ==200)
{
    if(success.data.code == -1){
        Message.error({message:success.data.message});
        return;
    }
    if(success.data.message){
        Message.success({message:success.data.message});
    }
}
return success.data;
},error=>{
    console.log(JSON.stringify(error))
if(error.data.code==504 || error.data.code==404){
    Message.error({message: '服务器被吃辣'})
}else if(error.status == 405){
    Message.error({message: '方法不允许'})
}else if(error.data.code==403){
    Message.error({message: '权限不足，勤联系管理员'});
}else if(error.code==401){
    Message.error({message: '请登录'});
    router.replace('/');
}else{
    if(error.data.message){
        Message.error({message:error.data.message});
    }else{
        Message.error({message:error.data.message});
    }
} Message.error("未知错误！");;
});
// const prefix='/api/v1';

// export function request(opt) {
//     return fly.request(opt.url, opt.data, opt)
//   }

export const request=(params)=>{
    return axios({
        method:params.method,
        url: params.url,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'Accept-Encoding': 'utf-8',
            // 'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Authorization': params.Authorization,
        },
        data: params.data
    })
}
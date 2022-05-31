import { request } from "@/util/api.js"
import store from '@/store/index.js'
// const prefix='/api/v1'

// export function captcha(){
//     return request({
//         url: prefix + '/captcha',
//         method: 'get',
//     })
// }

export function login(queryParams){
    return request({
            url: '/api/v1/test/login',
            method: 'post',
            // Authorization: ,
            data: queryParams
        }
    )
}
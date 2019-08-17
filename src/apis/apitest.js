import axios from 'axios'
const api = {
    user: 'https://api.djapi.cn/rtweather/get?citycode=101010100&cityname_ch=&cityname_py=&ip=&jwd=&cn_to_unicode=1&token=0db6540a7eb50d77b1bb233e38513238&datatype=json&methods=get&_=1566055768543',
}

export default api

export function getUserApi() {
    return axios({
        url: api.user,
    })
}
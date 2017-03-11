const axios = require('axios')

module.exports = class Bilive {
    constructor(cookies) {
        this.userInfo = {}
        axios.defaults.headers.common['Cookie'] = cookies
        axios.defaults.headers.common['Referer'] = 'http://live.bilibili.com/'
        axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36'
    }

    heart () {
        return this._check().then(() => {
            const url = 'http://live.bilibili.com/User/userOnlineHeart'
            return axios.post(url)
        }).then(({ data }) => {
            if (data.code == 0) {
                return this._outFormat('success', data)
            } else {
                return Promise.reject(this._outFormat('failed', data))
            }
        })
    }

    _check () {
        const url = 'http://live.bilibili.com/User/getUserInfo'
        return axios.get(url).then(({ data }) => {
            if(data['code'] == 'REPONSE_OK') {
                this.userInfo = data['data']
            } else {
                return Promise.reject(this._outFormat('failed', data))
            }
        })
    }

     _outFormat (status, data) {
        return {
            status: status,
            response: data,
            userInfo: this.userInfo
        }
    }
}
const bilive = require('./bilive')

const cookie = ''

new bilive(cookie).heart().then(data => {
    log(data)
}).catch(data => {
    log(data)
})

const log = (data) => {
    const tpl = 
`Status: ${data.status}
Time: ${new Date().toLocaleString()}
Response: ${JSON.stringify(data.response)}
UserInfo: ${JSON.stringify(data.userInfo)}`
    console.log(tpl)
}
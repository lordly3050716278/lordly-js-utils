import CryptoJS from 'crypto-js'

/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 对数据进行sha-256的hash加密
 * 
 * @param { string } message 需要加密的内容
 * @returns { string } 返回经过加密后的16进制的字符串
 */
function sha256(message) {
    const hash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex)
    return hash
}

export default sha256
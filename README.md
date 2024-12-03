# lordly-js-utils
常用的js工具库，分别适配Common JS和ES Module版本

## 安装
```shell
npm i lordly-js-utils
```

## 使用
```javascript
// Common JS
const { randomHash } = require('lordly-js-utils')
// ES Module
import { randomHash } from 'lordly-js-utils'

const hash =randomHash()
console.log(hash)
```

## 项目结构
```markdown
lordly-js-utils/
├── src/                              # 源代码
|   ├── cjs/                          # CommonJS
|   |   ├── debounce/                 # 防抖函数
|   |   ├── random-hash/              # 随机hash
|   |   ├── sha256/                   # hash sha256 加密
|   |   └── throttle/                 # 节流函数
|   |
|   └── esm/                          # ESModule
|       ├── browser-fingerprint/      # 浏览器指纹
|       ├── debounce/                 # 防抖函数
|       ├── random-hash/              # 随机hash
|       ├── sha256/                   # hash sha256 加密
|       └── throttle/                 # 节流函数
|
└── package.json                      # 项目配置
```
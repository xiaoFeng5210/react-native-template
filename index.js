import fs from 'node:fs'
// 创建文件夹 创建入口文件 创建package.json 安装依赖






fs.mkdirSync(getRootPath())

fs.writeFileSync(`${getRootPath()}/index.js`, '内容')

fs.writeFileSync(`${getRootPath()}/package.json`, 'package')

function getRootPath() {
  return './react-native-cli'
}


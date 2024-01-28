import fs from 'node:fs'
// 创建文件夹 创建入口文件 创建package.json 安装依赖






fs.mkdirSync('./react-native-cli')

fs.writeFileSync('./react-native-cli/index.js', '内容')

fs.writeFileSync('./react-native-cli/package.json', 'package')


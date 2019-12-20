# ashen-one-web

## 环境

##### 安装nodejs > 12

##### 全局安装yarn

npm install yarn -g

完成以后使用yarn -v,有输出表示安装成功

yarn更换淘宝镜像

```
yarn config set registry https://registry.npm.taobao.org -g
```

##### 安装vue-cli3

yarn global add @vue/cli

完成以后vue -V,有输出表示安装成功。如果没有输出的话可能是yarn安装的包的bin没有加入环境变量。看下根目录下有没有一个.yarn的隐藏文件里面有个bin目录，把他加入环境变量。

## 安装项目依赖
```
cd 到项目根目录
yarn install安装依赖
```

### 运行
```
yarn serve
```

### 编译
```
yarn build（不需要）
```

### vue cli3配置详细项
See [Configuration Reference](https://cli.vuejs.org/config/).


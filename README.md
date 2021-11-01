# vue3-ts-cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
插件针对的是 vscode npm 包针对的是项目的
"useTabs": false, 使用 tab 缩进还是空格
"tabWidth": 2, tab 等于多少的空格
"printWidth": 80, 字符长度
"singleQuote": true, 单引号还是双引号
"trailingComma": "none", 在多行输入尾号是否加入逗号
"semi": false 语句末尾是否加分号
1 解决 eslint 和 prettier 之间的冲突
需要配置文件配置使用的规则 plugin:prettier/recommended

git 代码规范配置
npx husky-init && npm install 安装并生成配置文件

使用 coderwhy 插件快速创建文件夹及对应路由路径
coderwhy add3page user -d src/views/main/system/user

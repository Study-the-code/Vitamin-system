# vitamin-system

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 初始化代码



```js
213
123456789
```

#### 滚动条样式
.ivu-menu::-webkit-scrollbar { width: 0 !important }

#### iview 点击确定按钮默认销毁model组件解决方法
 使用slot 
 <Modal>
 ```
  <div slot="footer">
        <Button type="text" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="ok">确定</Button>
   </div>
  <Modal/>
  ```
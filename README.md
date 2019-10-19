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
 
 ```
 <Modal>
  <div slot="footer">
        <Button type="text" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="ok">确定</Button>
   </div>
  <Modal/>
  ```
####  AntV
```
   npm install @antv/g2 --save
   import G2 from '@antv/g2';
   const chart = new G2.Chart({
    container: 'c1',
    width: 600,
    height: 300
  });
```

  AntV 提供了 G2 和 F2 两个统计图表框架，用户经常会面同时临移动端和 PC 端的业务，这时候会面临两个框架的选择问题。G2 本质上是为了传统的中后台产品设计的图表库，除了一般的报表显示外，还提供了大量的交互有很强的分析能力；而 F2 则专门为移动端开发，最关注的是代码大小、性能、表现力。

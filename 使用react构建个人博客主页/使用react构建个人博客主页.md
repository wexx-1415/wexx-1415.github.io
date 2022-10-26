## react简介

react的目标是实现组件化,推崇在一个文件里同时写页面结构和逻辑.

### 基本语法:

```js
class Header extends Component {
  render () {
    return (
      <div>
        <h1>title{1+1}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
```

使用react提供的`jsx` 语法,从`Compoent` 继承的类,只需实现`render`方法即可作为`jsx` 里面的一个HTML标签使用,使用`RactDOM.render` 方法,将组件渲染到指定的HTML结点,**并删除已有的结点**

可以在`jsx` 里面使用`{}` ,里面可以是`jsx` 代码,也可以将`jsx` 代码作为变量,借此实现一些逻辑.return返回的组件必须由一个标签包裹起来.赋值操作必须在return语句之前完成。

### 使用事件监听

直接在原生标签上使用`on*` 事件名称大写,例如`onClick` ,处理函数在组件中实现,传递的时候绑定`this` ,事件处理函数使用`handle` 开头命名

```js
class Title extends Component {
  handleClickOnTitle (e) {
    console.log(this)
  }

  render () {
    return (
	//处理函数才能得到正确的this
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}
```

## state和props

`state`用于处理组件状态的改变,比如显示还是不显示等等,而`props`类似于组件的属性.状态是可以通过父组件与其他组件进行通信的,在不需要通信的时候使用`props`.

`state`一般在组件的构造函数中设置初始状态,使用`setState`函数改变状态,只需传入需要改变的状态即可

```js
class LikeButton extends Component {
  constructor () {
    super()//继承的时候先调用super(),this的值才会正确
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (//点击事件触发事件处理函数,又调用setState函数改变状态.
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}
```

如果需要使用上一次`state` 的值,在`setState` 中的函数会传入`preState` 即前一次的状态.

`props` 是通过标签上的属性设置的.除了**重新渲染**外无法更改值

```js
<LikeButton attr="test"/>
```

通过`this.props.attr` 调用

通过设置`defaultProps` 设置默认值,一般在构造函数之前

```js
 static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
```

> `state` **是让组件控制自己的状态**，`props` **是让外部对组件自己进行配置 。**
>

## 列表渲染

要对类似元素批量渲染,可以先这样.同时必须有**唯一key**.

```js
class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user,i) => {
          return (
            <div key={i}>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}
```

## 构想

* 画面要好看
* 动画要丝滑
* 功能要丰富

1. 入门react
2. 《深入理解css》
3. 重构页面
4. 入门nodejs
5. 模仿别人优秀的页面
6. 不摆烂

~~别鸽了~~

[react.js 小书](https://hyf.js.org/react-naive-book)

![可爱捏](https://fs.lolimapis.ml/ACGPic/)

![pid-36633503逢いたいと願う.jpg](assets/pid-36633503逢いたいと願う-20220714205448-bnby1ox.jpg)

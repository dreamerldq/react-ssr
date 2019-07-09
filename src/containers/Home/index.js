import React from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header'
import { getNewsList } from './store/actions'

class Home extends React.Component {

    render(){
        return(
            <div>
                <Header></Header>
                <h1>这是首页</h1>
                <div>{this.props.name }</div>
                <ul>
                {
                    this.props.list.map((item,index) => {
                        return(
                            <li key={index}>{item.title}</li>
                        )
                    })
                }
                </ul>
                <button onClick={() => alert('CLICK')}>按钮</button>
            </div>
        )
    }
    componentDidMount(){ //在服务器端不会执行
       if(!this.props.list.length){
         this.props.getNewsList()
       }
    }
    
}
Home.loadData = (store) => {
    //这个函数负责在服务器端渲染之前，把这个组件需要用到的数据提前加载好
   return  store.dispatch(getNewsList())
}
const mapStateToProps = (state) => {
    return{
        name: state.home.name,
        list: state.home.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getNewsList(){
            dispatch(getNewsList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
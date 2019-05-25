import React from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header'
import { getNewsList } from './store/actions'

class Home extends React.Component {

    render(){
        return(
            <div>
                <Header></Header>
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
        this.props.getNewsList()
    }
    
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
import React from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header'
const Home = (props) => {
    return(
        <div>
            <Header></Header>
            <div>{props.name }</div>
            <button onClick={() => alert('CLICK')}>按钮</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        name: state.name
    }
}
export default connect(mapStateToProps)(Home)
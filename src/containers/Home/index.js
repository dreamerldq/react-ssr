import React from 'react'
import Header from '../Components/Header'
const Home = () => {
    return(
        <div>
            <Header></Header>
            <div>服务端渲染</div>
            <button onClick={() => alert('CLICK')}>按钮</button>
        </div>
    )
}
export default Home
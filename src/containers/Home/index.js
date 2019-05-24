import React from 'react'
// 同构 一套代码在浏览器中执行一遍，再在服务器中执行一遍
const Home = () => {
    return(
        <div>
            <div>服务端渲染</div>
            <button onClick={() => alert('CLICK')}>按钮</button>
        </div>
    )
}
export default Home
import axios from 'axios'
import {GET_NEWSLIST} from './contents'

const changeList = (list) => {
    return{
        type: GET_NEWSLIST,
        list
    }
}
const getNewsList = () => {
    return (dispatch) => {

        axios.get('http://127.0.0.1:4000/api/news.json')
            .then(({ data }) => {
                dispatch(changeList(data ))
            })

    }
}
export { getNewsList }
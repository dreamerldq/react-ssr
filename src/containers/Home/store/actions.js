import axios from 'axios'
import {GET_NEWSLIST} from './contents'

const changeList = (list) => {
    return{
        type: GET_NEWSLIST,
        list
    }
}
const getNewsList = () => {
    return (dispatch, getState, axiosInstance) => {
      return axiosInstance.get('/api/news.json')
            .then(({ data }) => {
                dispatch(changeList(data ))
            })
    }
}
export { getNewsList }
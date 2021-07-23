
import axios from 'axios'
import GetPachinkoRequestParam from '../models/GetPachinkoParam';
import { PachinkoResult } from '../models/PachinkoResult';

axios.interceptors.request.use(request => {
  console.log({url: request.url, requestParams: request.params})
  return request
})

axios.interceptors.response.use(response => {
  console.log({responseData: response.data})
  return response
})

const requestUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const callPachinkoApi = async (param: GetPachinkoRequestParam, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<void | PachinkoResult[]> => {

  const requestParams: GetPachinkoRequestParam = param

  if (!requestUrl) {
    console.error('api url is not set');
    return
  }

  setIsLoading(true)

  const response =
  axios
  .get<PachinkoResult[]>(
    requestUrl,
    {params:requestParams}
  )
  .then((response) => {
    return response.data
  })
  .catch((e) => {
    console.error(e)
    return
  })
  .finally(()=>{
    setIsLoading(false)
  })

  return response
};

export {callPachinkoApi}

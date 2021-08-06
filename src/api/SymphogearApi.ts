
import axios from 'axios'
import { SymphogearParam } from '../models/SymphogearParam';
import { SymphogearResult } from '../models/SymphogearResult';

axios.interceptors.request.use(request => {
  console.log({url: request.url, requestParams: request.params})
  return request
})

axios.interceptors.response.use(response => {
  console.log({responseData: response.data})
  return response
})

const requestUrl = process.env.NEXT_PUBLIC_SYMPHOGEAR_API_BASE_URL

const callSymphogearApi = async (param: SymphogearParam, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<void | SymphogearResult[]> => {

  const requestParams: SymphogearParam = param

  if (!requestUrl) {
    console.error('api url is not set');
    return
  }

  setIsLoading(true)

  const response =
  axios
  .get<SymphogearResult[]>(
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

export {callSymphogearApi}

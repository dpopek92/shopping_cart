import axios from "axios"
import {useEffect, useState} from "react"
import {ProductI} from "utils/types"

const useCartApi = (initUrl: string, initData: ProductI[]) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [url, setUrl] = useState<string>(initUrl)
  const [data, setData] = useState<ProductI[]>(initData)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const res = await axios(url)

        setData(res.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    getData()
  }, [url])

  return {isLoading, isError, data}
}

export default useCartApi

import axios from "axios"

export const productQtyCheck = async (pid: string, quantity: number) => {
  const body = {pid, quantity}
  try {
    const res = await axios.post(`/api/product/check`, body)

    return res
  } catch (error) {
    console.error(error.response)
    return error.response
  }
}

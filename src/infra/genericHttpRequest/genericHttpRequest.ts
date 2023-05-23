import axios from 'axios'

class GenericHttpRequest {
  async get(url: string) {
    const { data } = await axios.get(url)
    return data
  }
}

export default GenericHttpRequest

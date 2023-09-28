import api from './api'

let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

const send = async (data: any) => {
  return await api.post(`/contact`, data)
}
export const Contacts = {
  send
}

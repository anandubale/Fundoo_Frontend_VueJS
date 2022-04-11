import axios from 'axios'

const baseUserUrl = 'http://localhost:3000/api/v1/users/'

export const postService = (data) => {
  return axios.post(baseUserUrl + 'register', data)
}

export const loginService = (data) => {
  return axios.post(baseUserUrl + 'login', data)
}

export const forgetService = (data) => {
  return axios.post(baseUserUrl + 'forget', data)
}

export const resetService = (data) => {
  return axios.put(baseUserUrl + 'reset/:token', data)
}

export const getService = (data) => {
  return axios.get('url', data)
}

export const deleteService = (data) => {
  return axios.delete('url', data)
}

//  Notes:-

const baseNoteUrl = 'http://localhost:3000/api/v1/note/'

export const CreateNoteService = (data) => {
  return axios.post(baseNoteUrl, data, { headers: { Authorization: localStorage.getItem('token') } })
}

export const GetAllNoteService = () => {
  console.log('we are in service folder getll one')
  return axios.get(baseNoteUrl, { headers: { Authorization: localStorage.getItem('token') } })
}

export const UpdateNoteService = (data, _id) => {
  console.log('we are in service folder update one')
  return axios.put(baseNoteUrl + _id, data, { headers: { Authorization: localStorage.getItem('token') } })
}
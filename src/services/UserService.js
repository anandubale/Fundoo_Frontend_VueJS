import { postService, loginService, forgetService, resetService, CreateNoteService, GetAllNoteService, UpdateNoteService } from './Axios_service'

export const registration = (data) => {
  return postService(data)
}

export const login = (data) => {
  return loginService(data)
}

export const forgetPass = (data) => {
  return forgetService(data)
}

export const resetPass = (data) => {
  return resetService(data)
}

// this is for NOtes
export const Create = (data) => {
  return CreateNoteService(data)
}

export const GetAllThenotes = () => {
  console.log('we are in service folder')
  const All = GetAllNoteService()
  return All
}

export const Updatenotes = (data, _id) => {
  const update = UpdateNoteService(data, _id)
  return update
}
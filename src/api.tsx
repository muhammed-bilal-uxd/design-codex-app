import axios from 'axios'

export const studentsUrl = process.env.NEXT_PUBLIC_SHEET_DB_URL ?? ""

export const getUsers = () => axios.get(studentsUrl)
export const addUser = (data: any) => axios.post(studentsUrl, data)
export const deleteUser = (id: any) => axios.delete(`${studentsUrl}/id/${id}`)
export const updateUser = (id: any, data: any) => axios.patch(`${studentsUrl}/id/${id}`, data)

import type { Student } from '@/types'
import student from '@/assets/data/students.json'
import studentAvatarSVG from '@/assets/icons/activityPath.svg'

export const getStudent = async (): Promise<Student> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({

      })
    }, 500)
  })
}

import type { User } from '@/types'
import user from '@/assets/data/users.json'
import userAvatarSVG from '@/assets/icons/userAvatar.svg'

export const getUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: user.name,
        role: user.role,
        avatar: userAvatarSVG
      })
    }, 500)
  })
}

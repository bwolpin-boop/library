import { ProfilePicture } from './ProfilePicture'

export default {
  title: '🟢   🗓 ProfilePicture',
  component: ProfilePicture,
  args: { profilePic: 1, size: 'big' },
  argTypes: {
    profilePic:     { control: 'select', options: [1, 2, 3, 4, 5] },
    profilePicture: { control: 'select', options: [1, 2, 3] },
    size:           { control: 'select', options: ['small', 'big'] },
  },
}

export const Pic1Big   = { args: { profilePic: 1, size: 'big' } }
export const Pic1Small = { args: { profilePic: 1, size: 'small' } }
export const Pic2Big   = { args: { profilePic: 2, size: 'big' } }
export const Pic2Small = { args: { profilePic: 2, size: 'small' } }
export const Pic3Big   = { args: { profilePic: 3, size: 'big' } }
export const Pic3Small = { args: { profilePic: 3, size: 'small' } }
export const Pic4Big   = { args: { profilePic: 4, size: 'big' } }
export const Pic4Small = { args: { profilePic: 4, size: 'small' } }
export const Pic5Big   = { args: { profilePic: 5, size: 'big' } }
export const Pic5Small = { args: { profilePic: 5, size: 'small' } }
export const NavType1  = { args: { profilePicture: 1 } }
export const NavType2  = { args: { profilePicture: 2 } }
export const NavType3  = { args: { profilePicture: 3 } }

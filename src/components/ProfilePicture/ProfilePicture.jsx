import pic1Big   from '../../assets/profile-pictures/pic-1-big.png'
import pic1Small from '../../assets/profile-pictures/pic-1-small.png'
import pic2Big   from '../../assets/profile-pictures/pic-2-big.png'
import pic2Small from '../../assets/profile-pictures/pic-2-small.png'
import pic3Big   from '../../assets/profile-pictures/pic-3-big.png'
import pic3Small from '../../assets/profile-pictures/pic-3-small.png'
import pic4Big   from '../../assets/profile-pictures/pic-4-big.png'
import pic4Small from '../../assets/profile-pictures/pic-4-small.png'
import pic5Big   from '../../assets/profile-pictures/pic-5-big.png'
import pic5Small from '../../assets/profile-pictures/pic-5-small.png'
import ellipse1  from '../../assets/profile-pictures/ellipse-1.png'
import ellipse2  from '../../assets/profile-pictures/ellipse-2.png'
import ellipse3  from '../../assets/profile-pictures/ellipse-3.png'

const picImages = {
  1: { big: pic1Big, small: pic1Small },
  2: { big: pic2Big, small: pic2Small },
  3: { big: pic3Big, small: pic3Small },
  4: { big: pic4Big, small: pic4Small },
  5: { big: pic5Big, small: pic5Small },
}

const picInitials = { 1: 'B', 2: 'R', 3: 'M', 4: 'P', 5: 'S' }

const ellipses = { 1: ellipse1, 2: ellipse2, 3: ellipse3 }

// profilePic (1-5) + size (small|big) — coloured circle avatars with initials
// profilePicture (1-3)               — Nav Icons style circular avatar (BW initials)
export function ProfilePicture({ profilePic, profilePicture, initials = 'BW', size = 'big', className }) {
  if (profilePicture) {
    return (
      <div className={`dc:relative dc:size-6 ${className ?? ''}`}>
        <img
          src={ellipses[profilePicture]}
          alt=""
          className="dc:absolute dc:inset-[3.13%] dc:block dc:w-full dc:h-full"
        />
        <span className="dc:absolute dc:font-montserrat dc:font-semibold dc:text-white dc:text-[9px] dc:leading-[16.5px] dc:left-[12.25px] dc:top-[3.75px] dc:whitespace-nowrap dc:-translate-x-1/2">
          {initials}
        </span>
      </div>
    )
  }

  const pic = profilePic ?? 1
  const isBig = size === 'big'
  const src = picImages[pic][size]
  const initial = picInitials[pic]
  const containerSize = isBig ? 'dc:w-8 dc:h-8' : 'dc:size-6'
  const textSize = isBig ? 'dc:text-[13.576px]' : 'dc:text-[10.182px]'

  return (
    <div className={`dc:relative ${containerSize} ${className ?? ''}`}>
      <img src={src} alt="" className="dc:absolute dc:inset-0 dc:block dc:w-full dc:h-full" />
      <span className={`dc:absolute dc:font-montserrat dc:font-semibold dc:text-white dc:leading-normal ${textSize}`}
        style={{ inset: '21% 30% 24% 33%' }}>
        {initial}
      </span>
    </div>
  )
}

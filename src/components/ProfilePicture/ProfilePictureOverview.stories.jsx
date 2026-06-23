import { ProfilePicture } from './ProfilePicture'

export default {
  title: '🟢   🗓 ProfilePicture/Overview',
  component: ProfilePicture,
}

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>profilePic 1–5 · size=big</span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map(n => <ProfilePicture key={n} profilePic={n} size="big" />)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>profilePic 1–5 · size=small</span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map(n => <ProfilePicture key={n} profilePic={n} size="small" />)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>profilePicture 1–3</span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {[1, 2, 3].map(n => <ProfilePicture key={n} profilePicture={n} />)}
        </div>
      </div>
    </div>
  )
}

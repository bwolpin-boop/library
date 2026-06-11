import { colors } from '../../tokens.js'
import { H2YLetters } from './H2YLetters.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'

export function H2YSequence({ property1 = 'Default' }) {
  const isPending = property1 === 'pending'

  return (
    <div style={{
      borderLeft: `1px solid ${colors.dividerSubtle}`,
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      height: '34px',
      padding: '0 4px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <H2YLetters type="H" before="before" />
        <H2YLetters type="2" before="before" />
        <H2YLetters type="Y" before="before" />
      </div>

      <NavIcon name="arrow-right-h2y" size={20} />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <H2YLetters type="H"                        before="after" />
        <H2YLetters type={isPending ? 'pending' : '2'} before="after" />
        <H2YLetters type="Y"                        before="after" />
      </div>
    </div>
  )
}

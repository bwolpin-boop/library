import { CmiRibbonSections } from './CmiRibbonSections'

export default {
  title: '🟢   🎀 Ribbon/CmiRibbonSections/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px auto', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>State</div>
          <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>Preview</div>
        </div>
        {[true, false].map((selected) => (
          <div key={String(selected)} style={{ display: 'grid', gridTemplateColumns: '120px auto', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>
              {selected ? 'Selected' : 'Not selected'}
            </div>
            <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>
              <CmiRibbonSections label="Nursing (H)" selected={selected} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

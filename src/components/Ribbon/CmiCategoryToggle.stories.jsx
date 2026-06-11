import { CmiCategoryToggle } from './CmiCategoryToggle'

export default {
  title: '🟢   🎀 Ribbon/CmiCategoryToggle',
  component: CmiCategoryToggle,
  parameters: { controls: { disable: true } },
}

export const Default = {
  render: () => <CmiCategoryToggle />,
}

export const CustomCategories = {
  render: () => (
    <CmiCategoryToggle
      categories={[
        { label: 'All' },
        { label: 'Nursing (H)' },
        { label: 'OT/PT (H)' },
        { label: 'SLP (H)' },
        { label: 'NTA (2)' },
      ]}
    />
  ),
}

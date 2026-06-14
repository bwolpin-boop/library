import '../src/index.css'

export default {
  parameters: {
    options: {
      storySort: (a, b) => {
        // 🗂️ All Components always comes first
        const isAllA = a.title === '🗂️ All Components'
        const isAllB = b.title === '🗂️ All Components'
        if (isAllA && !isAllB) return -1
        if (!isAllA && isAllB) return 1

        // Within the same parent group, Overview comes before Variants
        const parentA = a.title.split('/').slice(0, -1).join('/')
        const parentB = b.title.split('/').slice(0, -1).join('/')
        if (parentA === parentB) {
          if (a.title.endsWith('/Overview')) return -1
          if (b.title.endsWith('/Overview')) return 1
        }
        return 0
      },
    },
  },
}

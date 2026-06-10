import '../src/index.css'

export default {
  parameters: {
    options: {
      storySort: (a, b) => {
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

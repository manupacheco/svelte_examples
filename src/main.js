import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Manu',
    lastName: 'Pacheco',
  },
})

export default app

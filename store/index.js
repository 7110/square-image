export const state = () => ({
  images: []
})

export const mutations = {
  addImage(state, image) {
    const names = state.images.map((image) => image.name)
    if (!names.includes(image.name)) {
      state.images.push(image)
    }
  },
  removeImage(state, name) {
    const index = state.images.findIndex((image) => image.name === name)
    state.images.splice(index, 1)
  }
}

export const actions = {
  loadImage({ commit }, info) {
    const image = new Image()
    image.onload = () => {
      commit('addImage', {
        img: image,
        sw: image.width,
        sh: image.height,
        ...info
      })
    }

    image.src = info.src
  }
}

const types = {
  UPDATE_CARD_CHAPTER: 'card/UPDATE_CARD_CHAPTER',
};

const state = {
  chapter: 'one',
};

const getters = {
  getChapter() {
    return state.chapter;
  },
};

const actions = {
  updateCardChapter({ commit }) {
    commit(types.UPDATE_CARD_CHAPTER);
  },
};

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const mutations = {
  [types.UPDATE_CARD_CHAPTER](state) {
    if (state.chapter === 'one') {
      state.chapter = 'two';
    } else if (state.chapter === 'two') {
      state.chapter = 'three';
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

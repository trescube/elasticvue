import { DEFAULT_DATA_TABLE_PAGINATION } from '../../consts'

export const snapshots = {
  namespaced: true,
  state: {
    filter: '',
    repository: '',
    pagination: Object.assign({}, DEFAULT_DATA_TABLE_PAGINATION, { sortBy: ['name'] })
  },
  mutations: {
    setFilter (state, filter) {
      state.filter = filter
    },
    setPagination (state, pagination) {
      state.pagination = pagination
    },
    setRepository (state, repository) {
      state.repository = repository
    }
  }
}

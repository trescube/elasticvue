import { defineStore } from 'pinia'

export const useConnectionStore = defineStore('connection', {
  state: () => {
    return {
      clusters: [],
      activeClusterIndex: null,
    }
  },
  getters: {
    activeCluster: state => {
      if (typeof state.activeClusterIndex !== 'number') return null
      return state.clusters[state.activeClusterIndex]
    }
  },
  actions: {
    addCluster (cluster) {
      const len = this.clusters.push(cluster)
      this.activeClusterIndex = len - 1
      return this.activeClusterIndex
    }
  },
  persist: true
})

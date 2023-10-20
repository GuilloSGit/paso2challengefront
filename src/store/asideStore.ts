import { reactive } from 'vue'

export const asideStore = reactive({
  isExpanded: false,
  setIsExpanded(value: boolean) {
    this.isExpanded = value
  }
})

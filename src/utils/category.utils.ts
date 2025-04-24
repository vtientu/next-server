import { CategoryDocument } from '@/models/category'

export const buildCategoryTree = (flatList: CategoryDocument[]) => {
  const idToNodeMap: Record<string, CategoryDocument & { children: CategoryDocument[] }> = {}
  const tree: (CategoryDocument & { children: CategoryDocument[] })[] = []

  // Bước 1: Tạo map từ id => node
  flatList.forEach((item) => {
    idToNodeMap[item._id] = { ...item, children: [] }
  })

  // Bước 2: Gắn children vào parent
  flatList.forEach((item) => {
    if (item.parent) {
      const parentNode = idToNodeMap[item.parent.toString()]
      if (parentNode) {
        parentNode.children.push(idToNodeMap[item._id])
      }
    } else {
      tree.push(idToNodeMap[item._id])
    }
  })

  return tree
}

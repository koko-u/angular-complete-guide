import { Ingredient } from '../../models/ingredient.model'

/**
 * get max id number of the array
 *
 * @param elements array whose elements has id property
 */
export function getMaxId<T extends { id: number }>(elements: T[]): number {
  return elements.reduce((prev, current) => {
    if (current.id > prev) {
      return current.id
    } else {
      return prev
    }
  }, 0)
}

/**
 * merge two ingredients by id
 *
 * @param ingredients1
 * @param ingredients2
 */
export function mergeById(
  ingredients1: Ingredient[],
  ingredients2: Ingredient[]
): Ingredient[] {
  let igd1 = [...ingredients1]
  let igd2 = [...ingredients2]

  let merged: Ingredient[] = []
  for (const ingredient1 of igd1) {
    const idx2 = igd2.findIndex(
      (ingredient2) => ingredient2.id === ingredient1.id
    )
    if (idx2 >= 0) {
      const ingredient2 = ingredients2[idx2]
      // has both values
      merged.push(
        new Ingredient({
          id: ingredient1.id,
          name: ingredient1.name,
          amount: ingredient1.amount + ingredient2.amount,
        })
      )
      // remove merged element from igd2
      igd2.splice(idx2, 1)
    } else {
      // no same value in igd2
      merged.push(ingredient1)
    }
  }
  // rest igd2
  for (const ingredient2 of igd2) {
    merged.push(ingredient2)
  }

  return merged
}

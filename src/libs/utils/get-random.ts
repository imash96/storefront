import { ProductCategory } from "@medusajs/medusa"

export function getRandomStyle(originalArray: ProductCategory, count: number) {
    const leather = originalArray.category_children.map(c => {
        return { ...c, name: `${originalArray.name} ${c.name}` } as ProductCategory
    })

    return getRandomObj(leather, count)
}

export function getRandomCategory(originalArray: ProductCategory[], count: number) {
    const leather = originalArray[0].category_children.map(c => {
        return { ...c, name: `${originalArray[0].name} ${c.name}` } as ProductCategory
    })
    const suede = originalArray[1].category_children.map(c => {
        return { ...c, name: `${originalArray[1].name} ${c.name}` } as ProductCategory
    })

    return getRandomObj(leather.concat(suede), count)
}

export function getRandomObj(originalArray: ProductCategory[], count: number) {

    for (let i = originalArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
    }

    return originalArray.slice(0, count).sort((a, b) => a.rank - b.rank);
}
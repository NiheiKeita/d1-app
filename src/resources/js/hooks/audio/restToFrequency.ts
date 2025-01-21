import { RestScale } from "./type"

export const restToFrequency = (z: RestScale) => {
    switch (z) {
        case "Z1":
            return 1
        case "Z2":
            return 2
        case "Z3":
            return 3
        case "Z4":
            return 4
        case "Z5":
            return 5
        case "Z6":
            return 6
        case "Z7":
            return 7
        case "Z8":
            return 8
        default:
            throw new Error("Invalid musical scale")
    }
}

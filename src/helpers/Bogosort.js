import { nonSortedArray } from "../data/non-sorted.js";
export const bogoSort = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };
    const isSorted = (array) => {
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                return false;
            }
        }
        return true;
    };
    const bogoSort = (array) => {
        while (!isSorted(array)) {
            console.log("Failed....");
            shuffleArray(array);
        }
        return array;
    };
    // Ejemplo de uso
    const array = nonSortedArray();
    console.log("Array original:", array);
    const sortedArray = bogoSort(array);
    console.log("Array ordenado:", sortedArray);
};
//# sourceMappingURL=Bogosort.js.map
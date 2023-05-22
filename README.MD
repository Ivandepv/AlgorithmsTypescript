## Algorithms in Typescript

This is a repository for collecting algorithms written in Typescript.


## Installation
```
pnpm i
```

# Build

```
pnpm run build
```

# Run

```
pnpm start
```


# Bogo Sort Parameter

In the data/non-sortedArray

```

export const nonSortedArray = ()=>{
    let arr: number[] = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    return arr;
}
```

modify the length to modify the array.

```
export const nonSortedArray = ()=>{
    let arr: number[] = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    return arr;
}
```
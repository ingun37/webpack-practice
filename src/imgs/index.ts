export function getImage(name:string):any {
    return require(`./${name}`)
}
import { Object3D, Sprite } from "../node_modules/three/src/Three";
import ClosetViewer from "./closet";
import { getImage } from "./imgs";
export { moduleFunc }
from "./module";
export const closet = new ClosetViewer();

console.log('apng base64: ', getImage('a.png'))

const a = new Sprite()
const b = new Object3D()
b.add(a)
console.log(b.children[0].material)
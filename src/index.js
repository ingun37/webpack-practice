import ClosetViewer from "./closet";
import { getImage } from "./imgs";
export { moduleFunc }
from "./module";
export const closet = new ClosetViewer();

console.log('apng base64: ', getImage('a.png'))
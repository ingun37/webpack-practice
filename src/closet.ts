
export default class ClosetViewer {
    load(elementID:string, url:string) {
        document.getElementById(elementID).innerHTML = "showing from url:" + url;
    }
}
export default class ClosetViewer {
    init({ elementID }) {
        this.elementID = elementID;
    }
    load(url) {
        document.getElementById(this.elementID).innerHTML = "showing from url:" + url;
    }
}
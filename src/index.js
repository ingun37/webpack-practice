class ClosetViewer {

    init({ elementID }) {
        this.elementID = elementID;
    }
    load(url) {
        document.getElementById(this.elementID).innerHTML = "showing " + url;
    }
}
const closet = ClosetViewer();
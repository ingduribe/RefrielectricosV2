export default {
  api: "http://localhost:3000",
  arrayBufferToBase64: buffer => {
    console.log(buffer);
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
};

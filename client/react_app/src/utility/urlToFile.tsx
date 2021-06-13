export const urlToFile = (dataURI: string) => {
  var byteString = atob(dataURI.split(',')[1]);
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var intArray = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([intArray], {
    type: 'image/jpeg',
  });
  var file = new File([blob], 'image.jpg');
  return file;
};

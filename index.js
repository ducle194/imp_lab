 
function onDevice() {
  document.getElementById('cam-btn').addEventListener('click', openCamera);
  document.getElementById('brows-btn').addEventListener('click', openFilePicker);

  function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
  }
  //take a picture by srcType = Camera.PictureSourceType.CAMERA
  function openCamera(selection) {
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);

    navigator.camera.getPicture(cameraSuccess, cameraError, options);
  }

  /*pick a photo from library by srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;*/
  function openFilePicker(selection) {
    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;   //change source to library
    var options = setOptions(srcType);

    navigator.camera.getPicture(onSuccess, onFail, options);
  }

  function cameraSucess(imageURI) {
      var image = document.getElementById('myImg');
      image.src = imageURI;
      createNewFileEntry(imageURI);
  }

  function cameraError(message) {
      console.debug("Unable to obtain picture: " + message, "app");
  }
}
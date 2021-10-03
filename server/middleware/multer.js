const multer = require('multer');

// set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    // image.jpg
    var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
    console.log('image filename: ', file.originalname);

    cb(null, file.originalname + '-' + Date.now() + ext);
  },
});

module.exports = store = multer({ storage: storage });

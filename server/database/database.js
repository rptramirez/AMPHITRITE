const mongoose = require('mongoose');

const Connect = async () => {
  try {
    // mongodb clund connection
    const con = await mongoose.connect(
      'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false/Ocean4Good',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = Connect;

import mongoose from'mongoose';
module.exports = {
  connect: function (mode, callback) {
    /* let url = 'mongodb://localhost/newSchoolRunnerDB';*/
    let url = process.env.PROD_MONGODB || 'mongodb://newSchoolRunnerDB:123456789anfen@ds019916.mlab.com:19916/schoolrunner';
    if (mode === 'test') {
      url = 'mongodb://localhost/newSchoolRunner-demo';
    }
    mongoose.connect(url, callback);
  },
  close: function (callback) {
    mongoose.connection.close(callback);
  }
};



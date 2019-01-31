const co = require('co');
const mongoose = require('mongoose');

const DEFAULT_PROGRESS = {
  BAR_CURL: [],
  TRICEP_DIP: [],
  CHEST_PRESS: [],
  SHOULDER_PRESS: [],
  BAR_ROW: [],
  LEG_SQUAT: []
};

let conn = null;

const uri =
  process.env.MONGO !== undefined
    ? process.env.MONGO
    : 'mongodb://localhost/gypla';

exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);

  context.callbackWaitsForEmptyEventLoop = false;

  register(requestBody)
    .then(res => {
      callback(null, res);
    })
    .catch(error => callback(error));
};

const register = requestBody => {
  return co(function*() {
    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0
      });

      conn.model(
        'users',
        new mongoose.Schema({
          email: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
          progress: {
            type: Object,
            required: false
          }
        })
      );
    }

    const M = conn.model('users');
    const email = requestBody.email;

    const doc = yield M.create({
      email: email,
      progress: DEFAULT_PROGRESS
    });

    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };

    return response;
  });
};

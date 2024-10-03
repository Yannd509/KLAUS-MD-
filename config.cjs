// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"MGIrQITCp7Laetk6wZRrrdo/EllHwzPcobmM06re61k="},"public":{"type":"Buffer","data":"SLtEgFUITEuW56lHUSdCMmL1uylYAFZFIPWpiOMO62I="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QMw7AI1L05q1sFP/6U18e7h2QBQe7uth4x+Xm6VQ1mM="},"public":{"type":"Buffer","data":"UB3AUmsbviH4qXK3XIPFwLAJfI5s6CgYcD24vDcjsx4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eCPAAI919d+DBAjr5oFP7rSko0yDOEJskBnPRQh3H2c="},"public":{"type":"Buffer","data":"NUXCTfNS0zqQLWmN7afZWZ4qxA5GNP2aNX4JYavshyU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"oDEKEPeURL3gqPl/WqYyTUFk1y6ap6tLWxvmvIsrqkM="},"public":{"type":"Buffer","data":"ZxDdBqsgfjhEL86Bc357vMhLVQySQviekSo8Q8n0Qi0="}},"signature":{"type":"Buffer","data":"TKBGOknFBi7Oi+eJ0ZERTcTmj3/8AuB4fLUndrhM6ZjvzQQ34mTycmYgb2+FPfimL3k1XqNySn6SyUCKnUFyiQ=="},"keyId":1},"registrationId":233,"advSecretKey":"qf73+ClIRCBHN1GH+cT35/EqKIh1soLvTmkpFsm/KWw=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"atikkm3sQTa0Ih02-0-qRw","phoneId":"7b76ed50-e1e2-490f-a0e9-1ed749717237","identityId":{"type":"Buffer","data":"vbcEE58aj9szVhCyEIiQNseNiZ0="},"registered":true,"backupToken":{"type":"Buffer","data":"vuUgz6qrIAH3CC3DH6Nl0c7tIVY="},"registration":{},"pairingCode":"T4GR59PD","me":{"id":"50948865791:3@s.whatsapp.net"},"account":{"details":"CLntwSEQ7N33twYYAiAAKAA=","accountSignatureKey":"UqKqiasmFFE6T/9DKwiak81OYEg9piHiKQsH0VzFYFc=","accountSignature":"eOyQwuewF8dDTilSEJzXsibCe0mBSEyHLCvODuA+RiEBQi42G42C/Et+B7YN6ajk0FAB+51A010oom2Sl9BeBQ==","deviceSignature":"4apS2zQf7dT8+btvboaOo0gzkhuRa2wSfPh/2M0mcoDvUdkXyJyy9K7KzUdyf5Qx2MgtcFV2YuiUB5zRR8OhgA=="},"signalIdentities":[{"identifier":{"name":"50948865791:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVKiqomrJhRROk//QysImpPNTmBIPaYh4ikLB9FcxWBX"}}],"platform":"android","lastAccountSyncTimestamp":1727917808,"myAppStateKeyId":"AAAAACMf"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || " 𝙎-𝙏𝞢𝞜",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50948865791",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;

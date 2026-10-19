const path = require('path');
const surgeSDK = require('C:/Users/Faisal/AppData/Local/npm-cache/_npx/23158936acd5c32d/node_modules/surge-sdk');
const surgeStream = require('C:/Users/Faisal/AppData/Local/npm-cache/_npx/23158936acd5c32d/node_modules/surge-stream');

const project = path.resolve(__dirname, 'dist');
const domain = 'anatomy-pets-clinic.surge.sh';

console.log('Publishing', project, 'to', domain);

const sdk = surgeSDK({
  endpoint: 'https://surge.surge.sh',
  defaults: {}
}, surgeStream);

sdk.publish(project, domain, {
  user: 'token',
  pass: '3e9949c219d7d54adf8590589c51c88e'
}, {
  timestamp: new Date().toJSON(),
  ssl: true
}, {})
.on('progress', (p) => {
  if (p && p.id === 'upload') {
    const pct = Math.round((p.written / p.total) * 100);
    if (pct % 25 === 0) {
      console.log(`Upload progress: ${pct}%`);
    }
  }
})
.on('success', () => {
  console.log(`SUCCESS: Published to https://${domain}`);
  process.exit(0);
})
.on('error', (err) => {
  console.error('Error during publish:', err);
  process.exit(1);
})
.on('fail', (f) => {
  console.error('Failed publish:', f);
  process.exit(1);
})
.on('abort', (a) => {
  console.error('Aborted publish:', a);
  process.exit(1);
});

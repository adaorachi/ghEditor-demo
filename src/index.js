import snipDown from 'snipdown';
import '../node_modules/snipdown/scss/style.scss';
import runCode from './runCode';


runCode();
const opt = {
  container: 'snip1',
  placeholder: 'A message ...',
  allowedAttributes: ['style'],
  inlineShortcut: true,
  frameStyles: { },
  headerToolbar: {
    // icons: 'heading|bold|italic|',
    iconSize: '16',
  },
  uploadImageConfig: {
    storageBucket: 'snip-editor.appspot.com',
  },
  toolTip: {
    enabled: true,
  },
};

const sniptext1 = snipDown();
sniptext1.markDown(opt);
// sniptext1.setValue('# This is me');
// sniptext1.getValue('snip1');

const sniptext2 = snipDown();
sniptext2.markDown({container: 'snip2'});

// const sniptext3 = snipDown;
// sniptext3.markDown({container: 'snip3'});
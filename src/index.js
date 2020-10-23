import ghEditor from 'gheditor';
import runCode from './runCode';
import '../node_modules/gheditor/scss/style.scss';

const opt1 = {
  container: 'gheditor1',
  indentWithTab: true,
  headerToolbar: {
    icons: 'heading|bold|italic|blockquote|strikethrough|horizontal-rule|code|link|code-block|unordered-list|ordered-list|tasklist|mention|image|table|',
  },
  inlineShortcut: true,
  inlineEmoji: {
    enabled: false,
  },
  splitScreen: {
    enabled: true,
  },
  toolbarEmoji: true,
};
const gheditortext1 = ghEditor();
gheditortext1.markDown(opt1);
gheditortext1.setValue('# Intro\n\nGo ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). What about a ~~strikethrough~~ text or a direct mention @adaorachi You can type the Markdown syntax, use the header toolbar, utilize the inline toolbar or use shortcuts like `cmd-B`/ `ctrl-B` for bolded text OR `cmd-I`/ `ctrl-I` for italicized text and other availiable shortcuts.\n\n > Here is a [link](url) to all available keyboard shortcuts for all buttons. \n\n## Lists Unordered lists can be started using the toolbar or by typing `* `, `- `, or `+ `. Ordered lists can be started by typing `1. `.\n#### Unordered\n\n- Lists are a piece of cake\n- I\'m sure you agree with me\n- Indented Tabs work too\n- Haha! I\'m sure you\'re trying it out now.\n\n#### Ordered\n1. Numbered lists...\n2. ...work too!\n\nAnd not just the lists. You should also try the tasklist too.\n\n - [ ] This is super useful for listing tasks.\n\n## What about images?\n![Yes](https://i.imgur.com/sZlktY7.png)')

const opt2 = {
  container: 'gheditor2',
  
  inlineEmoji: {
    enabled: true,
  },
};
const gheditortext2 = ghEditor();
gheditortext2.markDown(opt2);
gheditortext2.setValue('Oh, I give up! Give me words! Real words! They’re so much easier. 🍑 as much as I want to 🏃 from these cartoons, I ⛔️. They are rapidly seeping into the vernacular of the 🌐 It’s a ⚓️ or 🏊 situation.\n\nI get 📧 now with little characters in the subject line. My text messages and social media feeds are increasingly full of 😃 - only sentences or thoughts. Instagram, specifically, says nearly 4️⃣0️⃣ % of the text posts on its apps contain emojis. Domino’s even lets you order a pie now via tweet with just a 🍕.\n\nEmoji is the new lingua franca. And like learning any new language, brain power, practice and tricks are required—especially for an idiom that has 💩 and 👻 but no equal sign.')

const opt3 = {
  container: 'gheditor3',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  inlineEmoji: {
    enabled: false,
  },
  uploadImage: {
    enabled: true,
    config: { storageBucket: 'snip-editor.appspot.com' },
  },
};
const gheditortext3 = ghEditor();
gheditortext3.markDown(opt3);
gheditortext3.setValue('# Attach files by clicking or dragging and dropping on the footer area')

const opt4 = {
  container: 'gheditor4',
  uploadImage: {
    enabled: false,
  },
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  inlineEmoji: {
    enabled: false,
  },
  autoSave: {
    enabled: true,
    delay: 5000,
  },
  inlineToolbar: '',
};
const gheditortext4 = ghEditor();
gheditortext4.markDown(opt4);
gheditortext4.setValue('# This one autosaves! \nThis content automatically saves every 5 seconds by default, but this can be changed in the **autosave[delay]** settings. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted. Click on the **save** icon to save content manually.')

const opt5 = {
  container: 'gheditor5',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  inlineEmoji: {
    enabled: false,
  },
  autoUseFontAwesome: true,
  inlineToolbar: '',
};
const gheditortext5 = ghEditor();
gheditortext5.markDown(opt5);
gheditortext5.setValue('# This outputs font-awesome icon. Check this icon out - <i class="fas fa-icons"></i>')

const opt6 = {
  container: 'gheditor6',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  inlineEmoji: {
    enabled: false,
  },
  inlineToolbar: '',
  inlineAttributes: true,
};
const gheditortext6 = ghEditor();
gheditortext6.markDown(opt6);
gheditortext6.setValue('```javascript\nfunction greeting() {\n\tconsole.log(\'Hello World!\')\n}\n```')

const opt7 = {
  container: 'gheditor7',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  inlineEmoji: {
    enabled: false,
  },
  inlineToolbar: '',
  highlightCode: true,
};
const gheditortext7 = ghEditor();
gheditortext7.markDown(opt7);
gheditortext7.setValue('**Note:** a note is something that needs to be mentioned but is apart from the context.\n{: .note}\n\nThis is a paragraph\n{:: comment}\nThis is a comment which is completely ignored.\n{:/comment}\n... paragraph continues here.\n\nParagraph\n{: .class .class-1 #custom-id}\n\n## Heading {: .class .class-1 #custom-id-2}\n\nParagraph\n{: .class #custom-id-3 style="color:red"}\n\n- {: .class} List item with custom class\n- {:  #id} List item with custom id\n\nThis is a [link](https://google.es) in Spanish.\n{: hreflang="es"}\n\n![image alternative text](https://about.gitlab.com/images/handbook/marketing/markdown-guide-image-plain-text.png){: .shadow}')

runCode();
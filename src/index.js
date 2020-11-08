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
gheditortext1.setValue('# GhEditor\n\nGhEditor is an all-in-one cloud-enabled file-storage, built-in autosaving, emoji-integrated, preview & split-screen JavaScript-powered HTML5 Markdown editor. An awesome web-based markdown editor!\n- Type some Markdown here\n- See the HTML result in the preview section or click the toolbar toggle button.\n- Magic, right!\n\nYou can also:\n- [ ] Use cool emojis just by typing the prefix symbol - : and it autocompletes with a list of emojis to choose from. (**check out this feature in the demo below!**)\n- [ ] Attach image files by selecting or dragging and dropping them (**requires your Google Firebase configuration to be linked**)\n- [ ] Make use of FontAwesome Icons (**check out this feature in the demo below!**)\n- [ ] Autosave your markdown content to in-built storage.\n- [ ] Split-screen to see live HTML result as you type.\n- [ ] Use inline toolbar. Select this word to see it!\n- [ ] Use the tab key for indentation and much more!\n\n> Instructions on how to use GHEditor in your own application are linked below.\n\n| Site | Links |\n| ------ | ------ |\n| Github | [Repo](https://github.com/adaorachi/ghEditor) |\n| NPM | [Installation](https://www.npmjs.com/package/gheditor) |\n| Github Wiki | [Cheat Sheet](https://github.com/adaorachi/ghEditor/wiki/markdown_cheat_sheet) |')

const opt2 = {
  container: 'gheditor2',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
  indentWithTab: true,
};
const gheditortext2 = ghEditor();
gheditortext2.markDown(opt2);
gheditortext2.setValue('Oh, I give up! Give me words! Real words! They’re so much easier. In as much as I want to 🏃 from these cartoons, I ⛔️. They are rapidly seeping into the vernacular of the 🌐 It’s a ⚓️ or 🏊 situation.\n\nI get 📧 now with little characters in the subject line. My text messages and social media feeds are increasingly full of 😃 - only sentences or thoughts. Instagram, specifically, says nearly 4️⃣0️⃣ % of the text posts on its apps contain emojis. Domino’s even lets you order a pie now via tweet with just a 🍕.\n\nEmoji is the new lingua franca. And like learning any new language, brain-power, practice, and tricks are required—especially for an idiom that has 💩 and 👻 but no equal sign.')

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
  highlightCode: true,
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
  inlineAttributes: true,
};
const gheditortext7 = ghEditor();
gheditortext7.markDown(opt7);
gheditortext7.setValue('**Note:** a note is something that needs to be mentioned but is apart from the context.\n{: .note}\n\nThis is a paragraph\n{:: comment}\nThis is a comment which is completely ignored.\n{:/comment}\n... paragraph continues here.\n\nParagraph\n{: .class .class-1 #custom-id}\n\n## Heading {: .class .class-1 #custom-id-2}\n\nParagraph\n{: .class #custom-id-3 style="color:red"}\n\n- {: .class} List item with custom class\n- {:  #id} List item with custom id\n\nThis is a [link](https://google.es) in Spanish.\n{: hreflang="es"}\n\n![image alternative text](https://about.gitlab.com/images/handbook/marketing/markdown-guide-image-plain-text.png){: .shadow}')

const opt8 = {
  container: 'gheditor8',
  headerToolbar: {
    icons: 'heading|bold|italic|',
  },
};

const gheditortext8 = ghEditor();
gheditortext8.markDown(opt8);
gheditortext8.setValue("# This outputs HTML markup. Feel free to add your markdown!");

runCode(gheditortext8);
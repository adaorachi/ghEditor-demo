const runCode = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('run')) {
      const id = e.target.id;
      const idSplit = id.split('-')[2];
      const snippetId = `code-snippet-${idSplit}`;
      const textarea = `copyTextarea-${idSplit}`;

      const copyText = document.getElementById(snippetId).innerHTML;
      const copy = document.getElementById(textarea);
      copy.value = copyText;
      copy.select();
      copy.setSelectionRange(0, 99999);

      document.execCommand('copy');
      e.target.textContent = 'Copied!';
    }
  })
}

export default runCode;
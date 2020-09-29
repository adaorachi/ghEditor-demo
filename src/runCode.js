const runCode = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('run')){
      const id = e.target.id;
      const idSplit = id.split('-')[2];
      const snippetId = `code-snippet-${idSplit}`;
      const dd = document.getElementById(`${snippetId}`).innerHTML;
      let demo;
      if (localStorage.getItem('demo') === null) {
        demo = [];
      } else {
        demo = JSON.parse(localStorage.getItem('demo'))
      }
      demo.push({snip1: dd});
      localStorage.setItem('demo', JSON.stringify(demo))
      console.log(demo)
    }
  })
  // const runButtons = document.querySelectorAll('.run');
  // runButtons.forEach(button => {
  //   const id = button.id
  //   console.log(button.id)
  // })
}

export default runCode;
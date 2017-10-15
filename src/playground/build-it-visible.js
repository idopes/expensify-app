const appRoot = document.getElementById('app');


let visibility = false;
const toggleDetails = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {visibility ? 'Hide details' : 'Show detailes'}
      </button>
      <div>{visibility ? 'Hey. These are some details you can now see' : ''}</div>
    </div>
  );

  ReactDOM.render(template,appRoot);
}

render();

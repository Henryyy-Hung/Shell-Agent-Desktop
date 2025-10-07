import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// window.api
//   .test('hello')
//   // eslint-disable-next-line promise/always-return
//   .then((r) => {
//     root.render(`Response from main process: ${r}`);
//   })
//   .catch((err) => {
//     console.error('Error calling main process:', err);
//   });

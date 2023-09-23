import { router } from '@/router';
import '@/styles/global.scss';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyInputNotValue = () => {
  return toast.error('Please provide a search word');
};
export const notifyInputNotImg = () => {
  return toast.error('There are no images for your request :( Try other words');
};

export function notifyDataError(params) {
  toast.error(`No connection ${params}`);
}

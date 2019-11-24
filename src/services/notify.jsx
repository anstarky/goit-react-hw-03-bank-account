import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const notifySettings = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
};

const notifyError = {
    NOT_ENOUGH_AMOUNT: 'На счету недостаточно средств для проведения операции!',
    ENTER_CORRECT_AMOUNT: 'Введите корректную сумму для проведения операции!',
};

const notEnoughAmount = () => toast.error(notifyError.NOT_ENOUGH_AMOUNT, notifySettings);

const enterCorrectAmount = () => toast.error(notifyError.ENTER_CORRECT_AMOUNT, notifySettings);

export default { notEnoughAmount, enterCorrectAmount };


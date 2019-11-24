const save = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

const get = key => {
    try {
        const transactions = localStorage.getItem(key);
        return transactions ? JSON.parse(transactions) : null;
    } catch (e) {
        console.log('error');
    }

    return null;
};

export default {
    save,
    get,
};
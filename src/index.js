module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    if (!number) return false;
    let str = parseInt(number);

    str = String(str);

    const unit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tewnty = ['ten', 'eleven', 'twelve', 'twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
    const hundred = ' hundred ';


    if (str.length == 1) str = '00' + str;
    else if (str.length == 2) str = '0' + str;


    return [...str].reduce((acc, n, i) => {
        const u = parseInt(n);
        if (i === 0 && u !== 0) acc[0] += unit[u - 1] + hundred;
        else if (i === 1 && u !== 0) {
            if (u === 1) acc[1] = 1;
            else {
                acc[1] = 0;
                if (u === 4) acc[0] += 'forty ';
                else acc[0] += tewnty[u + 1] + 'ty ';
            }
        }
        else if (i === 2) {
            if (acc[1] === 1) {
                if (u <= 2) acc[0] += tewnty[u];
               else acc[0] += tewnty[u + 1] + 'teen ';
            }
            else if (u !== 0) acc[0] += unit[u - 1];
        }
        return acc;
    }, ['', 0])[0].trim();
};

let optionsArr = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
];

let optionsObj = {
    1: 'Option 1', 
    2: 'Option 2',
    3: 'Option 3'
};

let options = [1, 2, 3];

let selectedValue = '2';

const createSelect = (options, value=options[0].value) => {

    options = inputTransformation(options);

    let select = document.createElement('select');
    select.classList.add('select');

    for (let obj of options) {
        let option = document.createElement('option');
        option.classList.add('option');
        option.value = obj.value;
        option.label = obj.label;

        select.append(option);

        if (obj.value == value) {
            select.selectedIndex = options.indexOf(obj);
        }

    }

    return select;
}

const inputTransformation = (input) => {
    let arr = [];
    if (input.length >= 0) {
        for (let item of input) {
            if (typeof item !== 'object') {
                arr.push({value: item, label: item});
            }
            else {
                arr.push(item);
            }
        }
    }
    else {
        for (let key in input) {
            arr.push({value: key, label: input[key]});
        }
    }
    return arr;
}

let select = createSelect(optionsArr, selectedValue);
document.body.append(select);
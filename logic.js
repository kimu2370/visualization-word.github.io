import {selector} from "./selector.js";

export const generateLabeledList = texts => {
    const arr = [];

    for (let text of texts) {
        arr.push({
            idx: selector.wrapperResult.innerText.indexOf(text),
            label: `<span class="label">${text}</span>`,
        });
    }
    return arr;
};

export const setValue = () => {
    let result = "";
    const texts = [];

    result = selector.wrapperResult.innerText;

    for (let item of selector.list) {
        texts.push(item.innerText);
    }
    return {result, texts};
};

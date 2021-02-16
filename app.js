import {selector} from "./selector.js";
import {setValue, generateLabeledList} from "./logic.js";

const onClickReset = () => {
    location.reload();
};

const onClickHandler = () => {
    let {result, texts} = setValue();
    const list = generateLabeledList(texts);

    selector.wrapperResult.innerHTML = "";

    list.forEach((item, i) => {
        if (result.includes(texts[i])) {
            result = result.replace(texts[i], item.label);
        }
    });
    selector.wrapperResult.innerHTML = result;
};

const init = () => {
    selector.button.addEventListener("click", onClickHandler);
    selector.reset.addEventListener("click", onClickReset);
};
init();

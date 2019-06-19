const dishManager = (() => {
    const init = () => {
        console.log("initing...")
        document.getElementById("app-submit").addEventListener("click", _addADish);
        document
            .getElementById("app-text-input")
            .addEventListener("blur", _resetError);
        _initDelete(document.getElementsByClassName("app-delete"));
    };

    /**
     * Looks for the input element(#app-text-input) and add a dish component
     * with input value on the page
     * Print error if the value is empty
     * @param {event} e
     */
    const _addADish = e => {
        e.preventDefault();
        const dishName = document.getElementById("app-text-input").value;
        const dishIng = document.getElementById("app-ingredients-input").value;


        if (dishName && dishIng) {
            const newDish = _createDish(dishName, dishIng);
            document.getElementById("app-output").appendChild(newDish);
            document.getElementById("app-text-input").value = "";
            document.getElementById("app-ingredients-input").value = "";

        } else {
            _printError();
        }
    };

    /**
     * Returns a dish note node
     */
    const _createDish = (title, ingredients) => {
        // create 2 parts:
        // 1. note body
        // 2. delete handler
        const ingArr = ingredients.split("\n");
        const ingredientNodes = ingArr.map(item => document.createTextNode(item))
        let note = document.createElement("li");
        const titleNode = document.createTextNode(title);
        note.appendChild(titleNode);

        let ingUl = document.createElement("ul");

        ingredientNodes.forEach(node => {
            let ingItem = document.createElement("li");
            ingItem.appendChild(node);
            ingUl.appendChild(ingItem)
        })

        note.appendChild(ingUl);
        note.classList.add("app-output-list");

        let deleteEle = document.createElement("span");
        const deleteNode = document.createTextNode("x");
        deleteEle.appendChild(deleteNode);
        deleteEle.classList.add("app-delete");
        deleteEle.addEventListener("click", _deleteOneDish);

        note.appendChild(deleteEle);
        return note;
    };

    /**
     * @param {obj} dishObjs - the object which contains all the dish elements on the page
     */
    const _initDelete = dishObjs => {
        for (const dish of dishObjs) {
            dish.addEventListener("click", _deleteOneDish);
        }
    };

    /**
     * To be attached on the click on delete element
     */
    _deleteOneDish = e => {
        e.target.parentElement.remove();
    }

    const _printError = () => {
        const errors = document.getElementsByClassName("app-input-error");
        for (const err of errors) {
            err.classList.add("active");
        }
    };

    const _resetError = () => {
        const errors = document.getElementsByClassName("app-input-error");
        for (const err of errors) {
            err.classList.remove("active");
        }
    };

    return {
        init: init
    };
})();

dishManager.init();

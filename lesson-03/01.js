const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(items => items === "черный" || items === "красный" || items === "желтый").join("-")
}

console.log(createColorString());
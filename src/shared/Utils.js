export const getCurrentDateAsStr = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today;
};

export const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

//TODO: the colors should be distinct, white should be excluded
export const randomColorArr = (num) => {
    const colors = [];
    while (colors.length < num) {
        colors.push(randomColor());
    }
    return colors;
};
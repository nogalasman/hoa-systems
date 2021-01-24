export const getCurrentDateAsStr = () => {
    return getDateAsStr(null);
};

export const getDateAsStr = (date) => {
    var d = date ? new Date(date) : new Date();
    d = new Date(d.getTime() - 3000000);
    var date_format_str = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length === 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length === 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length === 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + ((parseInt(d.getMinutes() / 5) * 5).toString().length === 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) + ":00";
    return date_format_str;
    //2015-03-31 13:35:00

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
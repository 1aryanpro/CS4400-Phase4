export function snakeToTitleCase(str) {
    if (str == undefined) return '';
    return str
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
}

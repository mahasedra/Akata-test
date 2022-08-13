function isValidHtml(html) {
    var htmlRegex = new RegExp("<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)</\1>");
    return htmlRegex.test(html);
}
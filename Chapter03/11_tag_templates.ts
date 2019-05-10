namespace tag_template {

    let name = "remo";
    let surname = "jansen";
    let html1 = `<h1>${name} ${surname}</h1>`;

    function htmlEscape(literals: TemplateStringsArray, ...placeholders: any[]) {
        let result = "";
        for (let i = 0; i < placeholders.length; i++) {
            result += literals[i];
            result += placeholders[i]
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/"/g, "&#39;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
        result += literals[literals.length - 1];
        return result;
    }

    let html2 = htmlEscape `<h1>${name} ${surname}</h1>`;

}

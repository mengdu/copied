export default function copied(text, cb) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => cb && cb()).catch(cb);
    }
    else {
        const input = document.createElement('textarea');
        input.style.display = 'none';
        input.value = text;
        document.body.appendChild(input);
        input.select();
        try {
            document.execCommand('copy', true);
            document.body.removeChild(input);
            cb && cb();
        }
        catch (err) {
            cb && cb(err);
        }
    }
}
//# sourceMappingURL=main.js.map
export function alignTexts(texts, options) {
    return texts.map((text) => alignLines(splitLines(text, options.width), options));
}
function splitLines(text, width) {
    const lines = [];
    let line = "";
    for (const word of text.split(" ")) {
        if (line === "") {
            line = word;
        }
        else if (line.length + word.length < width) {
            line += ` ${word}`;
        }
        else {
            lines.push(line);
            line = word;
        }
    }
    lines.push(line);
    return lines;
}
const aligners = {
    left: (line, width) => line.padEnd(width),
    middle: (line, width) => {
        const remainingSpaces = width - line.length;
        return remainingSpaces
            ? [
                " ".repeat(Math.floor(remainingSpaces / 2)),
                line,
                " ".repeat(Math.ceil(remainingSpaces / 2)),
            ].join("")
            : line;
    },
    right: (line, width) => line.padStart(width),
};
function alignLines(lines, { align = "left", width }) {
    return lines.map((line) => aligners[align](line, width));
}

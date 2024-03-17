export function alignTexts(texts, options) {
    const alignedTextsLines = [];
    for (const text of texts) {
        const lines = splitLines(text, options.width);
        const aligned = alignLines(lines, options);
        alignedTextsLines.push(aligned);
    }
    return alignedTextsLines;
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
function alignLines(lines, { align = "left", width }) {
    const aligned = [];
    for (const line of lines) {
        const remainingSpaces = width - line.length;
        let newLine = line;
        if (remainingSpaces) {
            switch (align) {
                case "left":
                    for (let i = 0; i < remainingSpaces; i += 1) {
                        newLine += " ";
                    }
                    break;
                case "middle":
                    for (let i = 0; i < Math.ceil(remainingSpaces / 2); i += 1) {
                        newLine += " ";
                    }
                    for (let i = 0; i < Math.floor(remainingSpaces / 2); i += 1) {
                        newLine = " " + newLine;
                    }
                    break;
                case "right":
                    for (let i = 0; i < remainingSpaces; i += 1) {
                        newLine = " " + newLine;
                    }
                    break;
            }
        }
        aligned.push(newLine);
    }
    return aligned;
}

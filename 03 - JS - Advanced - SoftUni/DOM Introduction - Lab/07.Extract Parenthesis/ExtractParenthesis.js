function extract(content) {
    const target = document.getElementById(content);

    return target.innerHTML
        .match(/\((.+?)\)/gm)
        .join("; ")
}
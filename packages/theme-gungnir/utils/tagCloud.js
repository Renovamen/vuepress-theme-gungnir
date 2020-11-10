export function tagCloud (tagList) {
    const tagOpts = {
        color: {start: '#a5a5e4', end: '#4388c4'},
    }

    if (tagList.length == 0) return []
    
    tagList.sort((prev, next) => {
        return (next.pages.length - prev.pages.length)
    })
    const lowest = tagList[tagList.length - 1].pages.length
    const highest = tagList[0].pages.length
    const range = Math.max(highest - lowest, 1)

    const colorIncr = colorIncrement (tagOpts.color, range);
  
    for (let item of tagList) {
        var weighting = item.pages.length - lowest
        item.tagColor = tagColor(tagOpts.color, colorIncr, weighting)
    }
    return tagList
}

// convert hex to an RGB array
function toRGB (code) {
    if (code.length == 4) {
        code = /\w+/.exec(code)
        for(let i in code) code[i] = code[i] + code[i]
        code = code.join('');
    }
    var hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
    return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
}

// convert an RGB array to hex
function toHex (ary) {
    for(let i in ary) {
        ary[i] =  ary[i].toString(16);
        ary[i] = (ary[i].length == 1) ? "0" + ary[i] : ary[i];
    }
    return '#' + ary.join('')
}

function colorIncrement (color, range) {
    const rgbStartColor = toRGB(color.start)
    var increColor = toRGB(color.end)
    for(let i in increColor) {
        increColor[i] = (increColor[i] - rgbStartColor[i]) / range
    }
    return increColor
}

function tagColor (color, increment, weighting) {
    var rgbTagColor = toRGB(color.start)

    for(let i in rgbTagColor) {
        let ref = Math.round(rgbTagColor[i] + (increment[i] * weighting))
        if (ref > 255) ref = 255
        else if (ref < 0) ref = 0
        rgbTagColor[i] = ref
    }
    return toHex(rgbTagColor)
}
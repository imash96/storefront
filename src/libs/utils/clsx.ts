type ClassValue = ClassValue[] | Record<string, any> | string | number | bigint | null | boolean | undefined;

function toVal(mix: ClassValue) {
    var k, y, str = '';

    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            var len = mix.length;
            for (k = 0; k < len; k++) {
                if (mix[k]) {
                    if (y = toVal(mix[k])) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        } else {
            for (y in mix) {
                if (mix && mix[y]) {
                    str && (str += ' ');
                    str += y;
                }
            }
        }
    }

    return str;
}

export default function clsx(...inputs: ClassValue[]) {
    let tmp, x, str = ''
    for (let i = 0; i < inputs.length; i++) {
        if (tmp = inputs[i]) {
            if (x = toVal(tmp)) {
                str && (str += ' ');
                str += x
            }
        }
    }
    return str;
}
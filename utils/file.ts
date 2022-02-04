const mimeTypeRegexp =
    /^(application|audio|example|image|message|model|multipart|text|video)\/[a-z0-9.+*-]+$/;
const extRegexp = /\.[a-zA-Z0-9]*$/;

export const handleOnError = (
    error: { code: number; message: string },
    file: any,
    onError: (
        e: {
            code: number;
            message: string;
        },
        file: any
    ) => void
) => {
    onError(error, file);
};

export const fileExtension = (file: any) => {
    let extensionSplit = file.name.split('.');
    if (extensionSplit.length > 1) {
        return extensionSplit[extensionSplit.length - 1];
    } else {
        return 'none';
    }
};
export const fileSizeReadable = (size: number) => {
    if (size >= 1000000000) {
        return Math.ceil(size / 1000000000) + 'GB';
    } else if (size >= 1000000) {
        return Math.ceil(size / 1000000) + 'MB';
    } else if (size >= 1000) {
        return Math.ceil(size / 1000) + 'kB';
    } else {
        return Math.ceil(size) + 'B';
    }
};

export const mimeTypeLeft = (mime: string) => {
    return mime.split('/')[0];
};

export const mimeTypeRight = (mime: string) => {
    return mime.split('/')[1];
};
export const fileTypeAcceptable = (
    file: any,
    accepts: Array<string>,
    onError: (
        e: {
            code: number;
            message: string;
        },
        file: any
    ) => void
) => {
    if (!accepts) {
        return true;
    }

    const result = accepts.some((accept) => {
        if (file.type && accept.match(mimeTypeRegexp)) {
            let typeLeft = mimeTypeLeft(file.type);
            let typeRight = mimeTypeRight(file.type);
            let acceptLeft = accept.split('/')[0];
            let acceptRight = accept.split('/')[1];
            if (acceptLeft && acceptRight) {
                if (acceptLeft === typeLeft && acceptRight === '*') {
                    return true;
                }
                if (acceptLeft === typeLeft && acceptRight === typeRight) {
                    return true;
                }
            }
        } else if (file.extension && accept.match(extRegexp)) {
            const ext = accept.substr(1);
            return file.extension.toLowerCase() === ext.toLowerCase();
        }
        return false;
    });

    if (!result) {
        handleOnError(
            {
                code: 1,
                message: file.name + ' is not a valid file type'
            },
            file,
            onError
        );
    }

    return result;
};

export const fileSizeAcceptable = (
    file: any,
    maxFileSize: number,
    minFileSize: number,
    onError: (
        e: {
            code: number;
            message: string;
        },
        file: any
    ) => void
) => {
    if (file.size > maxFileSize) {
        handleOnError(
            {
                code: 2,
                message: file.name + ' is too large'
            },
            file,
            onError
        );
        return false;
    } else if (file.size < minFileSize) {
        handleOnError(
            {
                code: 3,
                message: file.name + ' is too small'
            },
            file,
            onError
        );
        return false;
    } else {
        return true;
    }
};

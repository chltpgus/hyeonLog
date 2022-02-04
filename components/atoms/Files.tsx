import React, { useRef, useState, useEffect } from 'react'

import GlobalStyled from 'styles/GlobalStyled';
import {
    handleOnError,
    fileExtension,
    fileSizeReadable,
    mimeTypeLeft,
    fileTypeAcceptable,
    fileSizeAcceptable,
} from 'utils/file';

export interface FilesInfoProps {
    files: Array<any>;
    [key: string]: any;
}

export interface FilesProps {
    children: React.ReactNode;
    onChange: (files: Array<any>, e: any) => void;
    onError: (e: {
        code: number; message: string;
    }, file: any) => void;
    accepts: Array<string>;
    multiple: boolean;
    maxFiles: number;
    maxFileSize: number;
    minFileSize: number;
    clickable: boolean;
    name: string;
    style?: {
        [key: string]: any;
    };
    removeName?: string | number;
};


const Files = (props: FilesProps) => {

    const {
        children,
        onChange,
        onError,
        accepts,
        multiple,
        maxFiles,
        maxFileSize,
        minFileSize,
        clickable,
        name,
        style,
        removeName,
    } = props;

    const dropZone = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const [saveFiles, setSaveFiles] = useState<FilesInfoProps>();
    const [id, setId] = useState<number>(1);

    useEffect(() => {
        if (saveFiles?.files !== undefined) {
            const infos = saveFiles.files.filter((res: any) => {
                return res?.name !== removeName;
            });
            const selectInfo = saveFiles.files.find((res: any) => {
                return res?.name === removeName;
            });
            if (removeName !== null && saveFiles?.files !== undefined && selectInfo !== undefined) {
                setSaveFiles({
                    ...saveFiles,
                    files: [
                        ...infos
                    ],
                })
            }
        }
    }, [
        removeName,
        saveFiles,
    ]);


    const onDrop = (event: any) => {
        event.preventDefault();

        let filesAdded = event.dataTransfer ? event.dataTransfer.files : event.target.files

        if (multiple === false && filesAdded.length > 1) {
            filesAdded = [filesAdded[0]]
        }

        let files: any = [] || null;
        for (let i = 0; i < filesAdded.length; i++) {
            let file = filesAdded[i]

            file.id = 'files-' + id + i;

            file.extension = fileExtension(file)

            file.sizeReadable = fileSizeReadable(file.size)

            if (file.type && mimeTypeLeft(file.type) === 'image') {
                file.preview = {
                    type: 'image',
                    url: window.URL.createObjectURL(file)
                }
            } else {
                file.preview = {
                    type: 'file'
                }
            }

            if (saveFiles?.files?.length + files.length >= maxFiles) {
                handleOnError({
                    code: 4,
                    message: 'maximum file count reached'
                }, file, onError)
                break
            }

            if (fileTypeAcceptable(file, accepts, onError) && fileSizeAcceptable(file, maxFileSize, minFileSize, onError)) {
                files.push(file)
            }
        }
        setId(id + filesAdded.length);
        setSaveFiles({
            files: multiple === false
                ? files
                : saveFiles?.files
                    ? [...saveFiles?.files, ...files]
                    : [...files]
        });
        onChange(
            multiple === false
                ? files
                : saveFiles?.files
                    ? [...saveFiles?.files, ...files]
                    : [...files],
            name,
        );
    }

    const onDragOver = (event: React.DragEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const onDragEnter = (event: React.DragEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const openFileChooser = () => {
        inputRef.current.value = null;
        inputRef.current.click();
    }

    const inputAttributes = {
        type: 'file',
        accept: accepts ? accepts.join() : '',
        multiple: multiple,
        name: name,
        style: { display: 'none' },
        onChange: onDrop,
        ref: inputRef,
    }

    return (
        <GlobalStyled.Row>
            <input
                {...inputAttributes}
            />
            <GlobalStyled.Row
                onClick={
                    clickable === true
                        ? openFileChooser
                        : () => { }
                }
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragEnter={onDragEnter}
                ref={dropZone}
                style={style}
            >
                {children}
            </GlobalStyled.Row>
        </GlobalStyled.Row>
    );
};


Files.defaultProps = {
    onChange: function (files: any) {
        console.log(files)
    },
    onError: function (error: {
        code: number;
        message: string;
    }, file: any) {
        console.log('error code ' + error.code + ': ' + error.message)
    },
    accepts: null,
    multiple: true,
    maxFiles: Infinity,
    maxFileSize: Infinity,
    minFileSize: 0,
    name: 'file',
    clickable: true
}

export default Files
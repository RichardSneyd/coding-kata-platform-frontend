export interface IFile {
    name: string;  // The original name of the file
    type: string;  // The MIME type of the file, like 'image/jpeg', 'application/pdf', etc.
    size: number;  // The size of the file in bytes
    path: string;  // The path where the file is stored
}
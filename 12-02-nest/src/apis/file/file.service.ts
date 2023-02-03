import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class FileService {
  async upload(files: FileUpload[]) {
    const fileResults = await Promise.all(files);
    console.log(fileResults);
    return 'url';
  }
}

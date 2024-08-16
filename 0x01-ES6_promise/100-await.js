import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const create = await createUser();
    return {
      photo: upload,
      user: create,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

import ThemeReducer from './ThemeReducer';
import { combineReducers } from 'redux';
import PhotosListReducer from '../reducers/PhotosListReducer';
import UploadedPhotosReducer from '../reducers/UploadedPhotosReducer';

const rootReducer = combineReducers({
  ThemeReducer,
  photos: PhotosListReducer,
  uploadedPhotos: UploadedPhotosReducer,
});

export default rootReducer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../utils/CloudinaryService';
import { photosUploaded } from '../actions';
import Photo from './Photo';
import FacebookImage from './FacebookImage';
import Introduction from './Introduction';
import { CloudinaryContext } from 'cloudinary-react';
import { Button } from 'react-responsive-button';
import '../assets/css/photo-list.css';
import uploadLogo from '../assets/images/upload.png';

class PhotoList extends Component {
  render() {
    return (
      <div className="photoList">
        <FacebookImage
          publicId1="FPE4EnvironmentCommunities"
          publicId2="pbest.org"
        />
        <Introduction />
        <h1>Your Photos</h1>
        <div className="actions">
          <Button
            style={{ background: 'blue' }}
            className="upload_link"
            onClick={this.uploadImageWithCloudinary.bind(this)}
          >
            <img src={uploadLogo} alt="Upload" />
          </Button>
        </div>
        <div className="photos">
          {this.props.photos.length === 0 && <p>No photos were added yet.</p>}
          {this.props.photos.map((photo) => {
            return <Photo key={photo.public_id} publicId={photo.public_id} />;
          })}
        </div>
      </div>
    );
  }

  uploadImageWithCloudinary() {
    const uploadOptions = { tags: ['myphotoalbum'], ...this.context };
    console.log('options: ', uploadOptions.cloudName);
    console.log('options: ', openUploadWidget(uploadOptions));

    openUploadWidget(uploadOptions, (error, result) => {
      if (!error) {
        const { event, info } = result;
        if (event === 'success') {
          this.props.onPhotosUploaded([info]);
        }
      } else {
        console.log(error);
      }
    });
  }
}

PhotoList.contextType = CloudinaryContext.contextType;

PhotoList.propTypes = {
  photos: PropTypes.array,
  onPhotosUploaded: PropTypes.func,
};

const PhotoListContainer = connect((state) => ({ photos: state.photos }), {
  onPhotosUploaded: photosUploaded,
})(PhotoList);

export default PhotoListContainer;

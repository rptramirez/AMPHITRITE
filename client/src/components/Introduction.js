import React from 'react';
import { Video, Transformation } from 'cloudinary-react';

const Introduction = () => (
  <div>
    <h1 className="welcome">Image Uploader</h1>

    <div className="introducing-cloudinary">
      <p></p>
      <p>
        All of the images you see here are transformed and served by Cloudinary.
        For instance, the logo and the poster frame. They are both generated
        on-the-fly using Cloudinary functions
      </p>
    </div>
    <hr />
  </div>
);

export default Introduction;

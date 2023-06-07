import React, { useState, useRef } from 'react';
import styles from './InstanceWindow.module.css';
import { useQuery, useMutation } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';
import { useRouter } from 'next/router';
import { useAuth } from '../context/Auth.context';

function InstanceWindow() {
  // State variables, setting to empty, null or false
  // Used to store values and help to display portions of page
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showHideButton, setShowHideButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const routingURLRef = useRef('/');

  // Router used to go to different pages when needed
  const router = useRouter();

  const { user } = useAuth();

  // Query to load posts from database
  const {
    isLoading: isLoadingPosts,
    error: errorPosts,
    data: dataPosts,
  } = useQuery({
    queryKey: ['Posts}'],
    queryFn: () => gql.GetPosts(),
  });

  // This is the mutation to actually create the posts
  const createPost = async (data) => {
    try {
      await gql.CreatePost({
        title: data.title,
        description: data.description,
        authorId: user.id,
      });

      // To catch any errors when creating a post
    } catch (error) {
      const errorMessage = error.message;

      if (errorMessage.includes('Invalid `prisma.post.create()` invocation:')) {
        /* setErrorMessage('Please Login to Post Your Hobby'); */
        // routingURLRef.current = '/login';
        routingURLRef.current = '/';
      } else if (
        errorMessage.includes(
          'Cannot return null for non-nullable field Post.author.'
        )
      ) {
        console.log('Image Posted');
        routingURLRef.current = '/';
      } else {
        console.error('Create Post Error:', error);
        routingURLRef.current = '/';
      }
    }
  };

  // Mutation to create a post, then will route to home page if
  // post succesful, or login screen if not logged in
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      router.push(routingURLRef.current);
    },
  });

  const startEditingHandler = () => {
    setShowDescription(true);
    setShowHideButton(true);
  };

  // When the close description button is clicked, it will make both the
  // button and box disappear, while also reseting the text in the box to ''
  const stopEditingHandler = () => {
    setShowDescription(false);
    setShowHideButton(false);
    setDescription('');
  };

  // Sets the description variable to whatever was in the box
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const compressImage = (imageDataUrl, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        let width = image.width;
        let height = image.height;

        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = (maxHeight / height) * width;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        context.drawImage(image, 0, 0, width, height);

        const compressedImageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
        resolve(compressedImageDataUrl);
      };

      image.src = imageDataUrl;
    });
  };

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();

    reader.onloadend = async () => {
      const imageDataUrl = reader.result;
      const compressedImageDataUrl = await compressImage(
        imageDataUrl,
        800,
        600
      );
      setTitle(compressedImageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  // For when the actual post button is clicked
  // Has different scenarios that will produce errors for
  // user to see
  const postHandler = () => {
    if (!selectedFile) {
      setErrorMessage('Please Select an Image.');
    } else {
      mutation.mutate({ title, description });
    }
  };

  // Implementing all parts together.
  return (
    <div className={styles.Instance_backdrop}>
      {/* <h1 className={styles.Logo}>Post an Instance here!</h1> */}
      <div className={styles.Instance}>
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className={styles.Instance_selected_image}
          />
        )}

        <label htmlFor="fileInput" className={styles.Instance_fileLabel}>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            className={styles.Instance_file_input}
          />
        </label>

        {showHideButton && (
          <button
            type="button"
            onClick={stopEditingHandler}
            className={styles.Instance_hide_desc}
          >
            X
          </button>
        )}

        <div className={styles.instance_descriptionContainer}>
          {showDescription && (
            <textarea
              type="description"
              placeholder="Enter a description"
              value={description}
              onChange={descriptionChangeHandler}
              className={styles.Instance_description}
            />
          )}

          <div className={styles.instance_buttonsContainer}>
            <button
              type="button"
              onClick={startEditingHandler}
              className={styles.Instance_add_desc}
            >
              Add Description
            </button>

            <button
              type="button"
              onClick={postHandler}
              className={styles.Instance_button_post}
            >
              Post
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className={styles.Instance_error}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default InstanceWindow;

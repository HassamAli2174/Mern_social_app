import React, { useState } from 'react';
import { CardBody } from 'reactstrap';
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../../redux/themeSlice';
import '../blog_mode/blog_mode.css'; // Ensure the CSS is imported

const BlogMode = () => {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  const [sunAnimation, setSunAnimation] = useState('');
  const [moonAnimation, setMoonAnimation] = useState('');

  const handleToggleTheme = () => {
    // Determine which animation to trigger based on the current theme
    if (theme === 'light') {
      setSunAnimation('icon-animate-right');
      setMoonAnimation('');
    } else {
      setMoonAnimation('icon-animate-left');
      setSunAnimation('');
    }

    // Dispatch the toggle after a slight delay to allow animation to complete
    setTimeout(() => {
      dispatch(themeActions.toggleTheme());
      setSunAnimation('');
      setMoonAnimation('');
    }, 500); // Corresponds with the duration of the animation
  };

  return (
    <CardBody className='blog_mode pl-2 pr-2 rounded-4 d-flex justify-content-between w-100'>
      <AiOutlineSun color='yellow' size={32} 
        className={sunAnimation}
        onClick={handleToggleTheme} 
        style={{ visibility: theme === 'dark' ? 'hidden' : 'visible' }}
      />
      <AiOutlineMoon color='white' size={32} 
        className={moonAnimation}
        onClick={handleToggleTheme} 
        style={{ visibility: theme === 'light' ? 'hidden' : 'visible' }}
      />
    </CardBody>
  );
};

export default BlogMode;
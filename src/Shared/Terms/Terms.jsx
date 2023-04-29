import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      Terms and Conditions
      <h1 className='text-error'>
        Go back to <Link to={'/register'} className='link'>Register Page</Link>
      </h1>
    </div>
  );
};

export default Terms;
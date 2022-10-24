import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

const Loading = () => {
  return (
    <div className='Loader'>
      <Spin size='large' />
    </div>
  );
};

export default Loading;

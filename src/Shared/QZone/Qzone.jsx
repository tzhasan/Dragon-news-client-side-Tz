import React from 'react';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'

const Qzone = () => {
  return (
    <div className='bg-slate-200 p-2 rounded-md'>
      <h4 className='text-2xl font-bold'>Qzone</h4>
      <div>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
      
    </div>
  );
};

export default Qzone;
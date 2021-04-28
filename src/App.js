import React, { useState } from 'react';

const App = () => {
  let getTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(getTime);

  const updateTime = () => {
    getTime = new Date().toLocaleTimeString();
    setCtime(getTime);
  }

  setInterval(updateTime, 1000);

  return (
    <>
      <h1>The Time is now (bdt) [gmt - 6+]</h1>
      <h1>{ctime}</h1>
    </>
  )
}

export default App;


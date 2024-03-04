import React from 'react';

function ButtonGroup() {
  return (
    <div className="buttons">
      <button className="button">
        <a href='/itholic/devjam' style={{textDecoration:'none', color:'#EFEFEF'}}>
          Register for devjam
        </a>
      </button>
      <button className="button">
        <a href='/itholic/cp' style={{textDecoration:'none', color:'#EFEFEF'}}>
          Register for cp
        </a>
      </button>
    </div>
  );
}

export default ButtonGroup;

import React from 'react';

const withClassFunc = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClassFunc;
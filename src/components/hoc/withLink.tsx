import React from 'react';
import { Link } from 'react-router-dom';

const withLink = (WrappedComponent: React.FunctionComponent) => (props: any) => {
  const newProps = {
    ...props,
    video: {
      ...props.video,
      title: (
        <Link to={{ pathname: `/${props.video.id}` }}>
          {props.video.title}
        </Link>
      )
    }
  }

  return <WrappedComponent {...newProps} />;
}

export default withLink;
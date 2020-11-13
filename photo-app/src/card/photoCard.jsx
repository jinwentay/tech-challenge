import React from 'react';
import { Flex, Text, AspectImage } from 'theme-ui';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Title = styled(Text)`
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #DFC8B6;
    background-color: white;
  }
  height: 40px;
  width: 100%;
  text-align: center;
  padding: 10px 5px;
  border: 1px solid white;
`

const PhotoCard = (props) => {
  const { title, url } = props;
  return (
    <Flex
      key={title}
      sx={{
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <AspectImage ratio={1} src={url}/>
      <Title mt="auto" variant="lb.md" sx={{ fontFamily: 'Cookie', backgroundColor: 'secondary' }}>{title}</Title>
    </Flex>
  )
}

PhotoCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  width: PropTypes.number,
}

export default PhotoCard;
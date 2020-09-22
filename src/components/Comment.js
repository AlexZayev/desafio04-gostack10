import React from 'react';

function Comment({comment}) {
  return (
    <>
    <img src={comment.author.avatar}/>
    <h2>{comment.author.name}</h2>    
    <p>{comment.content}</p>
    </>
  )
}

export default Comment;
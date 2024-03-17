import React from 'react';
import CommentList from './CommentList';

const commentsData = [
    {
        name: 'Sanu',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
        replies: []
    },
    {
        name: 'Sanu',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
        replies: [
            {
                name: 'Sanu',
                text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
                replies: [
                    {
                        name: 'Sanu',
                        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
                        replies: [
                            {
                                name: 'Sanu',
                                text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Sanu',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
        replies: [
            {
                name: 'Sanu',
                text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
                replies: [
                    {
                        name: 'Sanu',
                        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Sanu',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
        replies: []
    },
    {
        name: 'Sanu',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem',
        replies: []
    }
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={commentsData}/>
    </div>
  );
}


export default CommentsContainer
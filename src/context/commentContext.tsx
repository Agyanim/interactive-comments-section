import React, { createContext, useContext,useReducer } from "react";
import { actionType, commentReducer, initialState } from "./commentReducer";

// type CreateCountextType = CommentContextType | undefined;

type ContextProvideProps = {
  children: React.ReactNode;
};

// Create the comment context
const CommentContext = createContext(initialState);


// Create a custom hook to use the comment context
export const useCommentContext=(): Initiastate=> {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within a CommentProvider");
  }
  return context;
}


// Create a CommentProvider component to wrap your app
export const CommentContextProvider=({ children }: ContextProvideProps) =>{
const [state,dispatch]=useReducer(commentReducer,initialState)

const onComment=(comment:myComment)=>{
dispatch({type:actionType.ON_COMMENT, payload:comment})
}
const toggleReply=()=>{
  dispatch({
    type: actionType.TOGGLE_ISREPLYING,
    payload: undefined
  })
}

const getReplyId=(id?:string|undefined)=>{
  dispatch(
    {type:actionType.GET_REPLY_ID, payload:id}
  )
}

const increaseVote=()=>{
  {type:actionType.INCREASE_VOTE}
}
const decreaseVote=()=>{
  {type:actionType.DECREASE_VOTE}
}
  // Add any other state or functions related to comments

  const value={
    vote:state.vote,
    comment:state.comment,
    isEditing:state.isEditing,
    isReplying:state.isReplying,
    onComment,
    toggleReply,
    replyId:state.replyId,
    getReplyId,
    increaseVote,
    decreaseVote
  }
  return (
    <CommentContext.Provider
      value={value}
    >
      {children}
    </CommentContext.Provider>
  );
}

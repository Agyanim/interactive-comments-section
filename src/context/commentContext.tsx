import React, { createContext, useContext,useReducer, useState } from "react";
import { commentReducer, initialState } from "./commentReducer";

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
  // // const [comments, setComments] = useState(dummyData);
  // const [isReplying, setIsReplying] = useState(false);

  // Add any other state or functions related to comments

  const value={
    vote:state.vote,
    comment:state.comment,
    isEditing:state.isEditing,
    isReplying:state.isReplying
  }
  return (
    <CommentContext.Provider
      value={value}
    >
      {children}
    </CommentContext.Provider>
  );
}

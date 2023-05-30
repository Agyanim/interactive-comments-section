import React, { createContext, useContext, useState } from "react";

// Define the type for comment context
type CommentContextType = {
  comments: Comments;
  setComments: React.Dispatch<React.SetStateAction<Comments>>;
  isReplying: boolean;
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
};
type CreateCountextType = CommentContextType | undefined;

type ContextProvideProps = {
  children: React.ReactNode;
};

// Create the comment context
const CommentContext = createContext<CreateCountextType>(undefined);

// Create a custom hook to use the comment context
export function useCommentContext(): CommentContextType {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within a CommentProvider");
  }
  return context;
}

type Comment = {
  name: string;
};

type Comments = Comment[];

const dummyData: Comments = [
  {
    name: "Gideon",
  },
  {
    name: "Eric",
  },
  {
    name: "Deborah",
  },
];

// Create a CommentProvider component to wrap your app
export function CommentProvider({ children }: ContextProvideProps) {
  const [comments, setComments] = useState(dummyData);
  const [isReplying, setIsReplying] = useState(false);

  // Add any other state or functions related to comments

  return (
    <CommentContext.Provider
      value={{ comments, setComments, isReplying, setIsReplying }}
    >
      {children}
    </CommentContext.Provider>
  );
}

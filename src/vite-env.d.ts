/// <reference types="vite/client" />


interface CurrentUser {
    image: {
      png: string | undefined;
      webp: string | undefined;
    };
    username: string;
  }
  
  interface Reply {
    id: string;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: CurrentUser;
  }
  
  
   interface myComment {
    id: string;
    content: string;
    createdAt: string;
    score: number;
    user: CurrentUser;
    replies: Reply[];
  }
  
  interface Initiastate{
    vote:number;
    isReplying:Boolean;
    isEditing:Boolean;
    comment:myComment[];
    onComment: (comment: myComment) => void
    toggleReply: () => void
    getReplyId:(id:string|undefined) => void
    replyId:string,
    increaseVote:()=>void,
    decreaseVote:()=>void,

}

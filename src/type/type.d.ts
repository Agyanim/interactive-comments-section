interface CurrentUser {
    image: {
      png: string | undefined;
      webp: string | undefined;
    };
    username: string;
  };
  
  interface Reply {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: CurrentUser;
  };
  
//   interface Replies{Reply[]}
  
  interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: CurrentUser;
    replies: Reply[];
  };
  
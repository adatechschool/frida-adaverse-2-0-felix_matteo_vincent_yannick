interface CommentProps {
  id: number;
  userId: string;
  postId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    name?: string | null;
  } | null;
}

interface PostDetail {
  post: {
    id: number;
    title: string;
    content: string;
    userId: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
  };
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  comment: CommentProps | null;
}

interface Category {
  id: number;
  title: string;
}

interface PostToModify {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CommentRow {
  comment: CommentProps;
  user?: {
    id: string;
    name?: string | null;
  } | null;
}

export interface Props {
  postDetail: PostDetail;
  comments: CommentRow[];
  postId: number;
  categories: Category[];
  postToModify: PostToModify;
  isActive: boolean
}

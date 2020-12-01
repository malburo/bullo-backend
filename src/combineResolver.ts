import boardResolvers from "./modules/Board/board.resolvers";
import cardResolvers from "./modules/Card/card.resolvers";
import commentResolvers from "./modules/Comment/comment.resolvers";
import listResolvers from "./modules/List/list.resolvers";
import userResolvers from "./modules/User/user.resolvers";
import labelResolvers from "./modules/Label/label.resolvers";

export default [
  userResolvers,
  boardResolvers,
  listResolvers,
  cardResolvers,
  commentResolvers,
  labelResolvers,
];

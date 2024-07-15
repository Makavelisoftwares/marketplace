
export const LikesFollow = ({ post }) => {
  return (
    <div>
      <div className="text-sm font-bold border-b border-zinc-300">
        Post Analytics
      </div>
      <div className="grid my-2 grid-cols-2 gap-2">
        <div className="col-span-1 flex items-center space-x-2 ">
          <div>Total Likes</div>
          <span className="flex items-center font-bold">{post?.Likes.length}</span>
        </div>
        <div className="col-span-1 flex items-center space-x-2 ">
          <div>Total views</div>
          <span className="flex items-center font-bold">{post?.Views.length}</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { BackButton } from "./_components/back-button";
import { PostContent } from "./_components/post-content";

function PostIdPage({ params }) {
  const postId = params.postId;

  return (
    <div>
      <div className="mb-3">
        <BackButton />
      </div>

      <div>
        <PostContent postId={postId} />
      </div>
    </div>
  );
}

export default PostIdPage;

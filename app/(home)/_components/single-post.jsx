import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { getPost } from "@/utils/getPosts";
import { UserPlus } from "lucide-react";

export const SinglePost = async () => {
  const { posts } = await getPost();

  return (
    <div className="space-y-2">
      {posts.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <div>{item?.user?.name}</div>
                <div></div>
              </div>
              <div>
                <Button variant="ghost" className="text-sky-900 space-x-2" size="sm">
                  <UserPlus />
                  <span>Follow</span>
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SimpleCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Title</CardTitle>
      </CardHeader>
      <CardContent>
        <div>20</div>
      </CardContent>
    </Card>
  );
};

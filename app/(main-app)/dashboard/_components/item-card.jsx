import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart } from "lucide-react";

export const ItemCard = ({ title, description, today, total }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="text-2xl font-bold">{today}</div>
        <div className="text-sm flex items-center space-x-2 text-zinc-500">
            <div>{total}</div>
            <LineChart className="text-emerald-500"/>
        </div>
      </CardContent>
    </Card>
  );
};

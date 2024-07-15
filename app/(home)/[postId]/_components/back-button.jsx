import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export const BackButton = () => {
  return (
    <Button asChild variant="ghost" size="sm">
      <Link href="/" className="flex items-center space-x-2">
        <ArrowLeftCircle />
        <span>Back</span>
      </Link>
    </Button>
  );
};

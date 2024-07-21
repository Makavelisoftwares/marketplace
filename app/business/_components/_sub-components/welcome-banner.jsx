import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const WelcomeBanner = () => {
  return (
    <Alert className="w-full bg-rose-300/30 text-rose-600">
      <AlertTitle className="font-bold text-sm">Congratulations 🎉 your business is now ready;</AlertTitle>
      <AlertDescription className="text-xs">
        complete your setup and start tracking your business stocks.Take the steps to complete the setup
      </AlertDescription>
    </Alert>
  );
};

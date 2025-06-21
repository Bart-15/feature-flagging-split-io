/* eslint-disable max-lines-per-function */
import { useSplitTreatments } from '@splitsoftware/splitio-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoanForm = () => {
  const { treatments, isReady } = useSplitTreatments({
    names: ['loan_now_button'],
  });

  const loanButtonEnabled = treatments?.loan_now_button.treatment === 'on';

  if (!isReady) return <p className="text-2xl">Loading feature flags...</p>;

  const actionButton = loanButtonEnabled ? (
    <Button disabled>Unavailable</Button>
  ) : (
    <Button type="submit" onClick={() => alert('Yay! 🎉')}>
      Loan now
    </Button>
  );

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-1xl text-left font-bold">
          Start a loan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="loanName">Loan name</Label>
              </div>
              <Input id="loanName" type="text" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="loanAmount">Loan amount</Label>
              </div>
              <Input id="loanAmount" type="number" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-row justify-between gap-2">
        <Button variant="ghost">Cancel</Button>
        {actionButton}
      </CardFooter>
    </Card>
  );
};

export default LoanForm;

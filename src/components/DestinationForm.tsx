import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DestinationForm() {
  // TODO: Define the city and country validation rules with Zod.
  // TODO: Connect the validation schema to React Hook Form.
  // TODO: Use a TanStack Query mutation to submit the form to Xano.
  // TODO: Refresh the destination list after a destination is added successfully.

  return (
    <Card>
      <CardHeader><CardTitle>Add a destination</CardTitle></CardHeader>
      <CardContent>
        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-8 text-center">
          <p className="text-sm text-muted-foreground">Destination form</p>
        </div>
      </CardContent>
    </Card>
  );
}

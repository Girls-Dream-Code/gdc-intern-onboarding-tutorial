import { DestinationForm } from "@/components/DestinationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gdcLogo from "@/assets/gdc-logo.png";

export function TravelWishlist() {
  // TODO: Use useQuery to retrieve destinations from Xano.
  // TODO: Add loading, error, empty, and success states for the destination list.

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="space-y-3 text-center">
          <img
            src={gdcLogo}
            alt="Girls Dream Code — Aspire To Be Great and Innovate!"
            className="mx-auto h-auto w-full max-w-xl"
          />
          <h1 className="pt-2 text-4xl font-bold tracking-tight sm:text-5xl">Travel Wishlist</h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Add somewhere you'd love to visit! This page will save your destinations and display them here.
          </p>
        </header>

        <DestinationForm />

        <Card>
          <CardHeader><CardTitle>My Destinations</CardTitle></CardHeader>
          <CardContent>
            <div className="rounded-lg border border-dashed border-border bg-muted/50 p-8 text-center">
              <p className="text-sm text-muted-foreground">Display destinations here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

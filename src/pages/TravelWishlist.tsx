// import { useQuery } from "@tanstack/react-query";

import { DestinationForm } from "@/components/destination/form/DestinationForm";
// import { DestinationList } from "@/components/destination/list/DestinationList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gdcLogo from "@/assets/gdc-logo.png";
// import { getDestinations } from "@/services/destinationService";
// import { destinationQueryKey } from "@/lib/queryKeys";
import styles from "./TravelWishlist.module.css";

export function TravelWishlist() {
  /*
  const {
    data: destinations = [],
    error,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: destinationQueryKey,
    queryFn: getDestinations,
  });
  */

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src={gdcLogo}
            alt="Girls Dream Code - Aspire To Be Great and Innovate!"
            className={styles.logo}
          />

          <h1 className={styles.title}>
            Travel Wishlist
          </h1>

          <p className={styles.description}>
            Add somewhere you'd love to visit! This page will save your
            destinations and display them here.
          </p>
        </header>

        <DestinationForm />

        {/* TODO: Replace this placeholder with the DestinationList component. */}
        <Card>
          <CardHeader>
            <CardTitle>My Destinations</CardTitle>
          </CardHeader>

          <CardContent>
            <div className={styles.placeholder}>
              <p className={styles.placeholderText}>
                Complete the tutorial steps to display destinations here.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

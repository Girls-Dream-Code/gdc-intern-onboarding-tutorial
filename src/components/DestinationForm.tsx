// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { addDestination } from "@/lib/api";
// import { destinationQueryKey } from "@/lib/queryKeys";
import styles from "./DestinationForm.module.css";

// TODO: Add validation schema for the destination form

export function DestinationForm() {
  /*
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DestinationFormValues>({
    resolver: zodResolver(destinationSchema),
    defaultValues: {
      city: "",
      country: "",
    },
  });

  const addDestinationMutation = useMutation({
    mutationFn: addDestination,
    onSuccess: async () => {
      reset();
      await queryClient.invalidateQueries({
        queryKey: destinationQueryKey,
      });
    },
  });

// TODO: Implement the onSubmit function for the destination form

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a destination</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          className={styles.form}
          // TODO: Implement the onSubmit function for the destination form
          noValidate
        >
          <div className={styles.fieldGroup}>
            <Label htmlFor="city">City</Label>

            <Input
              id="city"
              placeholder="Chicago"
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "city-error" : undefined}
              {...register("city")}
            />

            // TODO: Display validation error for the city field
          </div>

          <div className={styles.fieldGroup}>
            <Label htmlFor="country">Country</Label>

            <Input
              id="country"
              placeholder="United States"
              autoComplete="country-name"
              aria-invalid={Boolean(errors.country)}
              aria-describedby={errors.country ? "country-error" : undefined}
              {...register("country")}
            />

            // TODO: Display validation error for the country field
          </div>

          {addDestinationMutation.error ? (
            <p
              className={styles.submitError}
              role="alert"
            >
              {addDestinationMutation.error.message}
            </p>
          ) : null}

          <Button
            className={styles.submitButton}
            type="submit"
            disabled={addDestinationMutation.isPending}
          >
            {addDestinationMutation.isPending
              ? "Adding destination..."
              : "Add destination"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
  */

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a destination</CardTitle>
      </CardHeader>

      <CardContent>
        <div className={styles.placeholder}>
          <p className={styles.placeholderText}>
            Complete the tutorial steps to build the destination form.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

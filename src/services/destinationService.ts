/*
import type { Destination, NewDestination } from "@/types/destination";

const XANO_BASE_URL = import.meta.env.VITE_XANO_BASE_URL;
const DESTINATION_PATH = import.meta.env.VITE_XANO_DESTINATION_PATH;

function getDestinationUrl() {
  const baseUrl = XANO_BASE_URL?.trim().replace(/\/+$/, "");
  const destinationPath = DESTINATION_PATH?.trim();

  if (!baseUrl || !destinationPath) {
    throw new Error(
      "Add your Xano API base URL and destination path to the .env file, then restart the development server.",
    );
  }

  const normalizedPath = destinationPath.startsWith("/")
    ? destinationPath
    : `/${destinationPath}`;

  return `${baseUrl}${normalizedPath}`;
}

async function getErrorMessage(response: Response) {
  const fallbackMessage = `Request failed with status ${response.status}.`;

  try {
    const responseBody = (await response.json()) as { message?: string };
    return responseBody.message ?? fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}
*/

// TODO: Implement the API functions for fetching and adding destinations.

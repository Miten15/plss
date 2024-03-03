export type TopTrendy = {
  id: number;
  image: string | null;
  name: string;
  rating: number;
  location: string;
  description: string;
  keyDetails: string;
  architectureDetails: string;
  servicesDetails: string;
  visitingDetails: string;
  startingPrice: number;
};

export type Package = {
  id: number;
  image: string | null;
  listingId: number;
  name: string;
  description: string;
  price: number;
};


// type.ts

export interface PackageModalProps {
  isVisible: boolean;
  closeModal: () => void;
  packageData: Package[];
  // Add onClose prop if it's needed in the PackageModal component
  onClose?: () => void;
}

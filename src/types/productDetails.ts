type ProductDetails = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  image: string;
  reviewCount: number;
  averageRating: string | null;
};

export { type ProductDetails };

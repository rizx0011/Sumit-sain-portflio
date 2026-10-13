export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
}

// Add real client reviews here once received.
// The section automatically shows an honest placeholder when this array is empty.
export const testimonials: Testimonial[] = [];

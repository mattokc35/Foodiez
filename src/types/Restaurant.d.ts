export default interface Restaurant {
  id: number;
  name: string;
  location: string;
  googleRating: number;
  googleURL: string;
  yelpRating: number;
  yelpURL: string;
  tripAdvisorRating?: number;
  overallRating: number;
  tripAdvisorURL?: string;
  recentReviews: string[];
  menu?: string;
}

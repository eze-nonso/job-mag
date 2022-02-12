export type JobParam = {
  description: string,
  location: string,
  slotsAvailable: number,
  percentReady: number,
  deadline: Date,
  jobImage: string
  company: string,
  requirement: string,
  desiredLevel: string,
  desiredScore: number,
  category: 'full time',
  totalApplicants: number
};

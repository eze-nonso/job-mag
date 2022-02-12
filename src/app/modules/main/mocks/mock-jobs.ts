import {JobDetail} from "src/app/modules/main/models/job-detail.model";
import {JobParam} from "src/app/modules/main/models/job-param.type";

let createJob = (obj: JobParam): JobDetail => {
  let newJob = new JobDetail();
  newJob.jobImage = obj.jobImage;
  newJob.location = obj.location;
  newJob.slotsAvailable = obj.slotsAvailable;
  newJob.deadline = obj.deadline;
  newJob.percentReady = obj.percentReady;
  newJob.description = obj.description;
  newJob.company = obj.company;
  newJob.category = obj.category;
  newJob.desiredLevel = obj.desiredLevel;
  newJob.desiredScore = obj.desiredScore;
  newJob.requirement = obj.requirement;
  newJob.totalApplicants = obj.totalApplicants;
  return newJob;
}

export let jobs: JobDetail[] = [];

for (let i = 0; i < 10; i++) {
  jobs.push(createJob({
    description: 'Azure Cloud Security, Automation and Integration Engineer',
    location: 'Oakland, Australia',
    slotsAvailable: 10,
    percentReady: 80,
    deadline: new Date(),
    jobImage: i % 2 === 0 ? 'assets/images/job-image.png' : 'assets/images/aws-logo.png',
    company: 'Microsoft',
    category: 'full time',
    desiredScore: 80,
    desiredLevel: 'L3',
    totalApplicants: 4,
    requirement: 'Design UI for desktop + mobile and build user interaction flows\n' +
      'Own UX writing — how can we use gaming as a familiar concept to introduce crypto to our users?\n' +
      'Integrate web3 products into the existing Medal platform\n' +
      'Define and refine our visual language. Contribute to our design system and collaborate with other product designers.\n' +
      'Conduct user and market research to improve your design decisions\n' +
      'Use insights to build comprehensive user stories, low-fidelity wireframes, and prototypes\n' +
      'Communicate and present your ideas to the entire blockchain team (our team is spread across the globe but lean towards PST timezone for calls)\n' +
      'Work closely with the Product Manager on the roadmap\n' +
      'WHAT WE\'RE LOOKING FOR: Design UI for desktop + mobile and build user interaction flows\n' +
      'Own UX writing — how can we use gaming as a familiar concept to introduce crypto to our users?\n' +
      'Integrate web3 products into the existing Medal platform\n' +
      'Define and refine our visual language. Contribute to our design system and collaborate with other product designers.\n' +
      'Conduct user and market research to improve your design decisions\n' +
      'Use insights to build comprehensive user stories, low-fidelity wireframes, and prototypes\n' +
      'Communicate and present your ideas to the entire blockchain team (our team is spread across the globe but lean towards PST timezone for calls)\n' +
      'Work closely with the Product Manager on the roadmap\n' +
      'WHAT WE\'RE LOOKING FOR: Design UI for desktop + mobile and build user interaction flows\n' +
      'Own UX writing — how can we use gaming as a familiar concept to introduce crypto to our users?\n' +
      'Integrate web3 products into the existing Medal platform\n' +
      'Define and refine our visual language. Contribute to our design system and collaborate with other product designers.\n' +
      'Conduct user and market research to improve your design decisions\n' +
      'Use insights to build comprehensive user stories, low-fidelity wireframes, and prototypes\n' +
      'Communicate and present your ideas to the entire blockchain team (our team is spread across the globe but lean towards PST timezone for calls)\n' +
      'Work closely with the Product Manager on the roadmap\n' +
      'WHAT WE\'RE LOOKING FOR:'
  }));
}

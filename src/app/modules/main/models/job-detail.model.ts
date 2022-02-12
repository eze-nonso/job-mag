export class JobDetail {
  public description: string;
  public percentReady: number;
  public slotsAvailable: number;
  public location: string;
  public deadline: Date;
  public jobImage: string;
  public category: 'full time' | 'part time' | 'hybrid';
  public company: string;
  public desiredLevel: string;
  public desiredScore: number;
  public requirement: string;
  public totalApplicants: number;
  private readonly _locale = "en-US";

  constructor() {
    this.deadline = new Date();
    this.slotsAvailable = 0;
    this.percentReady = 0;
    this.description = '';
    this.location = '';
    this.jobImage = '';
    this.company = '';
    this.requirement = '';
    this.desiredLevel = '';
    this.desiredScore = 0;
    this.totalApplicants = 0;
    this.category = 'full time'
  }

  public get deadLineLong(): string {
    return this.deadline.toLocaleDateString(this._locale, {month: "long", day: "numeric"});
  }
}

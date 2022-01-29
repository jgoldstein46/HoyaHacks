class Application {
  applicationID: string;
  candidateID: string;
  resume: string;
  postingID: string;
  clubID: string;
  status: string;
  date: string;

  constructor(
    applicationID: string,
    candidateID: string,
    resume: string,
    postingID: string,
    clubID: string,
    status: string,
    date: string
  ) {
    this.applicationID = applicationID;
    this.candidateID = candidateID;
    this.resume = resume;
    this.postingID = postingID;
    this.clubID = clubID;
    this.status = status;
    this.date = date;
  }
}

export const defaultClub: Club = {
  name: "Rome",
  id: "",
  description: "Some stuff here",
  category: "",
  pointOfContactName: "Julius Caesar",
  pointOfContactEmail: "",
};

export const defaultCandidate: Candidate = {
  id: "0",
  firstName: "Marcus",
  lastName: "Aurelius",
  email: "ma69@georgetown.edu",
  phone: "",
  resume: "",
};

export const samplePostings: Posting[] = [
  {
    id: "1",
    title: "Posting 1",
    description: "Description 1",
    category: "Category 1",
    status: "Status 1",
    affliation: "Affliation 1",
  },
  {
    id: "2",
    title: "Posting 2",
    description: "Description 2",
    category: "Category 2",
    status: "Status 2",
    affliation: "Affliation 2",
  },
  {
    id: "3",
    title: "Posting 3",
    description: "Description 3",
    category: "Category 3",
    status: "Status 3",
    affliation: "Affliation 3",
  },
];

export const sampleClub: Club[] = [
  {
    id: "1",
    name: "Rome",
    description: "Some stuff here",
    category: "",
    pointOfContactName: "Julius Caesar",
    pointOfContactEmail: "",
  },
  {
    id: "2",
    name: "South Park",
    description: "Some stuff here",
    category: "",
    pointOfContactName: "Eric Cartman",
    pointOfContactEmail: "",
  },
];

export const sampleCandidate: Candidate[] = [
  {
    id: "1",
    firstName: "Eric",
    lastName: "Cartman",
    email: "",
    phone: "",
    resume: "",
  },
  {
    id: "2",
    firstName: "Stan",
    lastName: "Marsh",
    email: "",
    phone: "",
    resume: "",
  },
  {
    id: "3",
    firstName: "Kyle",
    lastName: "Broflovski",
    email: "",
    phone: "",
    resume: "",
  },
  {
    id: "4",
    firstName: "Kenny",
    lastName: "McCormick",
    email: "",
    phone: "",
    resume: "",
  },
];


export const sampleApplications: Application[] = [
  {
    applicationID: "1",
    candidateID: "1",
    resume: "resume1",
    status: "pending",
    postingID: "1",
    clubID: "1",
    date: "1/1/2020",
  },
  {
    applicationID: "2",
    candidateID: "2",
    resume: "resume2",
    status: "pending",
    postingID: "2",
    clubID: "2",
    date: "1/1/2020",
  },
];

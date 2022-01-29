class Posting {
  id: string;
  title: string;
  description: string;
  status: string;
  affliation: string;
  category: string;

  constructor(
    id: string,
    title: string,
    description: string,
    status: string,
    affliation: string,
    category: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.affliation = affliation;
    this.category = category;
  }
}

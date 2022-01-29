class Club {
  name: string;
  id: string;
  description: string;
  category: string;
  pointOfContactName: string;
  pointOfContactEmail: string;

  constructor(
    name: string,
    id: string,
    description: string,
    category: string,
    pointOfContactName: string,
    pointOfContactEmail: string
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.category = category;
    this.pointOfContactName = pointOfContactName;
    this.pointOfContactEmail = pointOfContactEmail;
  }
}

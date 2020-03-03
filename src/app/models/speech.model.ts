export class Speech {
  public id: number;
  public title: string;
  public content: string;
  public author: string;
  public keywords: string;
  public date: string;

  constructor(
    id: number,
    title: string,
    content: string,
    author: string,
    keywords: string,
    date: string
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.keywords = keywords;
    this.date = date;
  }
}

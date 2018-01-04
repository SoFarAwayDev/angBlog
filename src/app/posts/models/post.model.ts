export class Post {
  public id: number;
  public author: string;
  public text: string;
  public title: string;

  constructor(id: number, author: string, text: string, title: string) {
    this.id = id;
    this.author = author;
    this.text = text;
    this.title = title;
  }
}

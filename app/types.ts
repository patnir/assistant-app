export type Comment = {
  text: string;
  id: string;
  url: string;
  createdAt: number;
  selector: string;
  offsetX: number;
  offsetY: number;
}

export const randomComments = (total: number): Comment[] => {
  const comments: Comment[] = [];
  for (let i = 0; i < total; i++) {
    comments.push({
      text: `Comment ${i}`,
      id: Math.random().toString(36).substring(7),
      url: 'https://github.com',
      createdAt: Date.now(),
      selector: 'h1',
      offsetX: Math.random() * 100,
      offsetY: Math.random() * 100,
    });
  }
  return comments
}
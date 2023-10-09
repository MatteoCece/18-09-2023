export interface IconData {
  _uri: string;
  imagePath: string;
}
export interface ListItemData {
  count: null;
  data: ItemData[];
  error: null;
  status: number;
  statusText: string;
}

export interface ItemData {
  id: number;
  created_at: string;
  content: string;
  checked: boolean;
}

export interface CardData {
  title: string;
  description: string;
  optImage?: string;
  link: string;
}

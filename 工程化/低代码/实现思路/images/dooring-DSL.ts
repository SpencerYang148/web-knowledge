interface RootObject {
  tpl: Tpl[];
  pageConfig: PageConfig;
}

interface PageConfig {
  title: string;
}

interface Tpl {
  id: string;
  item: Item;
  point: Point;
  status: string;
}

interface Point {
  w: number;
  h: number;
  x: number;
  y: number;
  i: string;
  moved: boolean;
  static: boolean;
  isBounded: boolean;
}

interface Item {
  config: Config;
  h: number;
  type: string;
  category: string;
}

interface Config {
  cpName: string;
  bgColor?: string;
  width?: number;
  marginTop?: number;
  round: number;
  text?: string;
  color?: string;
  fontSize?: number;
  animation: string;
  animationTurn: number;
  delay: number;
  interaction: Interaction;
  imgUrl?: ImgUrl[];
  viewImage?: boolean;
}

interface ImgUrl {
  uid: string;
  name: string;
  status: string;
  url: string;
}

interface Interaction {
  type: string;
  title: string;
  params: string;
  content: string;
  height: number;
  width: number;
  okText: string;
  cancelText: string;
  onOk: string;
  btnColor: string;
}
/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
  pageInfo(): void {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

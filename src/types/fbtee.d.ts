declare namespace JSX {
  interface IntrinsicElements {
    fbt: {
      desc: string;
      children?: React.ReactNode;
    };
    'fbt:param': {
      name: string;
      children?: React.ReactNode;
    };
    'fbt:plural': {
      count: number;
      many?: string;
      showCount?: 'ifMany' | 'yes' | 'no';
      name?: string;
      children?: React.ReactNode;
    };
    'fbt:pronoun': {
      type: 'possessive' | 'object' | 'subject' | 'reflexive';
      gender: any;
      human?: boolean;
    };
    'fbt:list': {
      items: any[];
      toSentence?: (items: string[], conjuction?: string) => string;
      name?: string;
    };
  }
}

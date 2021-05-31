export const DefaultElement = (props: any): JSX.Element => (
  <p {...props!.attributes}>{props!.children}</p>
);

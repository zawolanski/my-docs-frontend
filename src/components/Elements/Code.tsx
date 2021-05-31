export const CodeElement = (props: any): JSX.Element => (
  <pre {...props!.attributes}>
    <code>{props!.children}</code>
  </pre>
);

type DefaultInput={
   children: React.ReactNode;
}
export function DefaultInput(props: DefaultInput){
const children = props.children

return (
  <h1>{children}</h1>
);
}
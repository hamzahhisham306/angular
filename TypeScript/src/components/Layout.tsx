type LayoutProps = {
  children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <h1>Welcome layout</h1>
      {props.children}
      <footer>Footer content</footer>
    </div>
  );
}

export default Layout;

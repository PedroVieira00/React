// This is our own Section component because we always will want some title
// and the jsx code on that order so in terms of scalability it's better
// this way.
// ...props garanties that all the other props that might be passed to
// Section, can be passed to any other component. This is usefull because
// of the styling e.g. in Examples, we pass the id="examples" because that
// id is styled in the css file. This way it let's us, create a section
// with the same caracteritics (id only in this case).
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// export default function TabButton({ label }) {
//     return (
//       <li>
//         <button>{label}</button>
//       </li>
//     );
// }

// export default function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       {/* Se eu pusesse handleClick() não era o que queria pois iria ser
//         executado mal executasse a linha toda que não é o pertendido.
//         É apenas pertendido que execute apenas quando houver um click. */}
//       <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* Se eu pusesse handleClick() não era o que queria pois iria ser 
        executado mal executasse a linha toda que não é o pertendido.
        É apenas pertendido que execute apenas quando houver um click. */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

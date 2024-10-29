export default function Tabs({ children, buttons, /*buttonsContainer ,*/ ButtonsContainer = 'menu'}) {
  // instead of having to create a new variable/const to put the tag (because
  //     it needs to start in a uppercase letter), we could just receive it
  //     with an already uppercase letter
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

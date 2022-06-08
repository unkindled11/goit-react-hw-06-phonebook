import MyNumbers from "./MyNumbers";

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection:'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding:'20px'
      }}
    >
      <MyNumbers/>
    </div>
  );
};



export default function Prac() {
//   const firstName = "Joe"
//   const lastName = "Schmoe"
    const hours = new Date().getHours();
    let getting = '';
    if(hours > 4 && hours < 12){
        getting = 'Morning';
    }else if (hours > 12 && hours < 16){
        getting = 'Afternoon';
    }else if(hours > 16 && hours < 21){
        getting = 'Evening';
    }else {
        getting = "Night";
    }
  
  return (
    // <h1>Hello {firstName + " " + lastName}</h1>
    // <h1>Hello {firstName} {lastName}</h1>
    <h1>Good {getting}</h1>
  )
}
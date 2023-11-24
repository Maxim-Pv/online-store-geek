import { useSelector } from "react-redux";

const OutputUserData = () => {
    const userName = useSelector((state) => state.name);
    const userAge = useSelector((state) => state.age);

    return (
      <div className="outputData">
         <p>Your name: {userName} </p>
        <p>Your age: {userAge} </p>
      </div>
    );
  
}

export default OutputUserData
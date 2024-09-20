 import { useContext, useState } from "react";
//  import { useContext } from "./UserContextProvider";

 interface Props{
    name: string;
    age:number;
    isMarried: boolean;
 }
//  export const User = (props: Props);
//  const  {users,updateUser,deleteUser} = useContext<UserContext>;
function Person(props: Props) {
    const [isShowInfo , setShowInfo] = useState<boolean|string|null>(false);
    const [bio,setBio] = useState<boolean|string|null>(null);

    const toggleInfo = () => {
        setShowInfo((prev)=> !prev);
        setBio('biography')
        console.log(isShowInfo);
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    };



    return (
       <div> 
        {isShowInfo && (
        <>    
        <h2>person</h2>
        <p>Name: {props.name}</p>
        <p>Age:  {props.age}</p>
        <p>isMarried: {props.isMarried.toString() }</p>
        {console.log(isShowInfo) }
        <p>{props.name} </p>
       <p>bio: {bio === null ? "no BIO available" : bio}</p>
       <input type="text" value={bio} onChange={handleChange} />
        </>
    
      
       )} 
       <button onClick={toggleInfo}>Toggle Info</button>
      
      </div>
    )
}

export default Person

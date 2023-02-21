import Input from "@mui/joy/Input";
export default function Inp(add, setAdd)  {
    return(
        <div>
            <Input onChange={(e) => setAdd((a)=>[...a , (e.target.value)])}/>
            <Input onChange={(e) => setAdd((a)=>[...a , (e.target.value)])}/>
            <Input onChange={(e) => setAdd((a)=>[...a , (e.target.value)])}/>
            <Input onChange={(e) => setAdd((a)=>[...a , (e.target.value)])}/>
            <Input onChange={(e) => setAdd((a)=>[...a , (e.target.value)])}/>
        </div>
    );
}
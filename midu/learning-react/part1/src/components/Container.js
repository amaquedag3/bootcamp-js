import Anotaciones from "./Anotaciones";
function Container(props) {
    return <div style={{
        width: '50%',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor : props.color,
        borderRadius: '5px'
    }}> 
        <Anotaciones />
    </div>
}
  
export default Container;
  
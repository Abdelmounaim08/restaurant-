import { useRef } from "react";
import { useSelector } from "react-redux"
import { useReactToPrint } from "react-to-print";
import logo from './image/logo.png';
import { useParams } from "react-router-dom";


function Facture() {
  
    const compenentRef = useRef();
    const printData = useReactToPrint({
      content: () => compenentRef.current,
      documentTitle: 'facture',
      onAfterPrint: () => alert('print succes')
    });
    const mystyle = {
      border: "1px dashed ",
      borderColor:"black"
    
    };

    var total = 0;
    const {num} = useParams();
    
  

    const commande = useSelector((data) => data.cmd);
    const price = useSelector((data) => data.cmd.price);
    return (<>
      <div  className="bg-slate-300 justify-center w-80 content-center pr-10 py-10 space-x-10 space-y-10 mr-40 ml-40 mt-10 "><fieldset>
        <div ref={compenentRef} className="space-x-3 space-y-3  text-xl ">
        <center><img src={logo} className="h-6 mr-3 sm:h-9 "/></center>
        <center><p > RESTAURANT </p></center>
        <center><p>localisation</p></center>
        <center><p>table :{num}</p></center>
       <p>----------------------------------------------------------------------------------------------------------------------------</p>
   
       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <h3>{new Date().toLocaleString() + ""}</h3>
          <tr>
            <td>PLAT</td>
            <td>qte</td>
            <td>prix</td>
          </tr>
         
          
          {commande.map((e, index) => {
            total += parseFloat(e.price);
            return <>
             <tr key={index} className="">
                <td >{e.name}</td>
                <td>{e.num}</td>
                <td>{e.price * e.num}</td>
            </tr>
            </>
          })} 
     
       <hr style={{mystyle}} />
        
        
          <tr className="bordr-1">
            <td className="border border-slate-300 text-center" colSpan="2">
              <b>Total</b>
            </td><tr>{total.toFixed(2)}</tr>
            </tr>
        </table>




    </div>  </fieldset></div>


    <div className=" text-center"> 
       <button onClick={printData} className='bg-blue-500 hover:bg-blue-700 place-content-center text-white font-bold py-2 px-3 rounded'>imprimer</button>

</div>
    </>)
  }


export default Facture;
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCmd, Ajouter, Update } from './action';
import axios from "axios";
import { FcCalculator } from 'react-icons/Fc'
import { useNavigate } from "react-router-dom"
import logo from './image/logo.png';
import Calcul from "./calcul";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useParams } from "react-router-dom"
import Alert from 'react-bootstrap/Alert';
import DateTime from "../page1/dateTime";






export default function Sidebar() {
  const commande = useSelector((data) => data.cmd);
  const count = useSelector(data => data.cmd.length);
  //console.log(commande);

  const [searchTitle, setSearchTitle] = useState("");
  const [frais, setFrais] = useState(0);
  const navigate = useNavigate();
  var total = 0;
  const { numT } = useParams();
  const { etat } = useParams()

  const dispatch = useDispatch();
  const [cat, setCat] = useState([]);
  const [item, setItem] = useState([]);
  const [theme, setTheme] = useState(null);
  const [ts, setts] = useState(null);

  const [date, setdate] = useState(null);
  const [Numbre, setNbre] = useState(null);




  const handlePrice = (id) => {
    item.map((e) => {
      if (e.id === id) {
        dispatch(Ajouter(
          {
            id: count + 1,
            name: e.name,
            num: 1,
            price: e.price,
            Numbre: Numbre,
            date: date
          }))
      }

    });
  }
  useEffect(() => {
    const loadPosts = async () => {

      const response = await axios.get(
        "https://test.gs-lafondation.com/api/pos"
      );
      setCat(response.data);
      const pb = (Plats) => {
        cat.map((e) => {
          if (e.name === Plats) {
            setItem(e.items);
          }

        })
      };

    };

    loadPosts();
  }, []);
  const [zlatan, setZ] = useState(false);
  const reserve = () => {
    setZ(true)
    if (count < 1) {
      setts(0)
    }
    else {
      setts(1);
    }
  }



  const handleClick = (ex) => {
    //console.log(ex);
    cat.map((e) => {
      if (e.name === ex) {
        setItem(e.items);
      }

    });
  }
  const handleDelete = (id) => {
    dispatch(deleteCmd(id))
  }
  //console.log(ts)
  //console.log(commande)
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return <>
    <div className="space-y-5  dark:bg-gray-700">

      <div className="dark:hover:bg-gray-700">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-gray-700 ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://www.facebook.com/mounaim.mis/" className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">restaurant</span>
            </a>
            <div className="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchTitle(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-white dark:placeholder-white dark:text-white dark:hover:ring-blue-500 dark:focus:border-blue-500 " />
              </div>
              <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-white dark" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchTitle(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-white dark:placeholder-white dark:text-white dark:hover:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>                            <button className="bg-green-200 p-2 rounded-xl" onClick={handleThemeSwitch}>
                  Dark Mode
                </button></li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
      <div className=" text-center space-x-11">
        {(zlatan === true) ?

          (ts == 1) ? <Alert key="success" className=" text-lg text-black space-x-11  italic bg-green-400 w-38 " >
            Success
            <button className="px-8 py-2 btn-sm bg-slate-100 rounded " onClick={() => { setts(null), setZ(false) }}  ><a href="/">ok</a></button>
          </Alert>
            : <Alert key="success" className=" text-lg text-black space-x-11  italic bg-red-400 w-38" >
              Failed
              <button className="px-8 py-2 btn-sm bg-slate-100 rounded " onClick={() => { setts(null), setZ(false) }}> <a href={`/command/${numT}/${etat}`}>ok</a></button>
            </Alert> : <p></p>

        }

      </div>
      <div className="space-y-16">
        <div className=" dark:bg-gray-700 ">


          <div className=" container flex  scroll-ml-6 snap-start space-x-1 flex-col md:flex-row dark:bg-gray-700">
            <div className="justify-start"> {
              cat.map((e) => {
                return <>
                  <div key={e.id} className="w-40 ms-left h-left  px-1 py-2  bg-white">

                    <button className="bg-white hover:bg-gray-400 px-8 py-2 text black italic btn-sm"
                      onClick={() => handleClick(e.name)} >{e.name}</button>
                  </div>


                </>
              })}
            </div>

            <div className="pr-2 pl-2 border bg-yellow-200 text-center ">
              <h2 className=" place-content-center ml- underline font-extrabold space-x-6  flex text-center text-black dark:text-gray-600">MENU  de  Restaurant</h2>
              <div className="   pl-2  grid sm:grid gap-2 grid-cols-3 scroll-ml-6   flex-col md:flex-row ">
                {

                  item.filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.name.toLowerCase().includes(searchTitle.toLowerCase())


                    ) {
                      return value;

                    }
                  }).map((t) => {
                    return <>


                      <button key={t.id} onClick={() => handlePrice(t.id)}

                        className="bg-white px-1 py-1  hover:bg-gray-400 w-40 h-30  text-black font-bold border-solid border-1 border-black" >

                        <center><img src={t.image} className=" container h-20 w-20 "></img>
                          <p >{t.name}</p>
                          <p >in Stock :{t.quantity}</p></center>
                      </button>
                    </>
                  })}

              </div>
            </div>
            <div className="  dark:bg-gray-700 flex items-stretch space-x-1 ">


              <div className=" pr-9 pl-[720px] py-0  absolute  inset-x-6 space-betwen ">

                <table className="bg-white  h-12 font-bold border-collapse border border-slate-400 md:max-w-lg  w  relative">
                  <thead className="mb-96 h-9 inset-x-0 bottom-30  ">
                    <tr className="border border-slate- bg-slate-200 ">
                      <td className="w-16">S/L</td><td>Produit Alimentaire</td><td>qte</td><td>prix</td><td>Action</td>
                    </tr>
                  </thead>
                  <tbody className="border border-slate-300  h-80 scroll-smooth snap-normal">
                    {commande.map((e) => {
                      total += parseFloat(e.price * e.num);
                      return <>
                        <tr key={e.id} >
                          <td className="border border-slate-300">{e.id}</td>
                          <td className="border border-slate-300">{e.name}</td>
                          <td className="border border-slate-300">
                            <button className="bg-green-400 rounded w-6 " onClick={() => dispatch((Update({ id: e.id, num: e.num + 1 })))}>+</button>
                            {e.num}
                            <button className="bg-red-600 rounded w-6" onClick={() => dispatch((Update({ id: e.id, num: e.num - 1 })))}>-</button>
                          </td>
                          <td className="border border-slate-300">{e.price * e.num}</td>
                          <td><button className="bg-red-500 text-white  py-1 px-1 rounded" onClick={() => handleDelete(e.id)}>Delete</button></td>
                        </tr>
                      </>
                    })}
                    </tbody>
                  


                  <tfoot>
                    <tr>
                      <td className="border border-slate-300"><input className="bg-gray-300 w-16 text-black font-medium" type="number" name="frais" placeholder="Frais%" onChange={(e) => setFrais(e.target.value)} /></td>
                      <td className="border border-slate-300">cgst+sgst(2.5+2.5)%:</td>
                      <td className="border border-slate-300 text-center" colSpan="3">{((total * 5) / 100).toFixed(2)} </td></tr>

                    <tr><td className="border border-slate-300">Total</td>
                      <td className="border border-slate-300 text-center bg-yellow-400" colSpan="4">{((total) + ((total * frais) / 100)).toFixed(2)}</td></tr>
                 
                 </tfoot> </table>
                
                <div className="space-y-3">
                  <div className="flex space-x-25  ">

                    <input type="datetime-local" onChange={(e) => setdate(e.target.value)} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                    <input type="number" placeholder="Nombre de Personne" onChange={(e) => setNbre(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-23 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                  </div>
                  <div className="flex space-x-25 ">


                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                      onClick={() => navigate(`/facture/${numT}`)} >facture</button>
                    <Popup
                      className="w-80 bg-transparent"
                      trigger=
                      {<button className=" btn-sm "><FcCalculator size={40} /> </button>}
                      modal nested>
                      {
                        close => (

                          <Calcul />
                        )
                      }
                    </Popup>
                    <div className="space-x-2">
                      <button className="bg-green-500 hover:bg-green-300  hover:text-black text-white font-bold py-2 px-3  rounded"
                        onClick={reserve}>réservée</button>
                      <button className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" ><a href={`/command/${numT}/${etat}`}>annuler</a></button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="space-y-35">
          <footer className="flex flex-col  dark:bg-gray-700 space-y-15">
            <div className="bg-white justify-between text-gray-900 font- text-lg fixed inset-x-0 bottom-0 p-1 py-2 pl-3 pr-4 space-y-2  flex dark:bg-gray-700 dark:text-white">
              <div className="row">
                <img src={logo} className="h-6 mr-3 sm:h-9"></img>
              </div>
              <div className="row">
                <p>Table :{numT}</p>
              </div>
              <div className="row">
                <p>etat :{etat}</p>
              </div>
              <div className="row">
                <p><DateTime /></p>
              </div>
              <div className="row">
                <p>&copy;{new Date().getFullYear()} </p>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </div>
  </>;
}
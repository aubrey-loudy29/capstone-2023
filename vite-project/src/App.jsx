import BookApt from './components/BookApt'
import Cart from './components/Cart'
import CheckedOut from './components/CheckedOut'
import Consult from './components/Consult'
import FilterService from './components/FilterService'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Locations from './components/Locations'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductCard from './components/ProductCard'
import Profile from './components/Profile'
import Register from './components/Register'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Stylists from './components/Stylists'
import Submitted from './components/Submitted'
import './App.css'
import './index.css'
import '../tailwind.config'
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [selected, setSelected] = useState([]);
    const [ isAlertVisible, setIsAlertVisible ] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const [users, setUsers] = useState([]);
    const [serviceArray, setServiceArray] = useState([]);
    const [rerender, setRerender] = useState(false)

    // filtering services
    const filters = [
        "All",
        "Cut + Styles",
        "Colors",
        "Wedding",
        "Facials + Add Ons",
        "Waxing",
        "Lash + Brows",
    ];

    const servicesToShow = serviceArray.filter((e) =>
          selected.length === 0 ||
          selected.includes("All") ||
          selected.includes(e.filters)
    );
    
    const toggleCategory = (category) => {
        if (selected.includes(category)) {
          setSelected(selected.filter((el) => el !== category));
        } else {
          setSelected([...selected, category]);
        }
    };

    useEffect(() => {
        fetch('/api/services')
        .then((resp) => resp.json())
        .then((serviceData) => setServiceArray(serviceData))
    }, [])
    //end of filter service

    function handleButtonClick () {
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
    }
    
    function onAddToCart(product){
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1}])
        }
    }

    function onBoth(product){
        onAddToCart(product);
        handleButtonClick();
        console.log('IT WORKS')
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    useEffect(() => {
        fetch('/api/users')
        .then((resp) => resp.json())
        .then((userData) => setUsers(userData))
      }, [])

      useEffect(() => {
        fetch('/api/check_session', { credentials: 'include' })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Failed to check session.');
          })
          .then((user) => {
            setCurrentUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const handleLogin = (user) => {
        setCurrentUser(user)
    }

    const routes = (
        <Routes>
            <Route exact path='/' element={ <div><Navbar /> <Home /></div>} />
            <Route path='/register' element={<Register setRerender={setRerender} rerender={rerender} handleLogin={handleLogin} currentUser={currentUser}/>} />
            <Route path='/login' element={<Login setRerender={setRerender} rerender={rerender} handleLogin={handleLogin} currentUser={currentUser}/>} />
            <Route path='/stylists' element={<div><Navbar /> <Stylists /></div>} />
            <Route path='/checkedout' element={<CheckedOut currentUser={currentUser}/>}/>
            <Route path='/products' element={<div><Navbar /> <Products /></div>} />
            <Route path='/products/:id' element={<div><Navbar /> <ProductCard onBoth={onBoth} onAddToCart={onAddToCart}/> </div>} />
            <Route path='/services' element={
                    <div>
                        <Navbar />
                        {/* <FilterService 
                        filters={filters}
                        selected={selected}
                        toggleCategory={toggleCategory}
                        /> */}
                        <Services 
                        serviceArray={servicesToShow}/>
                    </div>} />
            <Route path='/locations' element={<div><Navbar /> <Locations /></div>} />
            <Route path='/gallery' element={<div><Navbar /><Gallery /> </div>} />
            <Route path='/profile' element={<div><Navbar /><Profile currentUser={currentUser}/></div>} />
            <Route path='/book' element={<div><Navbar /><BookApt currentUser={currentUser}/></div>} />
            <Route path='/consult' element={<div><Navbar /><Consult /></div>} />
            <Route path='/cart' element={<div><Navbar /><Cart onAddToCart={onAddToCart} onRemove={onRemove} cartItems={cartItems}/></div>} />
            <Route path='/submitted' element={<Submitted />} />
            <Route path='/reviews' element={<div><Navbar /><Reviews currentUser={currentUser}/></div>} />
        </Routes>
    )
    return (
        <div className='app'>
            {routes}
            <Footer />
        </div>
    )
}
    

export default App

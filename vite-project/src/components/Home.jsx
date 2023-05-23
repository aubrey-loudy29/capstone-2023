import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import gallery from '../assets/gallery.png'
import stylist1 from '../assets/stylist1.jpeg'
import stylist2 from '../assets/stylist2.jpeg'
import stylist3 from '../assets/stylist3.jpeg'
import salon1 from '../assets/salon1.png'
import salon2 from '../assets/salon2.jpeg'
import salon3 from '../assets/salon3.jpeg'
import salon4 from '../assets/salon4.jpeg'
import salon5 from '../assets/salon5.jpeg'
import salon6 from '../assets/salon6.jpeg'
import salon7 from '../assets/salon7.jpeg'
import salon8 from '../assets/salon8.jpeg'
import salon10 from '../assets/salon10.jpeg'
import salon11 from '../assets/salon11.jpeg'

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

const Home = () => {
    const ref = useRef(null);

    useEffect(() => {
        const fetchStylists = async () => {
        const resp = await fetch("/api/stylists");
        if (resp.ok) {
            const stylists = await resp.json();
            setStylists(stylists);
        }
    };
    fetchStylists();
    }, []);

    return (
        <div id='home'>
            <p id='home-title'>
            <Divider />
                H O M E
            <Divider />
            </p>
            <Section>
            <div id='home-grid' className="grid grid-cols-3 gap-4">
                <div>
                    <img id='home-image' src={salon1} />
                </div>
                <div>
                    <img id='home-image' src={salon3} />
                </div>
                <div>
                    <img id='home-image' src={salon2} />
                </div>
            </div>
            </Section>
            <div id='home-accents' className='justify-top'>
            <Section>
            <div className='bg-greige text-tan p-8' >
                <p id='home-subtitle' > About Us! </p>
                <div id='elysian-definition' className='bg-tan text-greige rounded'>
                    <p id='elysian-definition-name'>elysian</p>
                    <p id='elysian-definition-pro'>[el.ee.sian] greek</p>
                    <p id='elysian-definition-def'> beautiful or creative, divinely inspired.</p>
                </div>
                <p id='gallery-summary'> Our mission is to create a relaxing and friendly space that values family, 
                    individuality and artistry. We created Elysian to be a place where our staff members can thrive
                    and be able to work together to provide services that instill confidence in our guests. Our goal
                    is that each and every person that steps foot into our doors would leave feeling refreshed, connected
                    and beautiful.
                </p>
            </div>
            </Section>
            <Section>
            <div className='bg-brown p-8'>
                <p id='home-subtitle' className='text-beige'> Stylists </p>
                <p id='gallery-summary' className='text-beige'> Our stylists have been in the craft anwhere
                    between 1 to 12 years. Each stylist goes through a four month training process before 
                    being able to take their own clients. This is to ensure that each stylist has the necessary
                    skills to be able to work behind the chair confidently and independently. We have a total of 
                    16 hair stylists and 8 estheticians who all bring something so unique and special into our salon!
                </p>
                <div id='small-stylists-grid' className="grid grid-cols-3 gap-4">
                <img id='small-stylists' src={stylist1} alt='salon1' />
                <img id='small-stylists' src={stylist2} alt='salon2' />
                <img id='small-stylists' src={stylist3} alt='salon3' />
                </div>
                <div>
                <Link to={"/stylists"}>
                    <button id='home-button' className="btn outline p-2 opacity-50 text-beige rounded-[12px]">Learn About Our Awesome Stylists!</button>
                </Link>
                </div>
            </div>
            </Section>
            <Section>
            <div className='bg-lightBlue text-blue justify-top p-12'>
                <p id='home-subtitle'> Services </p>
                <p id='gallery-summary'> What if i just write a bucnh of stuff in here 
                    dshbuidbuefewnjjewndkjewqjnejqwkneqdbneqjkdnwqd
                    dhbekdqejdbkqwbjdjqwbdjkqwbdkqwbdbqwkdwq
                    hqjwdhjbqwdjbwqjdjqwbdbqwjdb wqkbjdjbqwdbjkqwbjdbwq
                    qkjwbdjkqbdjkq c c cjbqwdwqjdjnqwkjc jkdqwjbdqwkjd qwsw
                    hjkqdjwqdjqwjjkbc qjkcqwjdjnqw  djkwqbjdqwn ecjqwbjhbhjdhjdbdjhd
                    dbhhdjhwq dwhnwqbhjwjbh q hqjwdhjbqwdjbwqjdjqwbdbqwjdbdwbjqh  wqkbjdjbqwdbjkqwbjdbwq
                    qjb c hjwqbbjhwqh cqhwqbhjdwhbdw  cqjbhwqbdqbkwdkd cbhwqjbdqwjkd jckjwdjwqc bwjk
                </p>
                <Link to={"/services"}>
                    <button id='home-button' className="btn bg-gray-100 opacity-50 outline rounded-[12px]">Check Out Our Full Service List</button>
                </Link>
            </div>
            </Section>
            <Section>
            <div className='bg-darkGray p-12'>
                <p id='home-subtitle' className='text-tan'> Gallery </p>
                <p id='gallery-summary' className='text-tan'> 
                    Here at Elysian, we take pride in all of our work! Our stylists work has been 
                    featured over 20 times on different brand sites including Redken, GoldWell and 
                    Kevin Murphy. We love when clients bring in one of our photos for their inspiration
                    photos!
                </p>
                <img src={gallery} alt='gallery' />
                <Link to={"/gallery"}>
                    <button id='nav-button' className="btn bg-gray-100 opacity-50 outline text-tan rounded-[12px]">More Inspiration Pictures</button>
                </Link>
            </div>
            </Section>
            <Section>
            <div className="columns-2 p-10 gap-10 bg-greige text-tan" >
                <div>
                <p id='home-subtitle'> Consultation </p>
                <p id='consult-summary'> Don't know what service you're looking for? Take our free online consultation here!</p>
                <Link to={"/consult"}>
                    <button id='home-button' className="btn bg-gray-100 opacity-50 outline rounded-[12px]">Online Consultation</button>
                </Link>
                </div>
                <div>
                <p id='home-subtitle'> Contact Us </p>
                <div id='consult-summary' >
                    <p> East Location - 555.444.3333</p>
                    <p> West Location - 222.111.0000</p>
                    <p> elysian_salons@gmail.com </p>
                </div>
            </div>
            </div>
            </Section>
            </div>
        </div>
    )
}

export default Home
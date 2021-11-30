import React, { useEffect } from 'react';
import {AiTwotoneStar} from 'react-icons/ai'
import { useGlobalContext } from './context';
import {Link} from 'react-router-dom'
import Loading from './Loading';

const Home = () => {
    const {quotes,setIndex, index, loading, randomQuote, alert, stared, addFavorite,list,showAlert} = useGlobalContext()
    const {text,author} = quotes;
    const {type,message,show} = alert;
    
    const nextQuote = () => {
        setIndex(index + 1)
    }

    const prevQuote = () => {
        setIndex(index - 1);
    }

    

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            showAlert()
        }, 2000);
        return ()=> clearTimeout(timeout)
    }, [list,showAlert])

    return (
        
        <div>
            <div className={`w-80 ${show ? 'block' : 'hidden'} m-auto my-28 font-bold h-6 ${type === 'success' && 'bg-green-500'} p-4 grid place-content-center rounded-md text-center md:w-96` }>{message} favorites</div>
            {loading ? <Loading /> : 
            <div className='w-80 text-4xl h-auto custom text-center p-8 rounded-md mx-auto my-12 relative md:w-96'>{text}
            <span className='name text-center text-lg mt-8 block'>- {author}</span>
            <AiTwotoneStar onClick={(addFavorite)}  style={{color: stared ? 'yellow' : 'white'}} className="absolute top-2 right-2 cursor-pointer text-xl md:text-2xl" />
        </div>
            }
            <div className="grid grid-cols-3 font-bold w-80 m-auto gap-4 md:gap-2 mb-8">
                <div className='w-22 h-8 md:h-12 custom-button uppercase rounded-full grid place-content-center cursor-pointer transition ease-in duration-500' onClick={prevQuote}>prev</div>
                <div className='w-22 h-8 md:h-12 custom-button uppercase rounded-full grid place-content-center cursor-pointer transition ease-in duration-500' onClick={randomQuote}>random</div>
                <div className='w-22 h-8 md:h-12 custom-button uppercase rounded-full grid place-content-center cursor-pointer transition ease-in duration-500' onClick={nextQuote}>next</div>
            </div>
            <Link to="/favorites">
                <div className='p-2 m-auto mb-8 w-24 custom-button uppercase font-bold rounded-md grid place-content-center cursor-pointer transition ease-in duration-500 '>favorites</div>
            </Link>
        </div>
        
    );
}

export default Home;

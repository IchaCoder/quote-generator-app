import React from 'react';
import {Link} from "react-router-dom"
import { useGlobalContext } from './context';
import { AiTwotoneStar } from 'react-icons/ai';

const Favorites = () => {
    const {list, removeFavorite, stared} = useGlobalContext();
    
    return (
        <div>
            {list.length < 1 ? <h2 className="font-bold loading text-center mb-4">No Favorites to Display</h2> :
            list.map((item, id) => {
                const {text,author} = item;
                return <div key={id} className='w-80 text-4xl h-auto custom text-center p-8 rounded-md mx-auto my-12 relative md:w-96'>{text}
                <span className='name text-center text-lg mt-8 block'>- {author}</span>
                <AiTwotoneStar onClick={()=> removeFavorite(id)}  style={{color: stared ? 'yellow' : 'white'}} className="absolute top-2 right-2 cursor-pointer text-xl md:text-2xl" />
            </div> 
            })
            
            }
            
            <Link to="/">
                <div className='p-2 m-auto mb-8 w-24 custom-button uppercase font-bold rounded-md grid place-content-center cursor-pointer transition ease-in duration-500 '>home</div>
            </Link>
        </div>
        
    );
}

export default Favorites;
